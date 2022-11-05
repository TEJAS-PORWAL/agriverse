import React from "react";
import "./Roadmap.css";
import ErrorBoundary from "./ErrorBoundary";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Roadmap() {
  AOS.init({ duration : 2000});

  setTimeout(() => {
    let left_btn = document.getElementById("left-btning");
    let right_btn = document.getElementById("right-btning");
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

  const scrolly = () => {
    setTimeout(() => {
      let i = document.getElementById("roadmap").offsetTop;
      window.scrollTo(0, i);
    }, 1000)
  }

  // let visible = '2022Q1';
  // setTimeout(() => {
  //   let vi = document.getElementById(visible).style;
  //   vi.width = "max-content";
  //   vi.backgroundColor = 'rgba(0, 0, 0, 0.274)';
  //   vi.color = '#fff';
  //   vi.flexDirection = 'row';
  // }, 5);
  
  // function visiblehandler(new_visible) {
  //   setTimeout(() => {
  //     let vs = document.getElementById(visible).style;
  //     let en = document.getElementById(new_visible);
  //     let nv = en.style;
  //     visible = new_visible;
  //     en.onmouseenter = () => {
  //       nv.width = "max-content";
  //       nv.backgroundColor = 'rgba(0, 0, 0, 0.274)';
  //       nv.color = '#fff';
  //       nv.flexDirection = 'row';
  //       vs.width = 'min-content';
  //       vs.backgroundColor = 'transparent';
  //       vs.color = 'transparent';
  //       vs.flexDirection = "column-reverse";
  //     }
  //     en.onmouseout = () => {
  //       vs = document.getElementById(visible).style;
  //       nv = document.getElementById('2022Q1').style;
  //       nv.width = "max-content";
  //       nv.backgroundColor = 'rgba(0, 0, 0, 0.274)';
  //       nv.color = '#fff';
  //       nv.flexDirection = 'row';
  //       vs.width = 'min-content';
  //       vs.backgroundColor = 'transparent';
  //       vs.color = 'transparent';
  //       vs.flexDirection = "column-reverse";
  //     }
  //   }, 1)
  // }
 
  return (
    <ErrorBoundary>
      <div id="roadmap" className="roadmap" >
        <div className="underline"><h1 data-aos="zoom-up" data-aos-duration='500'>ROADMAP</h1></div>
        <h3 data-aos="fade" data-aos-duration='500'>WE HAVE BIG PLANS FOR THE FUTURE OF REQUEST</h3>
        <div className="roadmap-nav" data-aos="fade-left" data-aos-duration='500'>
          <a id="anch-1" href="#2022"
            onClick={scrolly}
          >
            2022
          </a>
          <a id="anch-2" href="#2023"
            onClick={scrolly}
          >
            2023
          </a>
          <a id="anch-3" href="#2024"
            onClick={scrolly}
          >
            2024
          </a>
        </div>
        <div className="btn-div">
          <div className="wrapper" id="wrap">
            <div id="2022" className="wrap-item" data-aos="zoom-in-right" data-aos-duration='600' data-aos-delay='400'>
              <div className="div-boxing">
                <div className="card-boxses" id="2022Q1" 
                // onMouseEnter={visiblehandler('2022Q1')}
                // onMouseLeave={invisiblehandler('2022Q1')}
                
                >
                  <span style={{ opacity: 1 }} ></span>
                  <div>
                    <h2>Q1</h2>
                    <ul>
                      <li> Planning and Building a professional team</li>
                      <li>Identity of core problems</li>
                      <li>industry research </li>
                    </ul>
                  </div>
                </div>
                <div className="card-boxses" id="2022Q2" 
                // onMouseEnter={visiblehandler('2022Q2')}
                // onMouseLeave={invisiblehandler('2022Q2')}
                >
                  {/* <span></span> */}
                  <div>
                    <h2>Q2</h2>
                    <ul>
                      <li>Market research </li>
                      <li>Product finalization</li>
                      <li>Development planning</li>
                      <li>Budget and financial planning</li>
                    </ul>
                  </div>
                </div>
                <div className="card-boxses" id="2022Q3"
                //  onMouseEnter={visiblehandler('2022Q3')}
                // onMouseLeave={invisiblehandler('2022Q3')}
                >
                  {/* <span></span> */}
                  <div>
                    <h2>Q3</h2>
                    <ul>
                      <li>Process Planning and case Study of Phase1 crops  </li>
                      <li>Planning of land and soil tests of respected farms for phase1 crops</li>
                      <li>Blockchain process and planning </li>
                      <li>Whitepaper and Applications Planning </li>
                      <li>Metaverse Planning</li>
                      <li>Partnerships Planning</li>
                      <li>Marketing Planning</li>
                    </ul>
                  </div>
                </div>
                <div className="card-boxses" id="2022Q4" 
                // onMouseEnter={visiblehandler('2022Q4')}
                // onMouseLeave={invisiblehandler('2022Q4')}
                >
                  {/* <span></span> */}
                  <div>
                    <h2>Q4</h2>
                    <ul>
                      <li>WhitePaper Release</li>
                      <li>Website Launch and Contract Creation</li>
                      <li>Listing on CMC and Goingecko</li>
                      <li>Partnership with some good launchpads</li>
                      <li>Conducting Presale and IDO</li>
                      <li>Purshasing land </li>
                      <li>The Agriverse Web app release. The Agriverse android app beta release</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div id="2023" className="wrap-item">
              <div className="div-boxing">
                <div className="card-boxses" id="2023Q1" 
                // onMouseEnter={visiblehandler('2023Q1')}
                // onMouseLeave={invisiblehandler('2023Q1')}
                >
                  <span></span>
                  <div>
                    <h2>Q1</h2>
                    <ul>
                      <li>Introducing 7-10 long-term, mid term and short term crops</li>
                      <li>Intensive expansion and leasing with farmers </li>
                      <li>NFT marketplace launch</li>
                      <li>Release of second batch of  NF's</li>
                      <li>The Agriverse iOS app beta release</li>
                      <li>Complete app Launch (android and iOS)</li>
                      <li>Multi Chain Token integration</li>
                    </ul>
                  </div>
                </div>
                <div className="card-boxses" id="2023Q2" 
                // onMouseEnter={visiblehandler('2023Q2')}
                // onMouseLeave={invisiblehandler('2023Q2')}
                >
                  {/* <span></span> */}
                  <div>
                    <h2>Q2</h2>
                    <ul>
                      <li> Introducing more crops in TheAgriverse ecosystem.</li>
                      <li>create brand name in India</li>
                      <li>Executing exporting Marketing plan</li>
                      <li>Introducing livestock's in TheAgriverse ecosystem</li>
                      <li>Partnership with some well known institutions/organizations.</li>
                    </ul>
                  </div>
                </div>
                <div className="card-boxses" id="2023Q3" 
                // onMouseEnter={visiblehandler('2023Q3')}
                // onMouseLeave={invisiblehandler('2023Q3')}
                >
                  {/* <span></span> */}
                  <div>
                    <h2>Q3</h2>
                    <ul>
                      <li> Creating Brand and expanding all over the brand Name of Agriverse</li>
                      <li>Starting a mass #GoGreen initiative</li>
                      <li>Starting a mass #GoGreen initiative</li>
                      <li>Executing Marketing plan II</li>
                    </ul>
                  </div>
                </div>
                <div className="card-boxses" id="2023Q4" 
                // onMouseEnter={visiblehandler('2023Q4')}
                // onMouseLeave={invisiblehandler('2023Q4')}
                >
                  {/* <span></span> */}
                  <div>
                    <h2>Q4</h2>
                    <ul className="hidden">
                      <li> <strong>COMMING SOON</strong> </li>
                      {/* <li><strong>COMING SOON</strong></li>
                      <li><strong>COMING SOON</strong></li>
                      <li><strong>COMING SOON</strong></li> */}

                      {/* <li>create brand name in India</li>
                    <li>Executing exporting Marketing plan</li>
                    <li>Introducing livestock's in TheAgriverse ecosystem</li>
                    <li>Partnership with some well known institutions/organizations.</li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div id="2024" className="wrap-item">
              <div className="div-boxing">
                <div className="card-boxses" id="2024Q1" 
                // onMouseEnter={visiblehandler('2024Q1')}
                // onMouseLeave={invisiblehandler('2024Q1')}
                >
                  <span></span>
                  <div>
                    <h2>Q1</h2>
                    <ul className="hidden">
                      {/* <li> Introducing more crops in TheAgriverse ecosystem.</li>
                    <li>create brand name in India</li>
                    <li>Executing exporting Marketing plan</li>
                    <li>Introducing livestock's in TheAgriverse ecosystem</li>
                    <li>Partnership with some well known institutions/organizations.</li> */}
                      <li><strong>COMING SOON</strong></li>
                      <li><strong>COMING SOON</strong></li>
                      <li><strong>COMING SOON</strong></li>
                      <li><strong>COMING SOON</strong></li>
                    </ul>
                  </div>
                </div>
                <div className="card-boxses" id="2024Q2" 
                // onMouseEnter={visiblehandler('2024Q2')}
                // onMouseLeave={invisiblehandler('2024Q2')}
                >
                  {/* <span></span> */}
                  <div>
                    <h2>Q2</h2>
                    <ul className="hidden">
                      {/* <li> Introducing more crops in TheAgriverse ecosystem.</li>
                    <li>create brand name in India</li>
                    <li>Executing exporting Marketing plan</li>
                    <li>Introducing livestock's in TheAgriverse ecosystem</li>
                    <li>Partnership with some well known institutions/organizations.</li> */}
                      <li><strong>COMING SOON</strong></li>
                      <li><strong></strong></li>
                      <li><strong>P</strong></li>
                      <li><strong></strong></li>
                    </ul>
                  </div>
                </div>
                <div className="card-boxses" id="2024Q3" 
                // onMouseEnter={visiblehandler('2024Q3')}
                // onMouseLeave={invisiblehandler('2024Q3')}
                >
                  {/* <span></span> */}
                  <div>
                    <h2>Q3</h2>
                    <ul className="hidden">
                      {/* <li> Introducing more crops in TheAgriverse ecosystem.</li>
                    <li>create brand name in India</li>
                    <li>Executing exporting Marketing plan</li>
                    <li>Introducing livestock's in TheAgriverse ecosystem</li>
                    <li>Partnership with some well known institutions/organizations.</li> */}
                      <li><strong>COMING SOON</strong></li>
                      <li><strong>COMING SOON</strong></li>
                      <li><strong>COMING SOON</strong></li>
                      <li><strong>COMING SOON</strong></li>
                    </ul>
                  </div>
                </div>
                <div className="card-boxses" id="2024Q4" 
                // onMouseEnter={visiblehandler('2024Q4')}
                // onMouseLeave={invisiblehandler('2024Q4')}
                >
                  {/* <span></span> */}
                  <div>
                    <h2>Q4</h2>
                    <ul className="hidden">
                      {/* <li> Introducing more crops in TheAgriverse ecosystem.</li>
                    <li>create brand name in India</li>
                    <li>Executing exporting Marketing plan</li>
                    <li>Introducing livestock's in TheAgriverse ecosystem</li>
                    <li>Partnership with some well known institutions/organizations.</li> */}
                      <li><strong>COMING SOON</strong></li>
                      <li><strong>COMING SOON</strong></li>
                      <li><strong>COMING SOON</strong></li>
                      <li><strong>COMING SOON</strong></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p id="scale"></p>
          <button id="left-btning" className="scroll-btn">
            &lt;
          </button>
          <button id="right-btning" className="scroll-btn">
            &gt;
          </button>
        </div>
      </div>
    </ErrorBoundary>
  );
}
