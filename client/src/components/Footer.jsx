import React from "react";
import { Link } from "react-scroll";

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-sm-5 copyright">
            <p>
              Copyright ©<span> 2019 </span>Juho Lehtimäki
            </p>
          </div>
          <div className="col-sm-2 top">
            <Link
              activeClass="active"
              to="header"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
            >
              <i className="fa fa-chevron-up" aria-hidden="true"></i>
            </Link>
          </div>
          <div className="col-sm-5 social">
            <a name="github-link" href="https://github.com/juholehtimaki">
              <i className="fab fa-github" aria-hidden="true"></i>
            </a>
            <a
              className="linkedi-lnik"
              href="https://linkedin.com/in/juho-lehtimaki-32aa5819a"
            >
              <i className="fab fa-linkedin" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
