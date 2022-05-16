import React from 'react';
import { Card, ListGroup } from 'react-bootstrap'
import Plans from './HomeComponents/Plans.js'

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
      <Plans />
      <section className="whyChooseUsSection">
        <h2 style={{ fontSize: "40px", color: "#080494" }}>Why choose us</h2>
        <div className="whyChooseUsCircles">
          <div class="whyChooseUsCircleAndDesc" data-aos="fade-up" data-aos-duration="400">
            <div className="whyChooseUsCircle"><i class="fas fa-hdd fa-3x"></i></div>
          
          <p style={{ fontSize: "25px", fontWeight: "bold", color: "#080494" }}>100% SSD Hosting</p>
          <p style={{ fontSize: "20px", color: "#080494", fontWeight: "500" }}>
            Solid state drive storage means faster loading websites.
          </p>
          </div>
          <div class="whyChooseUsCircleAndDesc" data-aos="fade-up" data-aos-duration="700">
            <div className="whyChooseUsCircle"><i class="fas fa-user-tie fa-3x"></i></div>

            <p style={{ fontSize: "25px", fontWeight: "bold", color: "#080494" }}>Hosting Experts</p>
            <p style={{ fontSize: "20px", color: "#080494", fontWeight: "500" }}>
              Your hosting is backed by a team of professionals.
            </p>
          </div>
          <div class="whyChooseUsCircleAndDesc" data-aos="fade-up" data-aos-duration="1000">
            <div className="whyChooseUsCircle"><i class="fas fa-cloud fa-3x"></i></div>

            <p style={{ fontSize: "25px", fontWeight: "bold", color: "#080494" }}>Cloud Platform</p>
            <p style={{ fontSize: "20px", color: "#080494", fontWeight: "500" }}>
              Load-balanced and automatically scales to meet demand.
            </p>
          </div>
          <div class="whyChooseUsCircleAndDesc" data-aos="fade-up" data-aos-duration="1300">
            <div className="whyChooseUsCircle"><i className="fa-solid fa-ticket" style={{ fontSize: "65px"}}></i></div>

            <p style={{ fontSize: "25px", fontWeight: "bold", color: "#080494" }}>Reliable Support</p>
            <p style={{ fontSize: "20px", color: "#080494", fontWeight: "500" }}>
              Our support team is here to help you.
            </p>
          </div>
        </div>
      </section>
      <section className='featuresSection'>
        <h2>Features</h2>
        <div className="featuresLists">
          <div className='featuresList'>
            <div style={{ fontWeight:"bold", fontSize: "30px", backgroundColor: "#e4304c", height: "4rem", color: "white", display: "flex", alignItems: "center", paddingLeft: "15px", boxSizing: "border-box" }}>
              Hosting Feature list
            </div>
            <div className='featuresListItem'>

            </div>
          </div>
          <div className='featuresList'>

          </div>
        </div>
      </section>
    </>
  )
}
export default Home