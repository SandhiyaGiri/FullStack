# Beginner JavaScript Course

A comprehensive collection of JavaScript exercises, playground files, and learning materials from the Wes Bos Beginner JavaScript course.

## 📁 Project Structure

```
beginner_javascript/
├── exercises/           # Interactive exercises and projects
├── playground/          # Code examples and practice files
├── html_basics/         # HTML fundamentals
├── sample/             # Sample code and examples
├── others/             # Additional topics (security, etc.)
├── base.css            # Shared styling for exercises
└── package.json        # Project dependencies
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (for exercises requiring file access)
- Code editor (VS Code, Sublime Text, etc.)

### Running the Exercises

1. **Start a local server** from the project root:
   ```bash
   # Using Python 3
   python3 -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

2. **Open your browser** and navigate to:
   ```
   http://localhost:8000/exercises/[exercise-name]/[file-name].html
   ```

## 📚 Exercises

### Core JavaScript Concepts

| Exercise | Description | Files |
|----------|-------------|-------|
| **Arrays** | Array methods and manipulation | `exercises/arrays/array-methods.html` |
| **DOM** | Document Object Model manipulation | `exercises/dom/` |
| **Events** | Event handling and listeners | `exercises/events/` |
| **Forms** | Form handling and validation | `exercises/forms/` |
| **Looping** | Different types of loops | `exercises/looping/` |
| **Map/Filter/Reduce** | Array transformation methods | `exercises/map-filter-reduce/` |

### Interactive Projects

| Project | Description | Special Requirements |
|---------|-------------|---------------------|
| **Etch-a-Sketch** | Drawing application | None |
| **Face Detection** | Real-time face detection with pixelation | Chrome with experimental features |
| **Gallery** | Image gallery with interactions | None |
| **Sarcastic Text Generator** | Text transformation tool | None |

### Debugging & Development

| Topic | Description | Files |
|-------|-------------|-------|
| **Debugging** | Debugging techniques and tools | `exercises/debugging/` |

## 🎮 Playground

The `playground/` directory contains standalone examples for learning JavaScript concepts:

### Core Concepts
- **`scope.html`** - Variable scope and closures
- **`hoisting.html`** - JavaScript hoisting behavior
- **`this.html`** - Understanding the `this` keyword
- **`closures.html`** - Closure examples and patterns

### Advanced Topics
- **`async_await.html`** - Modern async/await patterns
- **`promises.html`** - Promise handling
- **`apis.html`** - Working with external APIs
- **`storages.html`** - Local storage and session storage

### Data Types & Operations
- **`objects.html`** - Object manipulation
- **`type.html`** - Type checking and conversion
- **`map.html`** - Map data structure
- **`bedmas.html`** - Order of operations

## 🔧 Special Setup Requirements

### Face Detection Exercise
The face detection exercise requires special browser configuration:

1. **Enable experimental features in Chrome:**
   - Go to `chrome://flags`
   - Search for "Experimental Web Platform features"
   - Set to "Enabled"
   - Restart Chrome

2. **Access the exercise:**
   ```
   http://localhost:8000/exercises/face_detection/face_detection.html
   ```

## 📖 HTML Basics

The `html_basics/` directory contains fundamental HTML examples and structure.

## 🔒 Security Examples

The `others/security/` directory includes examples of:
- **CSRF (Cross-Site Request Forgery)** protection
- **XSS (Cross-Site Scripting)** prevention

## 🎨 Styling

All exercises use the shared `base.css` file for consistent styling and layout.

## 📝 Learning Path

### Recommended Order:
1. **HTML Basics** - Start with `html_basics/`
2. **Core Concepts** - Work through `playground/` files
3. **DOM Manipulation** - Practice with `exercises/dom/`
4. **Events & Forms** - Learn interaction patterns
5. **Array Methods** - Master data manipulation
6. **Projects** - Build interactive applications

### For Beginners:
- Start with `playground/scope.html` and `playground/hoisting.html`
- Practice with `exercises/arrays/array-methods.html`
- Build confidence with `exercises/dom/` exercises

### For Intermediate Learners:
- Focus on `playground/async_await.html` and `playground/promises.html`
- Challenge yourself with the interactive projects
- Explore the security examples in `others/security/`

## 🛠️ Development Tips

1. **Use Browser DevTools** - Open F12 to inspect and debug
2. **Console Logging** - Use `console.log()` to understand code flow
3. **Breakpoints** - Set breakpoints in DevTools for debugging
4. **Experiment** - Modify the code to see what happens

## 📚 Additional Resources

- [MDN JavaScript Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Wes Bos JavaScript Course](https://beginnerjavascript.com/)
- [Chrome DevTools Documentation](https://developers.google.com/web/tools/chrome-devtools)

## 🤝 Contributing

This is a learning repository. Feel free to:
- Add comments to exercises
- Create your own variations
- Share solutions with others
- Report issues or improvements

## 📄 License

This project is for educational purposes. Please respect the original course materials and Wes Bos's work.

---

**Happy Coding! 🚀**

*Remember: The best way to learn JavaScript is by doing. Don't just read the code - run it, modify it, and experiment with it!*
