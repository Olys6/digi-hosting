import React from "react";
import { Card, Button } from 'react-bootstrap'

const Plans = () => {



  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", gap: "1.2rem", flexWrap: "wrap" }} data-aos="fade-up">
        <a href='#' className="hostingPlanCard">
          <Card.Title className="hostingPlanCardTitle" style={{ fontSize: '25px', marginBottom: "0rem" }} >Web Hosting</Card.Title>
          <div className="hostingPlanCardText">
            {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
            <i className="fa-solid fa-cloud" style={{ fontSize: '60px', color: "#080494", backgroundColor: 'white' }}></i>
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
            <p style={{ color: "white", fontSize: "25px", marginTop: "-40px" }}>£<span style={{ fontSize: "90px", fontWeight: "600" }}>9</span>.99 a year</p>
            <Button style={{ marginTop: "-30px", backgroundColor: "#080494", border: "2px solid white", width: "12rem", fontWeight: "700", fontSize: "20px" }}>Order Now</Button>
          </div>
        </a>
        <a href='#' className="hostingPlanCard">
          <Card.Title className="hostingPlanCardTitle" style={{ fontSize: '25px', marginBottom: "0rem" }}>Domain Names</Card.Title>
          {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
          <div className="hostingPlanCardText">
            <i className="fas fa-map-marker-alt fa-3x" style={{ fontSize: '60px', color: "#080494" }}></i>
            <Card.Text style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "column", width: "85%", color: "#080494" }}>
              <div><i className="fa-solid fa-check" style={{ marginRight: "10px" }}></i> Find your perfect domain</div>
              <div><i className="fa-solid fa-check" style={{ marginRight: "10px" }}></i> 100s of top-level domains</div>
              <div><i className="fa-solid fa-check" style={{ marginRight: "10px" }}></i> Buy or transfer</div>
              <div><i className="fa-solid fa-check" style={{ marginRight: "10px" }}></i> Privacy options</div>
              <div><i className="fa-solid fa-check" style={{ marginRight: "10px" }}></i> Great value</div>
              <div><i className="fa-solid fa-check" style={{ marginRight: "10px" }}></i> Simple control panel</div>
            </Card.Text>
          </div>
          <div className="hostingPlanCardPrice">
            <p style={{ color: "white", fontSize: "25px", marginTop: "-40px" }}>£<span style={{ fontSize: "90px", fontWeight: "600" }}>9</span>.99 a year</p>
            <Button style={{ marginTop: "-30px", backgroundColor: "#080494", border: "2px solid white", width: "12rem", fontWeight: "700", fontSize: "20px" }}>Order Now</Button>
          </div>
        </a>
        {/* </div> */}
        {/* <div className="hostingPlansUnder" data-aos="fade-up"> */}
        <a href='#' className="hostingPlanCard">
          <Card.Title className="hostingPlanCardTitle" style={{ fontSize: '25px', marginBottom: "0rem" }}>VPS</Card.Title>
          {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
          <div className="hostingPlanCardText">
            <i className="fas fa-lock fa-3x" style={{ fontSize: '60px', color: "#080494" }}></i>
            <Card.Text style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "column", width: "85%", color: "#080494" }}>
              <div><i className="fa-solid fa-check" style={{ marginRight: "10px" }}></i> Up to 16 GB DDR4 RAM</div>
              <div><i className="fa-solid fa-check" style={{ marginRight: "10px" }}></i> Up to 8 Core CPU</div>
              <div><i className="fa-solid fa-check" style={{ marginRight: "10px" }}></i> Up to 200 GB SSD Storage</div>
              <div><i className="fa-solid fa-check" style={{ marginRight: "10px" }}></i> Unlimited Bandwidth</div>
              <div><i className="fa-solid fa-check" style={{ marginRight: "10px" }}></i> C1 Tbps Anti-DDoS</div>
            </Card.Text>
          </div>
          <div className="hostingPlanCardPrice">
            <p style={{ color: "white", fontSize: "25px", marginTop: "-40px" }}>£<span style={{ fontSize: "90px", fontWeight: "600" }}>9</span>.99 a year</p>
            <Button style={{ marginTop: "-30px", backgroundColor: "#080494", border: "2px solid white", width: "12rem", fontWeight: "700", fontSize: "20px" }}>Order Now</Button>
          </div>
        </a>
        <a href='#' className="hostingPlanCard">
          <Card.Title className="hostingPlanCardTitle" style={{ fontSize: '25px', marginBottom: "0rem" }}>SSL Certificates</Card.Title>
          {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
          <div className="hostingPlanCardText">
            <i className="fa-solid fa-file-circle-check" style={{ fontSize: '60px', color: "#080494" }}></i>
            <Card.Text style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "column", width: "85%", color: "#080494" }}>
              <div><i className="fa-solid fa-check" style={{ marginRight: "10px" }}></i> Secure your site</div>
              <div><i className="fa-solid fa-check" style={{ marginRight: "10px" }}></i> Improve search performance</div>
              <div><i className="fa-solid fa-check" style={{ marginRight: "10px" }}></i> Padlock and 'https' URL</div>
              <div><i className="fa-solid fa-check" style={{ marginRight: "10px" }}></i> Free SSL certificates</div>
              <div><i className="fa-solid fa-check" style={{ marginRight: "10px" }}></i> Simple SSL certificates</div>
              <div><i className="fa-solid fa-check" style={{ marginRight: "10px" }}></i> Extended SSL certificates</div>
            </Card.Text>
          </div>
          <div className="hostingPlanCardPrice">
            <p style={{ color: "white", fontSize: "25px", marginTop: "-40px" }}>£<span style={{ fontSize: "90px", fontWeight: "600" }}>9</span>.99 a year</p>
            <Button style={{ marginTop: "-30px", backgroundColor: "#080494", border: "2px solid white", width: "12rem", fontWeight: "700", fontSize: "20px" }}>Order Now</Button>
          </div>
        </a>
      </div>
    </>
  )
}

export default Plans