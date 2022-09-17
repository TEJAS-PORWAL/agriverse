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
          <h1>
            Agriverse
          </h1>
        <div>
        </div>
      </div>

      <div className="alink">
        <div className="about--us">
        Plant to Earn . A Web 3.0 based decentralized Agriculture where you get real piece of land/crop/livestock as NFT with 24/7 live monitoring through special drones and Cameras . Also paying unbelievable APY for all your asset’s/ crops/NFTS and Play to earn Game which keeps entertaining and earning for our community regularly
        </div>
        <div>
        <h1>
            About
          </h1>
        <Link
          to="/About"
          style={{ textDecoration: "none", color: "#fff" }}
        >
          <span>About</span>
        </Link>
          <h1 className="us">
            Us
          </h1>
        </div>
      </div>
    </div>
  );
}
