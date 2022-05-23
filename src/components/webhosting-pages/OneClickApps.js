import React from "react";

const OneClickApps = () => {

  // make object with all the apps from assets on-click-apps folder
  const apps = [
    {
      name: "WordPress",
      image: "./assets/one-click-apps/wordpress.svg",
    },
    {
      name: "Joomla",
      image: "./assets/one-click-apps/joomla.svg",
    },
    {
      name: "Drupal",
      image: "./assets/one-click-apps/drupal.svg",
    },
    {
      name: "Magento",
      image: "./assets/one-click-apps/magento.svg",
    },
    {
      name: "AbanteCart",
      image: "./assets/one-click-apps/abantecart.svg",
    },
    {
      name: "AgoraCart",
      image: "./assets/one-click-apps/agoracart.svg",
    },
    {
      name: "b2Evolution",
      image: "./assets/one-click-apps/b2evolution.svg",
    },
    {
      name: "BambooInvoice",
      image: "./assets/one-click-apps/bambooinvoicewww.svg",
    }
  ]

  let animDur = 400;

  return (
    <section className="oneClickAppsSection">
      <h2 style={{ marginTop: "20px", marginBottom: "70px" }}>Free One-Click Applications</h2>
      <div className="oneClickApps">
        {apps.map((app) => {
          animDur += 200;
          return(
            <>
              <div className="oneClickApp" data-aos="fade-up" data-aos-duration={animDur.toString()}>
                <div className="oneClickAppBubble" style={{ backgroundImage: `url(${app.image})` }}></div>
                <div className="oneClickAppName">{app.name}</div>
              </div>
            </>
          )
        })}
      </div>
    </section>
  )
}

export default OneClickApps