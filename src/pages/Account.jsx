import { useState, useEffect } from "react";

import Notification from "../components/Notification"
import InfoButton from "../components/InfoButton"

const Account = () => {
  // State management
  const [isRegistered, setIsRegistered] = useState(false);
  const [username, setUsername] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showChangeUsername, setShowChangeUsername] = useState(false);
  const [newUsername, setNewUsername] = useState('');
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [signupData, setSignupData] = useState({ username: '', email: '', password: '' });
  const [signupError, setSignupError] = useState('');

  // Load user data from sessionStorage on component mount
  useEffect(() => {
    try {
      const registered = !!sessionStorage.getItem('isRegistered');
      setIsRegistered(registered);
      
      if (registered) {
        const savedUsername = sessionStorage.getItem('username');
        setUsername(savedUsername);
      }
    } catch (error) {
      console.error('Error loading account details:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Handler functions for user actions
  const handleChangeUsername = () => {
    if (newUsername.trim()) {
      sessionStorage.setItem('username', newUsername);
      setUsername(newUsername);
      setNewUsername('');
      setShowChangeUsername(false);
    }
  };

  const handleResetPassword = () => {
    alert('Password reset functionality would be implemented here');
    // TODO: Implement password reset
  };

  const handleSignOut = () => {
    sessionStorage.removeItem('isRegistered');
    sessionStorage.removeItem('username');
    setIsRegistered(false);
    setUsername(null);
  };

  const handleDeleteAccount = () => {
    if (window.confirm('Are you sure you want to delete your account? This cannot be undone.')) {
      sessionStorage.clear();
      setIsRegistered(false);
      setUsername(null);
    }
  };

  const handleLogIn = () => {
    setShowLoginForm(true);
  };

  const handleSignUp = () => {
    setShowSignupForm(true);
    setSignupError('');
  };

  const handleSignupSubmit = () => {
    const { username: newUser, email, password } = signupData;
    
    // Validation
    if (!newUser.trim() || !email.trim() || !password.trim()) {
      setSignupError('All fields are required');
      return;
    }
    if (!email.includes('@')) {
      setSignupError('Please enter a valid email');
      return;
    }
    if (password.length < 6) {
      setSignupError('Password must be at least 6 characters');
      return;
    }

    // Store in sessionStorage
    sessionStorage.setItem('isRegistered', 'true');
    sessionStorage.setItem('username', newUser);
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('password', password); // WARNING: Not secure for real apps!

    // Update state
    setUsername(newUser);
    setIsRegistered(true);
    setShowSignupForm(false);
    setSignupData({ username: '', email: '', password: '' });
    setSignupError('');
  };

  const handleLoginAttempt = () => {
    setShowLoginForm(false);
  };

  if (isLoading) {
    return <main className="account-hero"><p>Loading...</p></main>;
  }

  return (
    <>
      <Notification 
        title="Placeholder Page" 
        message="Account management is handled client-side. Any information you type here will not be sent to our servers. Passwords are not salted or hashed, so be diligent of what you enter. All data is stored in your session, so refresh the page to delete your data." 
      />
      <main className="account-hero">
        <section>
          {isRegistered ? (
            <>
              <h1>Welcome, {username}!</h1>
              <p>Manage your account settings below.</p>

              {/* Change Username Section */}
              {showChangeUsername ? (
                <div className="form-group">
                  <input
                    type="text"
                    value={newUsername}
                    onChange={(e) => setNewUsername(e.target.value)}
                    placeholder="Enter new username"
                  />
                  <button onClick={handleChangeUsername}>Confirm</button>
                  <button onClick={() => {
                    setShowChangeUsername(false);
                    setNewUsername('');
                  }}>
                    Cancel
                  </button>
                </div>
              ) : (
                <InfoButton 
                  balloonText={"This button lets you change your username."}
                  onClick={() => setShowChangeUsername(true)}
                >
                  Change Username
                </InfoButton>
              )}

              <InfoButton 
                balloonText={"This button lets you reset your password."}
                onClick={handleResetPassword}
              >
                Reset Password
              </InfoButton>

              <InfoButton 
                balloonText={"This button lets you sign out."}
                onClick={handleSignOut}
              >
                Sign Out
              </InfoButton>

              <InfoButton 
                balloonText={"This button lets you delete your account."}
                onClick={handleDeleteAccount}
              >
                Delete Account
              </InfoButton>
            </>
          ) : (
            <>
              {showLoginForm ? (
                <div className="auth-form">
                  <h2>Log In</h2>
                  <p style={{ color: 'var(--accent-1)', fontWeight: 'bold' }}>No account available in this session.</p>
                  <p>Please create a new account to continue.</p>
                  <button onClick={() => {
                    setShowLoginForm(false);
                    setShowSignupForm(true);
                    setSignupError('');
                  }}>
                    Create Account
                  </button>
                  <button onClick={() => setShowLoginForm(false)}>Back</button>
                </div>
              ) : showSignupForm ? (
                <div className="auth-form">
                  <h2>Sign Up</h2>
                  {signupError && <p style={{ color: 'var(--accent-1)' }}>{signupError}</p>}
                  
                  <div className="form-group">
                    <label htmlFor="signup-username">Username:</label>
                    <input
                      id="signup-username"
                      type="text"
                      value={signupData.username}
                      onChange={(e) => setSignupData({ ...signupData, username: e.target.value })}
                      placeholder="Enter username"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="signup-email">Email:</label>
                    <input
                      id="signup-email"
                      type="email"
                      value={signupData.email}
                      onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                      placeholder="Enter email"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="signup-password">Password:</label>
                    <input
                      id="signup-password"
                      type="password"
                      value={signupData.password}
                      onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                      placeholder="Enter password (min 6 characters)"
                    />
                  </div>

                  <button onClick={handleSignupSubmit}>Create Account</button>
                  <button onClick={() => {
                    setShowSignupForm(false);
                    setSignupData({ username: '', email: '', password: '' });
                    setSignupError('');
                  }}>
                    Back
                  </button>
                </div>
              ) : (
                <>
                  <h1>Welcome to Braindye!</h1>
                  <p>Either log in if you have an existing account, or sign up.</p>
                  
                  <button onClick={handleLogIn}>Log In</button>
                  <button onClick={handleSignUp}>Sign Up</button>
                </>
              )}
            </>
          )}
        </section>
      </main>
    </>
  );
};

export default Account
