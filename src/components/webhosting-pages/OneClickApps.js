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
    },
    {
      name: "BuddyPress",
      image: "./assets/one-click-apps/buddypress.svg",
    },
    {
      name: "CakePHP",
      image:"./assets/one-click-apps/cakephp.svg",
    },
    {
      name: "CMS Made Simple",
      image: "./assets/one-click-apps/cmsmadesimple.svg"
    },
    {
      name: "Concrete5",
      image: "./assets/one-click-apps/concrete5.svg",
    },
    {
      name: "Coppermine",
      image: "./assets/one-click-apps/coppermine-b.svg",
    },
    {
      name: "CraftCMS",
      image: "./assets/one-click-apps/craftcms.svg",
    },
    {
      name: "Dolphin",
      image: "./assets/one-click-apps/dolphin.svg",
    },
    {
      name: "dotProject",
      image: "./assets/one-click-apps/dotproject.svg",
    },
    {
      name: "E107",
      image: "./assets/one-click-apps/e107.svg",
    },
    {
      name: "Elgg",
      image: "./assets/one-click-apps/elgg.svg",
    },
    {
      name: "Feng Office",
      image: "./assets/one-click-apps/fengoffice.svg",
    },
    {
      name: "FluxBB",
      image: "./assets/one-click-apps/fluxbb.svg",
    },
    {
      name: "Form Tools",
      image: "./assets/one-click-apps/formtools.svg",
    },
    {
      name: "Geeklog",
      image: "./assets/one-click-apps/geeklog.svg",
    },
    {
      name: "Gibbon",
      image: "./assets/one-click-apps/gibbon.svg",
    },
    {
      name: "HelpCenterLive!",
      image: "./assets/one-click-apps/helpcenterlive.svg",
    },
    {
      name: "iQDesk",
      image: "./assets/one-click-apps/iqdesk.svg",
    },
    {
      name: "KanBoard",
      image: "./assets/one-click-apps/kanboard.svg",
    },
    {
      name: "LimeSurvey",
      image: "./assets/one-click-apps/limesurvey.svg",
    },
    {
      name: "MamboCMS",
      image: "./assets/one-click-apps/mambocms.svg",
    },
    {
      name: "MantisBT",
      image: "./assets/one-click-apps/mantisbt-icon.png", 
    },
    {
      name: "Matomo",
      image: "./assets/one-click-apps/matomo.svg",
    },
    {
      name: "MediaWiki",
      image: "./assets/one-click-apps/mediawiki.svg",
    },
    {
      name: "MODX",
      image: "./assets/one-click-apps/modx.svg",
    },
    {
      name: "Moodle",
      image: "./assets/one-click-apps/moodle.svg",
    },
    {
      name: "Nucleus CMS",
      image: "./assets/one-click-apps/nucleuscms.svg",
    },
    {
      name: "October CMS",
      image: "./assets/one-click-apps/octobercms.svg",
    },
    {
      name: "OpenCart",
      image: "./assets/one-click-apps/opencart.svg",
    },
    {
      name: "OpenWeb",
      image: "./assets/one-click-apps/openwebanalytics.svg",
    },
    {
      name: "OSCommerce",
      image: "./assets/one-click-apps/oscommerce.svg",
    },
    {
      name: "phpBB",
      image: "./assets/one-click-apps/phpbb.svg",
    },
    {
      name: "phpCoin",
      image: "./assets/one-click-apps/phpcoin.svg",
    },
    {
      name: "phpFormGenerator",
      image: "./assets/one-click-apps/phpformgenerator.svg",
    },
    {
      name: "phpFreeChat",
      image: "./assets/one-click-apps/phpfreechat-icon.png",
    },
    {
      name: "PHP Fusion",
      image: "./assets/one-click-apps/phpfusion.svg",
    },
    {
      name: "phpList",
      image: "./assets/one-click-apps/phplist.svg",
    },
    {
      name: "PHPMailer",
      image: "./assets/one-click-apps/phpmailer.svg",
    },
    {
      name: "phpMyFAQ",
      image: "./assets/one-click-apps/phpmyfaq.svg",
    },
    {
      name: "phpNuke",
      image: "./assets/one-click-apps/phpnuke.svg",
    },
    {
      name: "Phproject",
      image: "./assets/one-click-apps/phproject.svg",
    },
    {
      name: "Piwigo",
      image: "./assets/one-click-apps/piwigo.svg",
    },
    {
      name: "Pligg",
      image: "./assets/one-click-apps/pligg.svg",
    }
  ]

  let animDur = 0;

  return (
    <section className="oneClickAppsSection">
      <h2 style={{ marginTop: "20px", marginBottom: "70px" }}>Free One-Click Applications</h2>
      <div className="oneClickApps">
        {apps.map((app) => {
          animDur += 50;
          if (animDur > 3000) {
            animDur = 3000;
          }
          return(
            <div className="oneClickApp" data-aos="fade-down" data-aos-duration={animDur.toString()}>
              <div className="oneClickAppBubble" style={{ backgroundImage: `url(${app.image})` }}></div>
              <div className="oneClickAppName">{app.name}</div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default OneClickApps