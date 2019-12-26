import React from "react";

export const Skills = () => {
  return (
    <div className="skills-section" id="skills">
      <div className="container">
        <h1>Skills</h1>
        <div className="row">
          <div className="col-md-3 skills-box shadow-large">
            <h3>Frontend</h3>
            <p>
              HTML
              <br />
              SCSS/CSS
              <br />
              JavaScript
              <br />
              React
              <br />
              jQuery
              <br />
              Django
              <br />
            </p>
          </div>
          <div className="col-md-3 skills-box shadow-large">
            <h3>Backend</h3>
            <p>
              Java
              <br />
              Python
              <br />
              Node.js
              <br />
              MySQL
              <br />
              MongoDB
              <br />
            </p>
          </div>
          <div className="col-md-3 skills-box shadow-large">
            <h3>Other</h3>
            <p>
              UX designing
              <br />
              Git
              <br />
              Trello
              <br />
              Slack
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
