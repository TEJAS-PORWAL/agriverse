import React from "react";
import "./TermCards.css";
import { Link, Outlet } from "react-router-dom";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function TermCards() {
  AOS.init({ duration : 2000});
  return (
    <div className="cards--cont" >
      <div className="carosal" data-aos='fade' >
        <Link className="termcards" to={"/Comingsoon"} data-aos='flip-left' data-aos-duration='250' data-aos-mirror='true' data-aos-delay='100'>
          <div className="terms--div" >Long Term</div>
        </Link>
        <Link className="termcards" to={"/Comingsoon"} data-aos='flip-left' data-aos-duration='450' data-aos-mirror='true' data-aos-delay='200'>
          <div className="terms--div">Mid Term</div>
        </Link>
        <Link className="termcards" to={"/Comingsoon"} data-aos='flip-left' data-aos-duration='650' data-aos-mirror='true' data-aos-delay='300'>
          <div className="terms--div" >Short Term</div>
        </Link>
        <Link className="termcards" to={"/Comingsoon"} data-aos='flip-left' data-aos-duration='850' data-aos-mirror='true' data-aos-delay='400'>
          <div className="terms--div" >Livestock</div>
        </Link>
      </div>
      <Outlet />
    </div>
  );
}