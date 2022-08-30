import React from "react";
import "./Navbarcopy.css";
export default function Navbarcopy() {
  setTimeout(() => {
    var element = document.getElementById("bars");
    // const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    element.addEventListener("click", () => {
      let menu = document.getElementById("menu").style;
      menu.zIndex = "999";
      menu.position = "fixed";
      menu.animation = "front 1s cubic-bezier(1,1,1,1) 0s 1";
      setTimeout(function () {
        menu.animation = "none";
      }, 1001);
      var cross = document.getElementById("cross");
      cross.addEventListener("click", function () {
        menu.zIndex = "-99";
        menu.position = "absolute";
      });
      let list1 = document.getElementById("1");
      list1.addEventListener("click", function () {
        menu.zIndex = "-99";
        menu.position = "absolute";
      });
      let list2 = document.getElementById("2");
      list2.addEventListener("click", function () {
        menu.zIndex = "-99";
        menu.position = "absolute";
      });
      let list3 = document.getElementById("3");
      list3.addEventListener("click", function () {
        menu.zIndex = "-99";
        menu.position = "absolute";
      });
      let list4 = document.getElementById("4");
      list4.addEventListener("click", function () {
        menu.zIndex = "-99";
        menu.position = "absolute";
      });
    });
  }, 1000);

  return (
    <>
      <nav id="bars">
        <h2>
          Agri<span>Verse</span>
        </h2>
      </nav>
      <div id="menu">
        <h1 id="cross">&#10006;</h1>
        <ul>
          <li>
            <a id="1" href="#HOME">
              Home
            </a>
          </li>
          <li>
            <a id="2" href="#ABOUT">
              About
            </a>
          </li>
          <li>
            <a id="3" href="#STUDY">
              Studies
            </a>
          </li>
          <li>
            <a id="4" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
