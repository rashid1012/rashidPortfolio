import React from "react";
import Header from "../common/Header";

function About() {
  return (
    <>
      <Header />

      <section>
        <div className="hero d-flex align-items-center">
          <div className="container-fluid text-center mt-3">
            <div className="row">
              <div className="col-md-6 m-auto">
                <div>
                  <h3>About</h3>
                </div>
                <p>
                  Hi, my name is Md Rashid, and I am a web developer
                  specializing in Laravel. I have 1 years of experience in
                  designing and developing dynamic web applications using
                  Laravel's robust framework. I am skilled in backend
                  development, API integration, and database management, and I
                  enjoy solving complex problems through clean, efficient code.
                  I am passionate about learning new technologies and
                  collaborating with teams to build impactful digital solutions.
                  <br />
                  <br />
                  Let me know if you'd like to tweak it further!
                </p>
                <div>
                  <span>I'm Expert In</span>
                  <h1>Skills</h1>
                  <p>
                    I have been working in web development industry for over 1
                    Years
                  </p>
                </div>
                <div className="d-flex mt-2">
                  <a href="#" className="btn btn-outline-danger">
                    HTML5
                  </a>
                  <a href="#" className="btn btn-outline-danger">
                    CSS3
                  </a>
                  <a href="#" className="btn btn-outline-danger">
                    JAVASCRIPT
                  </a>
                  <a href="#" className="btn btn-outline-danger">
                    BOOTSTRAP
                  </a>
                  <a href="#" className="btn btn-outline-danger">
                    PHP
                  </a>
                  <a href="#" className="btn btn-outline-danger">
                    MYSQL
                  </a>
                  <a href="#" className="btn btn-outline-danger">
                    LARAVEL
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
