import React from "react";
import Hero from "../Hero.js";
import HostingPlans from "./HostingPlans.js";
import About from "../About.js";
import OneClickApps from "./OneClickApps.js";

const WebHosting = () => {



  return(
    <>
    <div style={{ marginBottom: "-10rem" }}></div>
      <Hero />
    <div style={{ marginTop: "-20rem" }}></div>
      <div className="" style={{ marginTop: "13rem" }}>
        <HostingPlans />
      </div>
      <About />
      <OneClickApps />
    </>
  )
}

export default WebHosting