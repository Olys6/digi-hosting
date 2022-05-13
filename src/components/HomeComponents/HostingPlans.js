import React from "react";
import { Card, Button } from 'react-bootstrap'

const HostingPlans = () => {



  return(
    <>
      <div style={{ display: "flex", justifyContent: "space-evenly", marginTop: "-1rem", flexWrap: "wrap" }} data-aos="fade-up">
        <a href='#' className="hostingPlanCard1" style={{ width: '24rem' }}>
            <Card.Title className="hostingPlanCardTitle" style={{ fontSize: '25px'}} >Hosting Plan 1</Card.Title>
            {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
          <i className="fa-solid fa-cloud" style={{ fontSize: '60px', color: "#080494"}}></i>
          <Card.Text style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "column", width: "85%", color: "#080494" }}>
            <div><i className="fa-solid fa-check" style={{ marginRight: "10px" }}></i> Powerful market-leading technology</div>
            <div><i className="fa-solid fa-check" style={{ marginRight: "10px" }}></i> User-friendly control panel</div>
            <div><i className="fa-solid fa-check" style={{ marginRight: "10px" }}></i> 70+ one-click install apps</div>
            <div><i className="fa-solid fa-check" style={{ marginRight: "10px" }}></i> Secure, state-of-the-art UK data centre</div>
            <div><i className="fa-solid fa-check" style={{ marginRight: "10px" }}></i> Choice of Windows or Linux hosting</div>
            <div><i className="fa-solid fa-check" style={{ marginRight: "10px" }}></i> Friendly UK support</div>
            <div><i className="fa-solid fa-check" style={{ marginRight: "10px" }}></i> Great value for money</div>
          </Card.Text>
          <div className="hostingPlanCardPrice">
            <p style={{ color: "white", fontSize: "25px", marginTop: "-40px"}}>£<span style={{ fontSize: "90px"}}>9</span>.99 a year</p>
            <Button style={{ marginTop: "-30px", backgroundColor: "#080494", border: "2px solid white", width: "12rem"}}>Order Now</Button>
          </div>
        </a>
        <a href='#' className="hostingPlanCard" style={{ width: '24rem' }}>
          <Card.Title className="hostingPlanCardTitle" style={{ fontSize: '25px' }}>Hosting Plan 2</Card.Title>
          {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
          <i className="fa-solid fa-cloud" style={{ fontSize: '60px', color: "#080494" }}></i>
          <Card.Text style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "column", width: "85%", color: "#080494" }}>
            <div><i className="fa-solid fa-check" style={{ marginRight: "10px" }}></i> Powerful market-leading technology</div>
            <div><i className="fa-solid fa-check" style={{ marginRight: "10px" }}></i> User-friendly control panel</div>
            <div><i className="fa-solid fa-check" style={{ marginRight: "10px" }}></i> 70+ one-click install apps</div>
            <div><i className="fa-solid fa-check" style={{ marginRight: "10px" }}></i> Secure, state-of-the-art UK data centre</div>
            <div><i className="fa-solid fa-check" style={{ marginRight: "10px" }}></i> Choice of Windows or Linux hosting</div>
            <div><i className="fa-solid fa-check" style={{ marginRight: "10px" }}></i> Friendly UK support</div>
            <div><i className="fa-solid fa-check" style={{ marginRight: "10px" }}></i> Great value for money</div>
          </Card.Text>
          <div className="hostingPlanCardPrice">
            <p style={{ color: "white", fontSize: "25px", marginTop: "-40px" }}>£<span style={{ fontSize: "90px" }}>9</span>.99 a year</p>
            <Button style={{ marginTop: "-30px", backgroundColor: "#080494", border: "2px solid white", width: "12rem" }}>Order Now</Button>
          </div>
        </a>
      </div>
      <div className="hostingPlansUnder" data-aos="fade-up">
        <a href='#' className="hostingPlanCard" style={{ width: '24rem' }}>
          <Card.Title className="hostingPlanCardTitle" style={{ fontSize: '25px' }}>Hosting Plan 3</Card.Title>
          {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
          <i className="fa-solid fa-cloud" style={{ fontSize: '60px', color: "#080494" }}></i>
          <Card.Text style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "column", width: "85%", color: "#080494" }}>
            <div><i className="fa-solid fa-check" style={{ marginRight: "10px" }}></i> Powerful market-leading technology</div>
            <div><i className="fa-solid fa-check" style={{ marginRight: "10px" }}></i> User-friendly control panel</div>
            <div><i className="fa-solid fa-check" style={{ marginRight: "10px" }}></i> 70+ one-click install apps</div>
            <div><i className="fa-solid fa-check" style={{ marginRight: "10px" }}></i> Secure, state-of-the-art UK data centre</div>
            <div><i className="fa-solid fa-check" style={{ marginRight: "10px" }}></i> Choice of Windows or Linux hosting</div>
            <div><i className="fa-solid fa-check" style={{ marginRight: "10px" }}></i> Friendly UK support</div>
            <div><i className="fa-solid fa-check" style={{ marginRight: "10px" }}></i> Great value for money</div>
          </Card.Text>
          <div className="hostingPlanCardPrice">
            <p style={{ color: "white", fontSize: "25px", marginTop: "-40px" }}>£<span style={{ fontSize: "90px" }}>9</span>.99 a year</p>
            <Button style={{ marginTop: "-30px", backgroundColor: "#080494", border: "2px solid white", width: "12rem" }}>Order Now</Button>
          </div>
        </a>
        <a href='#' className="hostingPlanCard" style={{ width: '24rem' }}>
          <Card.Title className="hostingPlanCardTitle" style={{ fontSize: '25px' }}>Hosting Plan 4</Card.Title>
          {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
          <i className="fa-solid fa-cloud" style={{ fontSize: '60px', color: "#080494" }}></i>
          <Card.Text style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", flexDirection: "column", width: "85%", color: "#080494" }}>
            <div><i className="fa-solid fa-check" style={{ marginRight: "10px" }}></i> Powerful market-leading technology</div>
            <div><i className="fa-solid fa-check" style={{ marginRight: "10px" }}></i> User-friendly control panel</div>
            <div><i className="fa-solid fa-check" style={{ marginRight: "10px" }}></i> 70+ one-click install apps</div>
            <div><i className="fa-solid fa-check" style={{ marginRight: "10px" }}></i> Secure, state-of-the-art UK data centre</div>
            <div><i className="fa-solid fa-check" style={{ marginRight: "10px" }}></i> Choice of Windows or Linux hosting</div>
            <div><i className="fa-solid fa-check" style={{ marginRight: "10px" }}></i> Friendly UK support</div>
            <div><i className="fa-solid fa-check" style={{ marginRight: "10px" }}></i> Great value for money</div>
          </Card.Text>
          <div className="hostingPlanCardPrice">
            <p style={{ color: "white", fontSize: "25px", marginTop: "-40px" }}>£<span style={{ fontSize: "90px" }}>9</span>.99 a year</p>
            <Button style={{ marginTop: "-30px", backgroundColor: "#080494", border: "2px solid white", width: "12rem" }}>Order Now</Button>
          </div>
        </a>
      </div>
    </>
  )
}

export default HostingPlans