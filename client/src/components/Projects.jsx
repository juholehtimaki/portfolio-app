import React from "react";
import videokuvaajat from "../assets/images/videokuvaajat.png";
import github from "../assets/images/github.png";

export const Projects = () => {
  return (
    <div className="projects-section" id="projects">
      <div className="container">
        <h1>Projects</h1>
        <div className="row">
          <div className="project shadow-large">
            <div className="project-image">
              <img src={github} alt="project pic" />
            </div>
            <div className="project-info">
              <h3>Most of my projects can be found on GitHub</h3>
              <p>
                Almost all of my recent projects can be found on GitHub. I
                mostly focus developing frontend projects but often end up
                implementing some sort of backend as well.
                <br />
                <strong>Tools:</strong> React, Node.js, MongoDB, Mongoose
              </p>
              <a href="https://github.com/juholehtimaki">View Projects</a>
            </div>
          </div>
          <div className="project shadow-large">
            <div className="project-image">
              <img src={videokuvaajat} alt="project pic" />
            </div>
            <div className="project-info">
              <h3>Platform to sell and buy videos</h3>
              <p>
                Platform with live chat and stripe for video producers to sell
                videos. Still in development but should be launched within few
                months.
                <br />
                <strong>Tools:</strong> Python, Django & MySQL
              </p>
              <a href="https://videokuvaajat.fi/">View Project</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
