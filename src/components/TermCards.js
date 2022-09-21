import React from "react";
import "./TermCards.css";
import { Link, Outlet } from "react-router-dom";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
export default function TermCards() {
  return (
    <div className="cards--cont">
      <Link  className="termcards" to={"/cardsection"}>
        <div className="terms--div"></div>
      </Link>
      <Link className="termcards" to={"/cardsection"}>
        <div className="terms--div"></div>
      </Link>
      <Link className="termcards" to={"/cardsection"}>
        <div className="terms--div"></div>
      </Link>
      <Link  className="termcards" to={"/cardsection"}>
        <div className="terms--div"></div>
      </Link>
    <Outlet/> 
    </div>
  );
}
