# Maivi Application Architecture Diagrams

## 1. System Architecture & Communication Diagram

```mermaid
graph TB
    %% User Interface Layer
    subgraph "User Interface Layer"
        GUI[Qt GUI<br/>qt_gui.py]
        CLI[CLI Interface<br/>cli.py]
        TerminalUI[Terminal UI<br/>terminal_ui.py]
    end

    %% Core Processing Layer
    subgraph "Core Processing Layer"
        MainEntry[Main Entry Point<br/>__main__.py]
        STTServer[STT Server<br/>server.py]
        StreamingRecorder[Streaming Recorder<br/>streaming_recorder.py]
        ChunkMerger[Chunk Merger<br/>chunk_merger.py]
        PauseDetector[Pause Detector<br/>pause_detector.py]
    end

    %% AI/ML Layer
    subgraph "AI/ML Layer"
        NeMoModel[NVIDIA NeMo<br/>Parakeet TDT 0.6B]
        HuggingFace[HuggingFace<br/>Model Cache]
    end

    %% Audio Processing Layer
    subgraph "Audio Processing Layer"
        SoundDevice[SoundDevice<br/>Audio Input]
        Librosa[Librosa<br/>Audio Processing]
        SoundFile[SoundFile<br/>WAV Processing]
    end

    %% System Integration Layer
    subgraph "System Integration Layer"
        KeyboardListener[Keyboard Listener<br/>pynput]
        Clipboard[Clipboard<br/>pyperclip]
        Notifications[Notifications<br/>plyer]
        FileSystem[File System<br/>Recordings Storage]
    end

    %% External Dependencies
    subgraph "External Dependencies"
        PyTorch[PyTorch<br/>ML Framework]
        Qt[PySide6<br/>GUI Framework]
        NumPy[NumPy<br/>Array Processing]
    end

    %% Connections
    GUI --> MainEntry
    CLI --> STTServer
    MainEntry --> STTServer
    STTServer --> StreamingRecorder
    STTServer --> ChunkMerger
    STTServer --> PauseDetector
    StreamingRecorder --> SoundDevice
    StreamingRecorder --> Librosa
    StreamingRecorder --> SoundFile
    STTServer --> NeMoModel
    NeMoModel --> HuggingFace
    STTServer --> KeyboardListener
    STTServer --> Clipboard
    STTServer --> Notifications
    StreamingRecorder --> FileSystem
    STTServer --> TerminalUI

    %% Dependencies
    NeMoModel --> PyTorch
    GUI --> Qt
    StreamingRecorder --> NumPy
    ChunkMerger --> NumPy

    %% Styling
    classDef userInterface fill:#e1f5fe
    classDef coreProcessing fill:#f3e5f5
    classDef aiMl fill:#fff3e0
    classDef audio fill:#e8f5e8
    classDef system fill:#fce4ec
    classDef external fill:#f5f5f5

    class GUI,CLI,TerminalUI userInterface
    class MainEntry,STTServer,StreamingRecorder,ChunkMerger,PauseDetector coreProcessing
    class NeMoModel,HuggingFace aiMl
    class SoundDevice,Librosa,SoundFile audio
    class KeyboardListener,Clipboard,Notifications,FileSystem system
    class PyTorch,Qt,NumPy external
```

## 2. Application Flow Diagram

