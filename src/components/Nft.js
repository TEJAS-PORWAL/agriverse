import React from 'react'
import './Nft.css'
import nft_image from "../images/A1.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Nft() {
  AOS.init({ duration : 2000});
  return (
    <div className='nft' >
        <span className='right' data-aos="zoom-up" data-aos-duration='1500'><h1>NFT MARKETPLACE</h1></span>
        <div className='nft--body'>
          <span className='left'  data-aos="fade" data-aos-duration='3000' data-aos-delay='300'><p>Agriverse NFTs are real life valued fungible tokens. There are 10,000 uniquely designed NFTs, each created to cater to a specific agricultural asset or product such as livestock and food crops or trees bidding on request. It is important to note that the NFTs are as vast as agriculture itself and can be used in the plant-to-earn game model developed for the ecosystem.</p>
          <p>It was precisely with this colossal market in mind that the Agriverse developers created the Agriverse game, using blockchain technology that will provide holders with daily gains in the stakeout model planned for the next updates of the game, where their farm owners will have passive income, in addition to of gains from hunting crops.</p>
          <p>Acquisition of ownership of the crops/trees is only possible through our NFTs.</p></span>
          <div className='nft--img--cont' data-aos="fade-down-right" data-aos-duration='300' data-aos-delay='300'>
            <img className='nft--img' src={nft_image}  alt="NFT"/>
          </div>
        </div>
    </div>
  )
}
