import React from "react";

const WhyChoose = () => {



  return (
    <section className="whyChooseUsSection">
      <h2 style={{ fontSize: "40px", color: "#080494", backgroundColor: "white", padding: "5px 10px 5px 10px", boxSizing: "border-box", borderRadius: "1.7px" }}>Why choose us</h2>
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
          <div className="whyChooseUsCircle"><i className="fa-solid fa-ticket" style={{ fontSize: "65px" }}></i></div>

          <p style={{ fontSize: "25px", fontWeight: "bold", color: "#080494" }}>Reliable Support</p>
          <p style={{ fontSize: "20px", color: "#080494", fontWeight: "500" }}>
            Our support team is here to help you.
          </p>
        </div>
      </div>
    </section>
  )
}

export default WhyChoose