```mermaid
flowchart TD
    Start([User Starts Application]) --> EntryPoint{Entry Point}
    
    EntryPoint -->|GUI Mode| GUIMode[Qt GUI Mode<br/>maivi]
    EntryPoint -->|CLI Mode| CLIMode[CLI Mode<br/>maivi-cli]
    EntryPoint -->|Reprocess| ReprocessMode[File Reprocessing<br/>--reprocess]
    
    %% GUI Flow
    GUIMode --> LoadModel[Load NVIDIA Parakeet Model<br/>~600MB Download]
    LoadModel --> CreateGUI[Create Qt Overlay Window]
    CreateGUI --> StartKeyboardListener[Start Keyboard Listener<br/>Cmd+Q Detection]
    StartKeyboardListener --> WaitForHotkey[Wait for Cmd+Q]
    
    %% CLI Flow
    CLIMode --> LoadModelCLI[Load NVIDIA Parakeet Model]
    LoadModelCLI --> CreateCLI[Create CLI Interface]
    CreateCLI --> StartKeyboardListenerCLI[Start Keyboard Listener]
    StartKeyboardListenerCLI --> WaitForHotkeyCLI[Wait for Hotkey]
    
    %% Reprocess Flow
    ReprocessMode --> LoadModelReprocess[Load Model for Reprocessing]
    LoadModelReprocess --> ProcessFile[Process WAV File]
    ProcessFile --> CopyToClipboard[Copy Result to Clipboard]
    CopyToClipboard --> ExitReprocess[Exit]
    
    %% Recording Flow
    WaitForHotkey -->|Cmd+Q Pressed| StartRecording[Start Audio Recording<br/>StreamingRecorder]
    WaitForHotkeyCLI -->|Hotkey Pressed| StartRecording
    
    StartRecording --> AudioCallback[Audio Callback<br/>Real-time Processing]
    AudioCallback --> BufferAudio[Buffer Audio Data<br/>7s Window, 3s Slide]
    BufferAudio --> CheckDelay{Start Delay<br/>Reached?}
    
    CheckDelay -->|No| ContinueRecording[Continue Recording]
    ContinueRecording --> AudioCallback
    
    CheckDelay -->|Yes| ProcessChunk[Process Audio Chunk<br/>Send to Transcription Queue]
    ProcessChunk --> TranscribeChunk[Transcribe with NeMo Model]
    TranscribeChunk --> MergeChunks[Merge with ChunkMerger<br/>Overlap Detection]
    MergeChunks --> UpdateUI[Update UI Display]
    UpdateUI --> CheckRecording{Still Recording?}
    
    CheckRecording -->|Yes| ContinueRecording
    CheckRecording -->|No| StopRecording[Stop Recording]
    
    %% Stop Recording Flow
    StopRecording --> FinalTranscription[Final Transcription<br/>Complete Audio]
    FinalTranscription --> CopyToClipboardFinal[Copy to Clipboard]
    CopyToClipboardFinal --> AutoPaste{Auto-Paste<br/>Enabled?}
    
    AutoPaste -->|Yes| SimulatePaste[Simulate Ctrl+V]
    AutoPaste -->|No| ShowNotification[Show Notification]
    SimulatePaste --> ShowNotification
    ShowNotification --> SaveRecording[Save Recording to File<br/>Platform-specific Directory]
    SaveRecording --> CleanupOld[Cleanup Old Recordings<br/>Keep Last N]
    CleanupOld --> WaitForHotkey
    
    %% Exit Flow
    WaitForHotkey -->|Esc Pressed| Exit[Exit Application]
    WaitForHotkeyCLI -->|Esc Pressed| Exit
    
    %% Error Handling
    LoadModel -->|Error| ModelError[Model Download Error]
    ModelError --> Exit
    
    StartRecording -->|Error| AudioError[Audio Error]
    AudioError --> Exit
    
    %% Styling
    classDef startEnd fill:#4caf50,color:#fff
    classDef process fill:#2196f3,color:#fff
    classDef decision fill:#ff9800,color:#fff
    classDef error fill:#f44336,color:#fff
    classDef userAction fill:#9c27b0,color:#fff
    
    class Start,Exit,ExitReprocess startEnd
    class LoadModel,CreateGUI,StartRecording,TranscribeChunk,MergeChunks process
    class EntryPoint,CheckDelay,CheckRecording,AutoPaste decision
    class ModelError,AudioError error
    class WaitForHotkey,WaitForHotkeyCLI userAction
```

## 3. Data Flow Diagram

```mermaid
flowchart LR
    subgraph "Audio Input"
        Microphone[🎤 Microphone]
        AudioStream[Audio Stream<br/>16kHz, Mono]
    end
    
    subgraph "Audio Processing"
        SoundDevice[SoundDevice<br/>Real-time Capture]
        AudioBuffer[Audio Buffer<br/>7s Window]
        ChunkQueue[Chunk Queue<br/>3s Intervals]
    end
    
    subgraph "Transcription Pipeline"
        NeMoModel[NVIDIA NeMo<br/>Parakeet TDT 0.6B]
        ChunkText[Chunk Text<br/>Raw Transcription]
        ChunkMerger[Chunk Merger<br/>Overlap Detection]
        MergedText[Merged Text<br/>Final Result]
    end
    
    subgraph "Output Processing"
        Clipboard[📋 Clipboard<br/>pyperclip]
        AutoPaste[Auto-Paste<br/>Ctrl+V Simulation]
        FileSave[💾 File Save<br/>WAV Recording]
        Notification[🔔 Notification<br/>User Feedback]
    end
    
    subgraph "User Interface"
        GUI[🖥️ Qt Overlay<br/>Real-time Display]
        CLI[💻 Terminal UI<br/>Live Updates]
        Keyboard[⌨️ Keyboard Input<br/>Cmd+Q Hotkey]
    end
    
    %% Data Flow
    Microphone --> AudioStream
    AudioStream --> SoundDevice
    SoundDevice --> AudioBuffer
    AudioBuffer --> ChunkQueue
    ChunkQueue --> NeMoModel
    NeMoModel --> ChunkText
    ChunkText --> ChunkMerger
    ChunkMerger --> MergedText
    MergedText --> Clipboard
    MergedText --> AutoPaste
    MergedText --> GUI
    MergedText --> CLI
    AudioStream --> FileSave
    Clipboard --> Notification
    Keyboard --> SoundDevice
    
    %% Styling
    classDef audio fill:#e3f2fd
    classDef processing fill:#f3e5f5
    classDef transcription fill:#fff3e0
    classDef output fill:#e8f5e8
    classDef ui fill:#fce4ec
    
    class Microphone,AudioStream audio
    class SoundDevice,AudioBuffer,ChunkQueue processing
    class NeMoModel,ChunkText,ChunkMerger,MergedText transcription
    class Clipboard,AutoPaste,FileSave,Notification output
    class GUI,CLI,Keyboard ui
```

