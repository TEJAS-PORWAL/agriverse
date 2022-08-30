import React from "react";
import "./Roadmap.css";
import ErrorBoundary from "./ErrorBoundary";

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
    let div_1 = document.getElementById("2022");
    div_1.onmouseenter = () => {
      document.getElementById("anch-1").style.color = "white";
    };
    div_1.onmouseleave = () => {
      let i = document.getElementById("anch-1");
      let y = document.getElementById("anch-2");
      let z = document.getElementById("anch-3");
      i.onmouseenter = () => {
        i.style.color = "white";
      };
      i.onmouseout = () => {
        i.style.color = "rgb(99, 165, 0)";
      };
      i.style.color = "rgb(99, 165, 0)";
      left_btn.onmouseenter = () => {
        i.style.color = "white";
      };
      right_btn.onmouseenter = () => {
        i.style.color = "white";
      };
      right_btn.onclick = () => {
        wrap.scrollLeft += wrap.clientWidth;
        i.style.color = "rgb(99, 165, 0)";
        y.style.color = "white";
        right_btn.onclick = () => {
          wrap.scrollLeft += wrap.clientWidth;
          y.style.color = "rgb(99, 165, 0)";
          z.style.color = "white";
        };
      };
    };
    let div_2 = document.getElementById("2023");
    div_2.onmouseenter = () => {
      document.getElementById("anch-2").style.color = "white";
    };
    div_2.onmouseleave = () => {
      let i = document.getElementById("anch-2");
      let y = document.getElementById("anch-1");
      let z = document.getElementById("anch-3");
      i.onmouseenter = () => {
        i.style.color = "white";
      };
      i.onmouseout = () => {
        i.style.color = "rgb(99, 165, 0)";
      };
      i.style.color = "rgb(99, 165, 0)";
      left_btn.onmouseenter = () => {
        i.style.color = "white";
      };
      right_btn.onmouseenter = () => {
        i.style.color = "white";
      };
      left_btn.onclick = () => {
        wrap.scrollLeft -= wrap.clientWidth;
        i.style.color = "rgb(99, 165, 0)";
        y.style.color = "white";
      };
      right_btn.onclick = () => {
        wrap.scrollLeft += wrap.clientWidth;
        i.style.color = "rgb(99, 165, 0)";
        z.style.color = "white";
      };
    };
    let div_3 = document.getElementById("2024");
    div_3.onmouseenter = () => {
      document.getElementById("anch-3").style.color = "white";
    };
    div_3.onmouseleave = () => {
      let i = document.getElementById("anch-3");
      let y = document.getElementById("anch-2");
      let z = document.getElementById("anch-1");
      i.onmouseenter = () => {
        i.style.color = "white";
      };
      i.onmouseout = () => {
        i.style.color = "rgb(99, 165, 0)";
      };
      i.style.color = "rgb(99, 165, 0)";
      left_btn.onmouseenter = () => {
        i.style.color = "white";
      };
      right_btn.onmouseenter = () => {
        i.style.color = "white";
      };
      left_btn.onclick = () => {
        wrap.scrollLeft -= wrap.clientWidth;
        i.style.color = "rgb(99, 165, 0)";
        y.style.color = "white";
        left_btn.onclick = () => {
          wrap.scrollLeft -= wrap.clientWidth;
          y.style.color = "rgb(99, 165, 0)";
          z.style.color = "white";
        };
      };
    };
  }, 10);

  return (
    <ErrorBoundary>
      <div className="roadmap">
      <p id="scale"></p>
        <h3>WE HAVE BIG PLANS FOR THE FUTURE OF REQUEST</h3>
        <h1>Roadmap</h1>
        <div className="roadmap-nav">
          <a id="anch-1" href="#2022">
            2022
          </a>
          <a id="anch-2" href="#2023">
            2023
          </a>
          <a id="anch-3" href="#2024">
            2024
          </a>
        </div>
        <button id="left-btn" className="scroll-btn">
          &lt;
        </button>
        <button id="right-btn" className="scroll-btn">
          &gt;
        </button>
        <div className="wrapper" id="wrap">
          <div id="2022" className="wrap-item">
            <div className="div-box">
              <div className="card-box">
                <span style={{ opacity: 1 }}></span>
                <div>
                  <h2>Q1</h2>
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>
              <div className="card-box">
                <span></span>
                <div>
                  <h2>Q2</h2>
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>
              <div className="card-box">
                <span></span>
                <div>
                  <h2>Q3</h2>
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>
              <div className="card-box">
                <span></span>
                <div>
                  <h2>Q4</h2>
                  <ul>
                    <li>WhitePaper Release</li>
                    <li>Website Launch</li>
                    <li>Contract Creation</li>
                    <li>Listing on CMC and Goingecko</li>
                    <li>Partnership with some good launchpads</li>
                    <li> Conducting Presale and IDO</li>
                    <li>Purshasing land in land</li>
                    <li> TheAgriverse Web app release</li>
                    <li>TheAgriverse android app beta release</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div id="2023" className="wrap-item">
            <div className="div-box">
              <div className="card-box">
                <span></span>
                <div>
                  <h2>Q1</h2>
                  <ul>
                    <li>
                      Introducing 7-10 longterm, mid term and short term crops
                    </li>
                    <li> NFT marketplace launch</li>
                    <li>Release of first batch of 2500 NFT's</li>
                    <li>TheAgriverse iOS app beta release</li>
                  </ul>
                </div>
              </div>
              <div className="card-box">
                <span></span>
                <div>
                  <h2>Q2</h2>
                  <ul>
                    <li> Introducing more crops in The Agriverse ecosystem.</li>
                    <li> Complete app Launch (android and iOS)</li>
                    <li>Executing Marketing plan I</li>
                    <li>Introducing livestocks in TheAgriverse ecosystem</li>
                    <li>
                      Partnership with some well known
                      institutions/organizations.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card-box">
                <span></span>
                <div>
                  <h2>Q3</h2>
                  <ul>
                    <li>Multi Chain Token integration</li>
                    <li>Listing on a good CEX</li>
                    <li>Starting a mass #GoGreen initiative</li>
                    <li>Executing Marketing plan II</li>
                  </ul>
                </div>
              </div>
              <div className="card-box">
                <span></span>
                <div>
                  <h2>Q4</h2>
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div id="2024" className="wrap-item">
            <div className="div-box">
              <div className="card-box">
                <span></span>
                <div>
                  <h2>Q1</h2>
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>
              <div className="card-box">
                <span></span>
                <div>
                  <h2>Q2</h2>
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>
              <div className="card-box">
                <span></span>
                <div>
                  <h2>Q3</h2>
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>
              <div className="card-box">
                <span></span>
                <div>
                  <h2>Q4</h2>
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
}
