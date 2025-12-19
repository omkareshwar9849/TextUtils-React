
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function LoginPage(props) {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const history = useHistory();

  // Handle input field changes
  const onChange = (event) => {
    const { name, value } = event.target;
    setCredentials({
      ...credentials,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate that both fields are filled
    if (!credentials.username || !credentials.password) {
      props.showAlert('Please fill in all fields', 'danger');
      return;
    }

    try {
      // Retrieve stored credentials from localStorage
      const storedCredentialsJSON = localStorage.getItem('userCredentials');
      
      if (!storedCredentialsJSON) {
        props.showAlert('No user account found. Please register first.', 'danger');
        return;
      }

      const storedCredentials = JSON.parse(storedCredentialsJSON);

      // Compare entered credentials with stored credentials
      if (
        credentials.username === storedCredentials.username &&
        credentials.password === storedCredentials.password
      ) {
        // Credentials match - successful login
        props.handleLogin();
        props.showAlert('Login successful!', 'success');
        // Redirect to home page
        history.push('/TextUtils-React');
      } else {
        // Credentials do not match
        props.showAlert('Invalid username or password', 'danger');
      }
    } catch (error) {
      // Handle errors during localStorage access
      props.showAlert('An error occurred during login. Please try again.', 'danger');
    }
  };

  // Determine styling based on mode
  const getContainerStyle = () => {
    if (props.mode === 'dark') {
      return {
        backgroundColor: '#212529',
        color: 'white',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      };
    } else if (props.mode === 'purple') {
      return {
        backgroundColor: '#a98eda',
        color: 'white',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      };
    } else {
      return {
        backgroundColor: 'white',
        color: '#212529',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      };
    }
  };

  const getFormStyle = () => {
    if (props.mode === 'dark') {
      return {
        backgroundColor: '#343a40',
        color: 'white',
        padding: '30px',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
        width: '100%',
        maxWidth: '400px'
      };
    } else if (props.mode === 'purple') {
      return {
        backgroundColor: '#432874',
        color: 'white',
        padding: '30px',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
        width: '100%',
        maxWidth: '400px'
      };
    } else {
      return {
        backgroundColor: 'white',
        color: '#212529',
        padding: '30px',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '400px',
        border: '1px solid #dee2e6'
      };
    }
  };

  const getInputStyle = () => {
    if (props.mode === 'dark' || props.mode === 'purple') {
      return {
        backgroundColor: '#495057',
        color: 'white',
        borderColor: '#6c757d'
      };
    } else {
      return {};
    }
  };

  const getButtonStyle = () => {
    if (props.mode === 'purple') {
      return 'btn-primary';
    } else if (props.mode === 'dark') {
      return 'btn-light';
    } else {
      return 'btn-primary';
    }
  };

  return (
    <div style={getContainerStyle()} className="login-container">
      <form onSubmit={handleSubmit} style={getFormStyle()}>
        <h2 className="mb-4 text-center">Login</h2>
        
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            placeholder="Username"
            value={credentials.username}
            onChange={onChange}
            style={getInputStyle()}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={onChange}
            style={getInputStyle()}
          />
        </div>

        <button
          type="submit"
          className={`btn ${getButtonStyle()} w-100`}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