## 4. Component Interaction Sequence

```mermaid
sequenceDiagram
    participant User
    participant GUI as Qt GUI
    participant Server as STT Server
    participant Recorder as Streaming Recorder
    participant Model as NeMo Model
    participant Merger as Chunk Merger
    participant Clipboard as System Clipboard
    
    User->>GUI: Start Application
    GUI->>Server: Initialize STT Server
    Server->>Model: Load Parakeet Model (~600MB)
    Model-->>Server: Model Ready
    Server->>GUI: Show Overlay Window
    GUI-->>User: "Ready - Press Cmd+Q to record"
    
    User->>GUI: Press Cmd+Q
    GUI->>Server: Start Recording Signal
    Server->>Recorder: Start Audio Recording
    Recorder->>Recorder: Begin 7s Window Buffer
    Recorder-->>Server: Audio Chunks (3s intervals)
    
    loop For Each Audio Chunk
        Server->>Model: Transcribe Chunk
        Model-->>Server: Chunk Text
        Server->>Merger: Add Chunk Text
        Merger->>Merger: Find Overlap with Previous
        Merger-->>Server: Merged Text
        Server->>GUI: Update Display
        GUI-->>User: Show Live Transcription
    end
    
    User->>GUI: Press Cmd+Q Again
    GUI->>Server: Stop Recording Signal
    Server->>Recorder: Stop Recording
    Recorder-->>Server: Final Audio Data
    Server->>Model: Transcribe Final Audio
    Model-->>Server: Final Text
    Server->>Merger: Final Merge
    Merger-->>Server: Complete Text
    Server->>Clipboard: Copy to Clipboard
    Server->>GUI: Show Final Result
    GUI-->>User: "Transcription Complete"
    
    User->>GUI: Press Esc
    GUI->>Server: Exit Signal
    Server->>Recorder: Cleanup
    Server->>GUI: Close Application
    GUI-->>User: Application Closed
```

## 5. Threading Architecture

```mermaid
graph TB
    subgraph "Main Thread"
        MainThread[Main Application Thread]
        GUIThread[Qt GUI Thread]
    end
    
    subgraph "Background Threads"
        KeyboardThread[Keyboard Listener Thread<br/>pynput]
        AudioThread[Audio Recording Thread<br/>sounddevice callback]
        TranscriptionThread[Transcription Thread<br/>NeMo processing]
        FileThread[File I/O Thread<br/>WAV saving]
    end
    
    subgraph "Thread Communication"
        Queue[Processing Queue<br/>Audio chunks]
        Signals[Qt Signals<br/>GUI updates]
        Events[Thread Events<br/>Start/Stop recording]
    end
    
    %% Thread Connections
    MainThread --> KeyboardThread
    MainThread --> AudioThread
    MainThread --> TranscriptionThread
    MainThread --> FileThread
    
    KeyboardThread --> Events
    AudioThread --> Queue
    Queue --> TranscriptionThread
    TranscriptionThread --> Signals
    Signals --> GUIThread
    
    Events --> AudioThread
    Events --> TranscriptionThread
    
    %% Styling
    classDef main fill:#4caf50,color:#fff
    classDef background fill:#2196f3,color:#fff
    classDef communication fill:#ff9800,color:#fff
    
    class MainThread,GUIThread main
    class KeyboardThread,AudioThread,TranscriptionThread,FileThread background
    class Queue,Signals,Events communication
```

## Key Features of Maivi Architecture:

### 1. **Modular Design**
- Clear separation between GUI, CLI, and core processing
- Pluggable components for different interfaces
- Independent audio processing and transcription

### 2. **Real-time Processing**
- Streaming audio capture with overlapping chunks
- Parallel processing of audio chunks during recording
- Live UI updates with transcription progress

### 3. **Smart Chunk Merging**
- 7-second chunks with 4-second overlap
- Overlap detection for seamless merging
- No word cutting or complex algorithms

### 4. **Cross-platform Support**
- Qt for GUI (Windows, macOS, Linux)
- SoundDevice for audio (better ARM64 support)
- Platform-specific file storage

### 5. **Performance Optimized**
- CPU-only processing (no GPU required)
- Efficient memory management
- Configurable chunk sizes and timing

### 6. **User Experience**
- Hotkey support (Cmd+Q on macOS)
- Automatic clipboard integration
- Real-time visual feedback
- Notification system
