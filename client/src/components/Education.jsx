import React from "react";

export const Education = () => {
  return (
    <div className="education-section" id="education">
      <div className="container">
        <h1>Education</h1>
        <div className="col-md education-box shadow-large">
          <h3>University of Tampere</h3>
          <span>2016 - 2019</span>
          <h4>Computer Science</h4>
          <ul>
            <li>One course away from completing bachelor's degree</li>
            <li>
              Mostly focusing on taking courses about frontend and UX design
            </li>
            <li>Lately been working on a lot of projects</li>
          </ul>
        </div>
        <div className="col-md education-box shadow-large">
          <h3>University of Vaasa</h3>
          <span>2015 - 2016</span>
          <h4>Economic Science</h4>
          <ul>
            <li>Always been interested in economics</li>
            <li>
              Chose to pursue different path and switched to computer science
            </li>
          </ul>
        </div>
        <div className="col-md education-box shadow-large">
          <h3>Vaasan Lyseon Lukio</h3>
          <span>2011 - 2014</span>
          <h4>Maths and physics</h4>
        </div>
      </div>
    </div>
  );
};
