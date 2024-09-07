import React from 'react';
import './UnderConstruct.css'; // Import the CSS for the animation

const UnderConstruct = () => {
  return (
    <div className="under-construction-container">
      <div className="construction-text">
        <h1>🚧 Page Under Construction 🚧</h1>
        <p>We're working hard to get this page ready!</p>
        <div className="loader">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruct;
