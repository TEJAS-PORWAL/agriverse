import React, { useState } from "react";
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
  const tellink = "https://t.me/theagriverse";
  const yTubelink = "https://youtube.com/channel/UCcstqRwtxzEJSz2ItuRdsSA";
  const Linkedlink = "https://www.linkedin.com/in/agriverse/";
  // const gitlink = "https://github.com";
  const medlink = "https://medium.com/@theagriverse";
  const instlink = 'https://instagram.com/theagriverse';
  const Redditlink = "https://reddit.com/r/theagriverse";

  const contactUsLinks = [
    {
        text: "www.theagriverse.com",
        link: "https://www.theagriverse.com"
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
  
    const [subs, setSubs] = useState(
      {
        Subscriber: ""
      }
    )

    let newSubs, newValue;
    const postSubs = (event) => {
      newSubs = event.target.name;
      newValue = event.target.value;

      setSubs({...subs, [newSubs]: newValue })
    }

    const Subscribed = async (event) =>{
      event.preventDefault()
      const {Subscriber} = subs
      if(Subscriber)
      {
        const response = await fetch(
          "https://agriverse-ebe68-default-rtdb.firebaseio.com//SUBSCRIBER.json",
          { method: "POST", headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
              Subscriber
          }
        )
      }
    );
    if(response){
      setSubs({Subscriber: ""})
      alert("THANKS FOR SUBSCRIBING")
    }
    else {
      alert("PLEASE PROVIDE A VALID EMAIL")
    }
   }
   else {
    alert("PLEASE PROVIDE A VALID EMAIL")
  }
 }

    const [userData, setUserData] = useState({
        Fullname: "",
        email: "",
        mobile: "",
        message: "",
      });

      let name, value;
      const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;

        setUserData({...userData, [name]: value })
      };

      const submitData = async(event) => {
        event.preventDefault()
        const { Fullname, email, mobile,message} = userData
        if (Fullname && email && mobile && message) {
        const res = await fetch(
          "https://agriverse-ebe68-default-rtdb.firebaseio.com//QUERIES.json",
          {method: "POST", headers: {"Content-Type": "application/json"},
          body: JSON.stringify({
            Fullname, email, mobile,message
          }
        )
      }
    ); 
        if(res){
          setUserData({
            Fullname:"",
             email: "",
              mobile: "",
                message: ""
          });
          alert("THANKS FOR FILLING THE FORM")
        } else {
          alert("PLEASE PROVIDE THE CORRECT DATA")
        }
      }
      else {
        alert("PLEASE PROVIDE THE CORRECT DATA")
      }
      }


  return (
    <footer>
      <div className="top" method= "POST">
        <form>
          <h3 className="top--title">
            Enter your email address for newsletter subscription
          </h3>
          <input
            className="top--einput"
            type="email"
            name="Subscriber"
            value={subs.Subscriber}
            onChange={postSubs}
            placeholder="Your email address"
            autoComplete="off"
          />
          <span></span>
          <button className="top--btn" type="submit" onClick={Subscribed}>
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
              <a href={contactUsLinks[3]["link"]} target="_blank" rel="noreferrer">
              <img src={join_us} alt="" />
              <h2>Join US</h2>
                {contactUsLinks[3]["text"]}
              </a>
            </div>
          </div>
        </div>
        <div className="mid--left">
         
          <form className="mid--form" method="POST" >
            <h2 className="form--title">Queries</h2>
            <div className="form--inputs">
              <input
                type="text"
                className="form--name"
                id="name"
                name="Fullname"
                value={userData.Fullname}
                onChange={postUserData}
                placeholder="Full Name"
                autoComplete="off"
                required
              />
              <input
                className="form--email"
                type="email"
                id="mail"
                name="email"
                value={userData.email}
                onChange={postUserData}
                placeholder="Email Address"
                autoComplete="off"
                required
              />
              <input
                className="form--mobile"
                type="tel"
                id="mobile"
                name="mobile"
                value={userData.mobile}
                onChange={postUserData}
                placeholder="Moblie"
                pattern="[0-9]{10}"
                maxLength="10"
                autoComplete="off"
                required
              />
              <input type="text" placeholder="Your Message" value={userData.message}
                onChange={postUserData} name="message" autoComplete="off" required />
            </div>
            <button className="form--btn btn" onClick={submitData} >
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
            {/* <a target="_blank" rel="noreferrer" href={gitlink}>
              <i className="fab fa-github-alt"></i>
            </a> */}
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
