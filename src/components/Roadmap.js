import React from "react";
import "./Roadmap.css";

export default function Roadmap() {

  setTimeout(() => {
    let left_btn = document.getElementById("left-btn");
    let right_btn = document.getElementById("right-btn");
    let wrap = document.getElementById("wrap");
    left_btn.onclick = () => {
        wrap.scrollLeft -= wrap.clientWidth;
    };
    right_btn.onclick = () => {
        wrap.scrollLeft += wrap.clientWidth;
    };
  }, 10);

  return (
    <div className="roadmap">
      <div className="roadmap-nav">
      <a href="#div-1">2022</a>
      <a href="#div-2">2023</a>
      <a href="#div-3">2024</a>
      </div>
      <button id="left-btn" className="scroll-btn">
        ←
      </button>
      <button id="right-btn" className="scroll-btn">
        →
      </button>
      <div className="wrapper" id="wrap">
        <div id="div-1" className="wrap-item">2022</div>
        <div id="div-2" className="wrap-item">2023</div>
        <div id="div-3" className="wrap-item">2024</div>
      </div>
    </div>
  );
}
