import React from 'react';
import './error.css';

const ErrorPage = () => {
  return (
    <div className="error-container">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <a href="/" className="home-link">Go to Homepage</a>
    </div>
  );
};

export default ErrorPage;
