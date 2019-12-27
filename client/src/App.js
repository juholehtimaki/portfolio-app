import React, { Fragment } from "react";
import "./sass/main.scss";

//Components
import { AboutMe } from "./components/AboutMe.jsx";
import { ContactMe } from "./components/ContactMe.jsx";
import { Education } from "./components/Education.jsx";
import { Footer } from "./components/Footer.jsx";
import { Header } from "./components/Header.jsx";
import { NavigationBar } from "./components/NavigationBar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

export const App = () => {
  return (
    <Fragment>
      <NavigationBar />
      <Header />
      <AboutMe />
      <Education />
      <Projects />
      <Skills />
      <ContactMe />
      <Footer />
    </Fragment>
  );
};
