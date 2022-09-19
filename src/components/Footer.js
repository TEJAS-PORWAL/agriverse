import React from "react";
import "./Footer.css";
import web_icon from "../images/web_icon.gif";
import join_us from "../images/join_us_icon.gif";
import support_icon from "../images/Support_icon.gif";
import market_icon from "../images/Marketing icon.gif";

// import Support from "../images/Support_icon_1.gif";

export default function Footer() {
  const email = "info@agriverse.com";
  const fblink = "https://facebook.com/theagriverse";
  const twtlink = "https://twitter.com/theagriverse";
  const tellink = "https://telegram.com";
  const yTubelink = "https://youtube.com/channel/UCcstqRwtxzEJSz2ItuRdsSA";
  const Linkedlink = "https://linkedin.com";
  const gitlink = "https://github.com";
  const medlink = "https://medium.com/@theagriverse";
  const instlink = 'https://instagram.com/theagriverse';
  const Redditlink = "https://reddit.com/r/theagriverse";

  const contactUsLinks = [
    {
        text: "www.agriverse.com",
        link: "https://www.argiverse.com"
    },
    {
        text: "support@theagriverse.com",
        link: "mailto:support@theagriverse.com"
    },
    {
        text: "marketing@theagriverse.com",
        link: "mailto:marketing@theagriverse.com"
    },
    {
        text: "click here",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSf2Vf3yYEO6HqqRSO1kKKpf8_7saY06t4GR2YvMKnK0q6Lk_Q/viewform?usp=sf_link"
    }
]
  
  return (
    <footer>
      <div className="top">
        <form>
          <h3 className="top--title">
            Enter your email address for newsletter subscription
          </h3>
          <input
            className="top--einput"
            type="email"
            placeholder="Your email address"
            autoComplete="off"
          />
          <span></span>
          <button className="top--btn" type="submit">
            SUBSCRIBE
          </button>
        </form>
      </div>

      <div className="mid">
        <div className="footer--contact">
          <h1 className="contact--title">CONTACT US</h1>
          <div className="contact--cards">
            <div className="contact-card1">
              <a href={contactUsLinks[0]["link"]}>
              <img src={web_icon} alt="" naame="market"/>
              <h2>ADDRESS</h2>
                {contactUsLinks[0]["text"]}
              </a>
            </div>
            <div className="contact-card2">
              <a href={contactUsLinks[1]["link"]}>
              <img src={support_icon} alt="" />
              <h2>SUPPORT</h2>
                {contactUsLinks[1]["text"]}
              </a>
            </div>
            <div className="contact-card3">
              <a href={contactUsLinks[2]["link"]}>
            <img src={market_icon} alt="web_icon" />
              <h2>MARKETING</h2>
                {contactUsLinks[2]["text"]}
              </a>
            </div>
            <div className="contact-card4">
              <a href={contactUsLinks[3]["link"]}>
              <img src={join_us} alt="" />
              <h2>Join US</h2>
                {contactUsLinks[3]["text"]}
              </a>
            </div>
          </div>
        </div>
        <div className="mid--left">
          <form className="mid--form">
            <h2 className="form--title">Queries</h2>
            <div className="form--inputs">
              <input
                type="text"
                className="form--name"
                id="name"
                name="name"
                placeholder="Full Name"
                autoComplete="off"
              />
              <input
                className="form--email"
                type="email"
                id="mail"
                name="email"
                placeholder="Email Address"
                autoComplete="off"
              />
              <input
                className="form--mobile"
                type="tel"
                id="mobile"
                name="mobile"
                placeholder="Moblie"
                pattern="[0-9]{10}"
                maxLength="10"
                autoComplete="off"
              />
              <input type="text" placeholder="Your Message" autoComplete="off"/>
            </div>
            <button className="form--btn btn">
              <span className="noselect">SEND </span>
            </button>
          </form>
        </div>
        <div className="mid--right">
          <h2 className="right--title">Join our community</h2>
          <div className="mid--right--links">
            <a target="_blank" rel="noreferrer" href={fblink}>
              <i className="fab fa-facebook-f"></i>
            </a>
            <a target="_blank" rel="noreferrer" href={instlink}>
              <i className="fab fa-instagram"></i>
            </a>
            <a target="_blank" rel="noreferrer" href={Linkedlink}>
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a target="_blank" rel="noreferrer" href={twtlink}>
              <i className="fab fa-twitter"></i>
            </a>
            <a target="_blank" rel="noreferrer" href={Redditlink}>
              <i className="fab fa-reddit-alien"></i>
            </a>
            <a target="_blank" rel="noreferrer" href={tellink}>
              <i className="fab fa-telegram"></i>
            </a>
            <a target="_blank" rel="noreferrer" href={medlink}>
              <i className="fab fa-medium-m"></i>
            </a>
            <a target="_blank" rel="noreferrer" href={gitlink}>
              <i className="fab fa-github-alt"></i>
            </a>
            <a target="_blank" rel="noreferrer" href={yTubelink}>
              <i className="fab fa-youtube"></i>
            </a>
          </div>
          <div className="mid--right--email">
            <a href={`mailto:${email}`}>
              <i className="fa fa-envelope-o"></i> {email}
            </a>
          </div>
        </div>
      </div>
      <div className="bottom">
        <p>
          &copy; {" "}
          <a href="https://facebook.com/theagriverse">AGRIVERSE </a>2022. All rights reserved
        </p>
      </div>
    </footer>
  );
}
