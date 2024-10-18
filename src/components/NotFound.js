// src/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <img src='/images/logo.png' alt='aztecdesign' width={100} />
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link 
      to="/" 
      style={{
        background: 'linear-gradient(to right, #FD7B33, #C41E3A)',
        WebkitBackgroundClip: 'text',
        color: 'transparent'
      }}
    >
      Go back to Home
    </Link>    
    </div>
  );
};

export default NotFound;
