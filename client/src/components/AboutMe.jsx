import React from "react";

export const AboutMe = () => {
  return (
    <div className="about-me-section" id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h1>About me</h1>
          </div>
          <div className="col-md-8">
            <p>
              Hello, I am Juho Lehtimäki, <strong>frontend developer</strong>{" "}
              and <strong>designer</strong> who is eager to learn more about
              website design. I currently live in Tampere where I have been
              studying computer science in University of Tampere for over 3
              years now. During my time there I have been working on multiple
              projects where I have been mostly doing frontend but I also have a
              good understanding of how backends work. I constantly try to
              develop, which allows me to write better and cleaner code, and
              create more complex projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
