import React from "react";
import "./AboutLink.css";
import Typewriter from "typewriter-effect";
import logo_tree from "../images/logo_tree_removebg.png";
import { Link } from "react-router-dom";
export default function AboutLink() {
  // let app = document.getElementById("typewriter");

  // let typewriter = new Typewriter(app, {
  //   loop: true,
  //   delay: 75,
  // });

  // typewriter
    // .pauseFor(1000)
    // .typeString("Welcome to")
    // .pauseFor(1000)
    // .deleteChars(10)
    // .pauseFor(1000)
    // .typeString("What is")
    // .pauseFor(1000)
    // .start();

  return (
    <div className="aboutlink">
      <div>
        <img src={logo_tree} alt="logo" />
      </div>
      <div>
        <div className="type">
          <Typewriter 
          options={{
            strings: ['Welcome to', 'What is'],
            autoStart: true,
            loop: true,
          }}
          />
        </div>
        <div>
          <h1>
            <div>
              <Link
                to="/About"
                id="alink"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <span>About</span>
              </Link>
            </div>
            Agriverse
          </h1>
        </div>
      </div>
    </div>
  );
}
