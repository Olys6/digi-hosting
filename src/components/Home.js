import React from 'react';
import { Card, Button } from 'react-bootstrap'
import Plans from './HomeComponents/Plans.js'
import WhyChoose from './WhyChoose.js';

const Home = () => {



  return (
    <>
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

        {/* <div id="rightHomeHero">

        </div> */}
      </div>
      <Plans />
      <WhyChoose />
      <section className='featuresSection'>
        <h2 style={{ fontSize: "40px", color: "#080494", backgroundColor: "white", padding: "5px 10px 5px 10px", boxSizing: "border-box", borderRadius: "3px", marginBottom: "3rem" }}>Features</h2>
        <div className="featuresLists">
          <div className='featuresList' data-aos="fade-right" data-aos-duration="800">
            <div style={{ fontWeight: "bold", fontSize: "30px", backgroundColor: "#e4304c", height: "4rem", color: "white", display: "flex", alignItems: "center", paddingLeft: "15px", boxSizing: "border-box" }}>
              Hosting Feature list
            </div>
            <div className='featuresListItem'>
              <p><i className="fas fa-check"></i> Website Builder</p> <p>Unlimited Subdomains</p> <Button variant='danger' style={{ backgroundColor: "#e4304c", border: "0" }}>More</Button>
            </div>
            <div className='featuresListItem'>
              <p><i className="fas fa-check"></i> Unlimited FTP/SFTP Access</p> <p>Additional FTP/SFTP Accounts</p> <Button variant='danger' style={{ backgroundColor: "#e4304c", border: "0" }}>More</Button>
            </div>
            <div className='featuresListItem'>
              <p><i className="fas fa-check"></i> Online File Manager</p> <p>Scheduled Tasks</p> <Button variant='danger' style={{ backgroundColor: "#e4304c", border: "0" }}>More</Button>
            </div>
            <div className='featuresListItem'>
              <p><i className="fas fa-check"></i> Directory Indexing</p> <p>Access/Error/Bandwidth Logs</p> <Button variant='danger' style={{ backgroundColor: "#e4304c", border: "0" }}>More</Button>
            </div>
            <div className='featuresListItem'>
              <p><i className="fas fa-check"></i> Mapped Domains</p> <p>Edge Caching for Speed</p> <Button variant='danger' style={{ backgroundColor: "#e4304c", border: "0" }}>More</Button>
            </div>
          </div>
          <div className='featuresList' data-aos="fade-left" data-aos-duration="800">
            <div style={{ fontWeight: "bold", fontSize: "30px", backgroundColor: "#e4304c", height: "4rem", color: "white", display: "flex", alignItems: "center", paddingLeft: "15px", boxSizing: "border-box" }}>
              Hosting Feature list
            </div>
            <div className='featuresListItem'>
              <p><i className="fas fa-check"></i> Autoscaling Resources</p> <p>Google-Based DNS Servers</p> <Button variant='danger' style={{ backgroundColor: "#e4304c", border: "0" }}>More</Button>
            </div>
            <div className='featuresListItem'>
              <p><i className="fas fa-check"></i> UK Data Centres</p> <p>Onsite Technicians</p> <Button variant='danger' style={{ backgroundColor: "#e4304c", border: "0" }}>More</Button>
            </div>
            <div className='featuresListItem'>
              <p><i className="fas fa-check"></i> PCI Compliant Servers</p> <p>No LVE Limits</p> <Button variant='danger' style={{ backgroundColor: "#e4304c", border: "0" }}>More</Button>
            </div>
            <div className='featuresListItem'>
              <p><i className="fas fa-check"></i> One-Click G Suite Setup</p> <p>Automatic Malware Scanning</p> <Button variant='danger' style={{ backgroundColor: "#e4304c", border: "0" }}>More</Button>
            </div>
            <div className='featuresListItem'>
              <p><i className="fas fa-check"></i> 1 Tbps+ DDoS Protection</p> <p>FTP Security Lock</p> <Button variant='danger' style={{ backgroundColor: "#e4304c", border: "0" }}>More</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Home