import React from "react";
import { Card } from 'react-bootstrap'

const Hero = () => {



  return(
    <div className="homeHero">
      <div className="homeHeroCard">
        <Card.Body>
          <Card.Subtitle style={{ backgroundColor: "#e4304c", color: 'white', display: "inline-block", fontSize: "30px", padding: "5px", boxSizing: "border-box", borderRadius: "1.7px" }}>
            Hosting you can rely on
          </Card.Subtitle>
          <Card.Title style={{ backgroundColor: "white", color: "#080494", marginTop: "20px", padding: "10px", boxSizing: "border-box", fontSize: "45px", margin: "-15px 0 0 20px", borderRadius: "1.7px" }}>
            Versatile, powerful web hosting
          </Card.Title>
        </Card.Body>
      </div>
    </div>
  )
}

export default Hero