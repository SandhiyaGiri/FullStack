import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loggedInEmail, setLoggedInEmail] = useState('');

  // Check for saved login state on component mount
  useEffect(() => {
    const savedLoginStatus = localStorage.getItem('isLoggedIn');
    const savedEmail = localStorage.getItem('email');
    if (savedLoginStatus === 'true' && savedEmail) {
      setIsLoggedIn(true);
      setLoggedInEmail(savedEmail);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password) {
        setError('Please enter both email and password.');
        return;
    }
    
    if (!/\S+@\S+\.\S+/.test(email)) {
        setError('Please enter a valid email address.');
        return;
    }

    setIsLoading(true);

    // Simulate network request
    setTimeout(() => {
      // In a real app, you would make an API call here.
      // For this example, any non-empty password is valid.
      setIsLoggedIn(true);
      setLoggedInEmail(email);
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('email', email);
      setIsLoading(false);
    }, 1000);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoggedInEmail('');
    setEmail('');
    setPassword('');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('email');
  };

  if (isLoggedIn) {
    return (
      <div className="welcome-container" aria-live="polite">
        <h1>Welcome!</h1>
        <p>You are logged in as <span className="email">{loggedInEmail}</span>.</p>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>
    );
  }

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleLogin} noValidate>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-required="true"
            aria-invalid={!!error}
            aria-describedby="error-message"
            autoComplete="email"
            placeholder="you@example.com"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            aria-required="true"
            aria-invalid={!!error}
            aria-describedby="error-message"
            autoComplete="current-password"
            placeholder="••••••••"
          />
        </div>
        <button type="submit" className="submit-btn" disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
        <p id="error-message" className="error-message" role="alert">{error}</p>
      </form>
    </div>
  );
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);