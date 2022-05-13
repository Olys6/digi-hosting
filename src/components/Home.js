import React from 'react';
import { Card } from 'react-bootstrap'
import HostingPlans from './HomeComponents/HostingPlans.js'

const Home = () => {



  return (
    <>
      <div className="homeHero">
        <div className="homeHeroCard">
          <Card.Body>
            <Card.Subtitle style={{ backgroundColor: "#e4304c", color: 'white', display: "inline-block", fontSize: "30px", padding: "5px", boxSizing: "border-box" }}>
              Hosting you can rely on
            </Card.Subtitle>
            <Card.Title style={{ backgroundColor: "white", color: "#080494", marginTop: "20px", padding: "10px", boxSizing: "border-box", fontSize: "45px", margin: "-15px 0 0 20px" }}>
              Versatile, powerful web hosting
            </Card.Title>
            </Card.Body>
          </div>

        {/* <div id="rightHomeHero">

        </div> */}
      </div>
      <HostingPlans />
      <section className="whyChooseUsSection">
        <h2 style={{ fontSize: "40px" }}>Why choose us</h2>
        <div className="whyChooseUsCircles">
          <div className="whyChooseUsCircle">
            <i class="fas fa-hdd fa-3x"></i>
          </div>
        </div>
      </section>
    </>
  )
}
export default Home