import React from 'react'
import market_icon from "../images/coingeckologo.png";
import market_icon1 from "../images/coinmarketcaplogo.png";
import market_icon2 from "../images/Bm.png";
import market_icon3 from "../images/MINA.jpeg";
import market_icon4 from "../images/fi.png";
import "./Vision.css";
export default function Vision() {
  return (
    <div className="collab">
      <div className="Firstimg">
        <marquee>
          <img src={market_icon} className = "ImgOne" alt="" width={150} height={70} />
          <img src={market_icon1} className = "ImgOne" alt="" width={150} height={30} />
          <img src={market_icon2} className = "ImgOne" alt="" width={150} height={30} />
          <img src={market_icon3} className = "ImgOne" alt="" width={100} height={80} />
          <img src={market_icon4} className = "ImgOne" alt="" width={150} height={30} />
        </marquee>
      </div >
    </div>
  )
}