import React from "react";
import Hero from "../Hero.js";
import HostingPlans from "./HostingPlans.js";

const WebHosting = () => {



  return(
    <>
    <div style={{ marginBottom: "-10rem" }}></div>
      <Hero />
    <div style={{ marginTop: "-20rem" }}></div>
      <div className="" style={{ marginTop: "13rem" }}>
        <HostingPlans />
      </div>
    </>
  )
}

export default WebHosting