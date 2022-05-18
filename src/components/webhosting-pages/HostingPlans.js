import React from "react";
import { Card, Button } from 'react-bootstrap'

const HostingPlans = () => {



  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", gap: "1.2rem", flexWrap: "wrap" }} data-aos="fade-up">
        <a href='#' className="hostingPlanCard">
          <Card.Title className="hostingPlanCardTitle" style={{ fontSize: '25px', justifyContent: "space-evenly", margin: "0" }} ><i className="fa-solid fa-cloud" style={{ fontSize: '20px' }}></i> Plan 1 <i className="fa-solid fa-cloud" style={{ fontSize: '20px' }}></i></Card.Title>
          <div className="hostingPlanCardText">
            {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
            <Card.Text style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "column", width: "85%", color: "#080494" }}>
              <div><i className="fa-solid fa-check" style={{ marginRight: "10px" }}></i> Powerful market-leading technology</div>
              <div><i className="fa-solid fa-check" style={{ marginRight: "10px" }}></i> User-friendly control panel</div>
              {/* <div><i className="fa-solid fa-check" style={{ marginRight: "10px" }}></i> 70+ one-click install apps</div> */}
              <div><i className="fa-solid fa-check" style={{ marginRight: "10px" }}></i> Secure, state-of-the-art UK data centre</div>
              <div><i className="fa-solid fa-check" style={{ marginRight: "10px" }}></i> Choice of Windows or Linux hosting</div>
              <div><i className="fa-solid fa-check" style={{ marginRight: "10px" }}></i> Friendly UK support</div>
              <div><i className="fa-solid fa-check" style={{ marginRight: "10px" }}></i> Great value for money</div>
            </Card.Text>
          </div>
          <div className="hostingPlanCardPrice">
            <p style={{ color: "white", fontSize: "25px", marginTop: "-40px" }}>£<span style={{ fontSize: "90px" }}>4</span>.99 a year</p>
            <Button style={{ marginTop: "-30px", backgroundColor: "#080494", border: "2px solid white", width: "12rem" }}>Order Now</Button>
          </div>
        </a>
        
      </div>
    </>
  )
}

export default HostingPlans