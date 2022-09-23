import React from "react";
import "./AboutLink.css";
import Typewriter from "typewriter-effect";
// import logo_tree from "../images/logo_tree_removebg.png";
import logo_tree from "../images/treemain.png";
export default function AboutLink() {

  return (
    <>
      <div className="modal fade show" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">About Us</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Agriverse is a Game-Fi component (plant to Earn) and the largest
              Social network of Profitable business for farmers, traders and for the
              enhanced users of worldwide which establishes a preference for their
              products by differentiating so that which is meaningful from farmers
              to Consumers through Web 3.0 networks while promoting user-generated
              Web 3.0 content and giving you monetary valve for each seed you plant
              on our leased farmland. This technology is mainly helpful for farmers
              to get rid of their problems that can change somethings the farmers
              gain economically in a very big manner. The farmer's interest is
              focused on getting the best return of his produce, which is maximum
              price for unlimited quantities. As the organic food products and
              livestock are being essential, it has been need for made of mankind,
              much emphasis has been made on commercializing agricultural production
              to avoid perishable loss of agricultural products and livestock.
            </div>
            {/* <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div> */}
          </div>
        </div>
      </div>
      <div className="aboutlink">
        <div>
          <img id="tree" src={logo_tree} alt="logo" />
        </div>
        <div>
          <div className="type">
            <Typewriter
              options={{
                strings: ["Welcome to", "What is"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div>
            <h1 id="agritext">AGRIVERSE</h1>
          </div>
        </div>

        <div className="alink">
          <div className="about--us">
            <p>
              Plant to Earn. A Web 3.0 based decentralized Agriculture where
              you get real piece of land/crop/livestock as NFT with 24/7 live
              monitoring through special drones and cameras. Also paying
              unbelievable APY for all your assets/crops/NFTS and play to
              earn game which keeps entertaining and ensures continuous earning for you.
              The mode of play is a new concept in the world of gaming and one that gamers can leverage on in order maximize profit.
            </p>
          </div>
          <div className="about--us--text">
            {/* <span className="check"> */}
            <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
              About Us
            </button>
            {/* </span> */}
          </div>
        </div>
      </div>
    </>
  );
}
