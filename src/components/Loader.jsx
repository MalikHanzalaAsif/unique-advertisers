import React from 'react';
import "../assets/component-styles/Loader.css"

const Loader = () => {
  return (
    <div className="loader-container">
      <video autoPlay loop muted preload="auto" className="loader-animation">
        <source src="/loading-animation.webm" type="video/webm" />
        Loading...
      </video>
    </div>
  );
};

export default Loader;
