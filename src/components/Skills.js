import React, { useEffect } from "react";
import bounce from "../script/bounce";

export default function Skills() {
  useEffect(() => {
    document.title = "Rance Cañete | Skills ";

    bounce();
  }, []);

  return (
    <>
      <div className="container home-page">
        <span className="tags top-tags"> &nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
        <div className="text-zone">
          <h1
            aria-label=" Hi, I’m Rance,web developer."
            className="blast-root"
          >
            <span className="blast" style={{ color: "#23ffde" }}>
              Skills&nbsp;
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              &&nbsp;
            </span>
            <span className="blast" style={{ color: "#23ffde" }}>
              Experience
            </span>
          </h1>
          <p align="LEFT">
            The main area of my expertise is Web development.
            <br />
            <br />
            Tech I know:
            &nbsp;&nbsp; <b>PHP &nbsp;|&nbsp; ReactJs &nbsp;|&nbsp; NodeJs  &nbsp;|&nbsp;  MySql </b><br />
            <br />
            &nbsp;&nbsp; • &nbsp;&nbsp; ReactJs, NextJs, Swagger<br />
            &nbsp;&nbsp; • &nbsp;&nbsp; NodeJs , Express , MySql<br />
            &nbsp;&nbsp; • &nbsp;&nbsp; Git , Linux Server<br />
            &nbsp;&nbsp; • &nbsp;&nbsp; Docker<br />
            &nbsp;&nbsp; • &nbsp;&nbsp; Android Studio<br />

            <br />
            <br />
            Visit my&nbsp;
            <a
              href="https://www.linkedin.com/in/rance-aubry-cañete-622326234/"
              style={{ color: "#23ffde" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn&nbsp;
            </a>
            profile for more details or just&nbsp;
            <a href="/contact" style={{ color: "#23ffde" }}>
              contact&nbsp;
            </a>
            me.
          </p>
        </div>

        <span className="tags bottom-tags" style={{ bottom: "10px" }}>
          &nbsp;&nbsp;&nbsp;&lt;/body&gt;
          <br />
          &lt;/html&gt;
        </span>
      </div>
      <div id="mysvg">
        <img
          alt="hacker"
          src={`https://davecoding.files.wordpress.com/2019/07/developer.png`}
        />
      </div>
    </>
  );
}
