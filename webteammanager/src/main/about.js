import React from "react";
import Github from "../icons/github.png";
import LinkedIn from "../icons/linkedin.png";

export function About() {
  return (
    <div className="d-flex flex-column justify-content-center">
      <div id="about" className="about-container">
        <h2 className="mx-auto mb-4">Team Manager</h2>
        <p>
          Team Manager is an app designed for HR departments. Its mission is to
          provide a swift way to manage your employees and get the most out of
          their data.
        </p>
        <div className="d-flex flex-column my-2 justify-content-evenly">
          <h4>Features:</h4>
          <ul className="d-flex flex-column justify-content-start">
            <li className="mx-auto">Add new employees</li>
            <li className="mx-auto">Department specific views</li>

            <li className="mx-auto">
              Display multiple charts describing your employees' statistics
            </li>
            <li className="mx-auto">Search for a specific employee</li>
            <li className="mx-auto">
              Create a random employee for testing purposes
            </li>
            <li className="mx-auto">Many more to come</li>
          </ul>
        </div>
      </div>

      <div className="d-flex align-items-stretch justify-content-around  w-50 mx-auto contact-container">
        <h2 className="h-100 my-auto">Contact</h2>
        <div className="p-2">
          <h5 className="mb-3">Filip Chrzan</h5>
          <p>E-mail: fchrzan@gmail.com</p>
          <div className="p-2">
            <button className="social-button">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://www.github.com/kczan"
              >
                <img src={Github} alt="github" />
              </a>
            </button>
            <button className="social-button">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/filip-chrzan/"
              >
                <img src={LinkedIn} alt="linkedin" />
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
