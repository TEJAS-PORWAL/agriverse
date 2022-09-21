import React from "react";
import "./AboutLink.css";
import Typewriter from "typewriter-effect";
// import logo_tree from "../images/logo_tree_removebg.png";
import logo_tree from "../images/treemain.png";
import { Link } from "react-router-dom";
export default function AboutLink() {
  return (
    <div className="aboutlink">
      <div>
        <img id="tree" src={logo_tree} alt="logo" />
      </div>
      <div>
        <div className="type">
          <Typewriter
            options={{
              strings: ["Welcome to", "What is"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div>
        <h1 id="agritext">AGRIVERSE</h1>
        </div>
      </div>

      <div className="alink">
        <div className="about--us">
          <p> 
        Plant to Earn. A Web 3.0 based decentralized Agriculture where
        you get real piece of land/crop/livestock as NFT with 24/7 live
        monitoring through special drones and cameras. Also paying
        unbelievable APY for all your assets/crops/NFTS and play to
        earn game which keeps entertaining and ensures continuous earning for you.
        The mode of play is a new concept in the world of gaming and one that gamers can leverage on in order maximize profit.
          </p>
        </div>
        <div>
          <h1 className="at">About</h1>
          <Link to="/About" style={{ textDecoration: "none", color: "#fff" }}>
            <span className="check">CLICK HERE</span>
          </Link>
          <h1 className="us">Us</h1>
        </div>
      </div>
    </div>
  );
}
