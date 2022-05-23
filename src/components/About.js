import React from "react";

const About = () => {

  const animateDur = "800"

  return(
    <section className="aboutSection">
      <div className="aboutContainer">
        <div className="aboutContainerText" data-aos="fade-right" data-aos-duration={animateDur}>
          <div className="iconBubble"><i class="fa-solid fa-check"></i></div>
          <h2>A hosting platform like no other</h2>
          <p>Our powerful, bespoke hosting platform has been designed for you by experts with over twenty years' 
            industry experience. We provide you with unbeatable load-balanced cloud hosting, 
            meaning there's no single point of failure and your website performance will never be affected by other users' 
            websites, visitors or activity. All servers have SSD storage as standard, and we've optimised every part 
            of your experience for maximum speed and security. Our hosting is designed to scale as your website grows, 
            meaning the same great performance no matter how popular you get.</p>
        </div>
        <div alt="about text" className="aboutImage" data-aos="fade-left" data-aos-duration={animateDur}>image</div>
      </div>

      <div className="aboutContainerReversed">
        <div className="aboutContainerText" data-aos="fade-left" data-aos-duration={animateDur}>
          <div className="iconBubble"><i class="fa-solid fa-check" ></i></div>
          <h2>Build the website you've always wanted</h2>
          <p>Whether you want to create a hobby blog or a business website, we've got you covered. 
            Build your own ecommerce store, photo gallery, portfolio, social network, 
            or anything else you can think of in seconds with our range of 70+ one-click installs.</p>
        </div>
        <div alt="about text" className="aboutImage" data-aos="fade-right" data-aos-duration={animateDur}>image</div>
      </div>

      <div className="aboutContainer">
        <div className="aboutContainerText" data-aos="fade-right" data-aos-duration={animateDur}>
          <div className="iconBubble"><i class="fa-solid fa-check"></i></div>
          <h2>Feature-rich control panel</h2>
          <p>Manage your websites, databases, email, files, 
            and every other aspect of your hosting account straight from your bespoke control panel. 
            We've developed it ourselves to ensure a sleek, 
            modern and user-friendly experience.
            <br />
            <br />
            As well as containing all the practical features you need, your control panel comes with lots of useful extras, 
            including a range of website tools and 70+ one-click installs of popular software titles such as WordPress, 
            Joomla!, Drupal, Magento, OpenCart, and more.</p>
        </div>
        <div alt="about text" className="aboutImage" data-aos="fade-left" data-aos-duration={animateDur}>image</div>
      </div>
    </section>
  )
}

export default About
