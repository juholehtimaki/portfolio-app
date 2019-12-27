import React from "react";

export const Header = () => {
  return (
    <div className="header-section" id="header">
      <div className="container snow-container">
        <div className="snow layer1 a"></div>
        <div className="snow layer1"></div>
        <div className="snow layer2 a"></div>
        <div className="snow layer2"></div>
        <div className="snow layer3 a"></div>
        <div className="snow layer3"></div>
        <h1 id="main-header">
          <strong>JUHO LEHTIMÄKI</strong>
        </h1>
        <h3 id="sub-header">Web Developer</h3>
        <h4 id="quote-header">- Projects that matter</h4>
      </div>
    </div>
  );
};
