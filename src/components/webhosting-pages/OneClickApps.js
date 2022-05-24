import React, { useState, useEffect } from "react";
import { InputGroup, FormControl } from "react-bootstrap";

const OneClickApps = () => {
  const [search, setSearch] = useState("");
  const [filteredApps, setFilteredApps] = useState([]);
  // sort apps by name
  const [apps] = useState([
    {
      name: "Dolibarr",
      image: "./assets/one-click-apps/dolibarr.svg"
    },
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
      image: "./assets/one-click-apps/cakephp.svg",
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
    },
    {
      name: "PrestaShop",
      image: "./assets/one-click-apps/prestashop.svg",
    },
    {
      name: "Prosper202",
      image: "./assets/one-click-apps/prosper202.svg",
    },
    {
      name: "Revive AdServer",
      image: "./assets/one-click-apps/revive.svg",
    },
    {
      name: "RoundCube",
      image: "./assets/one-click-apps/roundcube.svg",
    },
    {
      name: "SalesSyntax",
      image: "./assets/one-click-apps/craftysyntax-icon.png",
    },
    {
      name: "Serendipity",
      image: "./assets/one-click-apps/serendipity.svg",
    },
    {
      name: "SilverStripe",
      image: "./assets/one-click-apps/silverstripe.svg",
    },
    {
      name: "SimpleInvoices",
      image: "./assets/one-click-apps/simpleinvoices.svg",
    },
    {
      name: "SMF",
      image: "./assets/one-click-apps/simplemachinesforum.svg",
    },
    {
      name: "Slim",
      image: "./assets/one-click-apps/slim.svg",
    },
    {
      name: "SquirrelMail",
      image: "./assets/one-click-apps/squirrelmail-icon.png",
    },
    {
      name: "StatusNet",
      image: "./assets/one-click-apps/statusnet.svg",
    },
    {
      name: "SugarCRM",
      image: "./assets/one-click-apps/sugarcrm.svg",
    },
    {
      name: "SuiteCRM",
      image: "./assets/one-click-apps/suitecrm-b.svg",
    },
    {
      name: "TCExam",
      image: "./assets/one-click-apps/tcexam.svg",
    },
    {
      name: "TextPattern",
      image: "./assets/one-click-apps/textpattern.svg",
    },
    {
      name: "TraceWatch",
      image: "./assets/one-click-apps/tracewatch.svg",
    },
    {
      name: "TroubleTicket",
      image: "./assets/one-click-apps/troubleticketexpress.svg",
    },
    {
      name: "Typo3",
      image: "./assets/one-click-apps/typo3.svg",
    },
    {
      name: "vTiger",
      image: "./assets/one-click-apps/vtiger.svg",
    },
    {
      name: "WebCalendar",
      image: "./assets/one-click-apps/webcalendar.svg",
    },
    {
      name: "ZenCart",
      image: "./assets/one-click-apps/zencart.svg",
    }
  ].sort(function(a, b) {
    return a.name.localeCompare(b.name);
  }));
  // make object with all the apps from assets on-click-apps folder

  const handleSearch = (event) => {
    if (event.target.value.includes("\\") || event.target.value.includes("(") || event.target.value.includes(")")
      || event.target.value.includes("*") || event.target.value.includes("[") || event.target.value.includes("+")) return;
    setSearch(event.target.value)
  }

  useEffect(() => {
    const regexSearch = new RegExp(search, 'ig')
    setFilteredApps(apps.filter(app => {

      return regexSearch.test(app.name)
    }))
  }, [apps, filteredApps, search])

  let animDur = 600;
  return (
    <section className="oneClickAppsSection">
      <div className="oneClickAppsTitleAndSearch">
        <h2>Free One-Click Applications</h2>
        <InputGroup size="md" onChange={handleSearch} style={{ width: "80%", color: "white", border: "1px solid #080494", borderRadius:"6px" }}>
          <InputGroup.Text id="" style={{ backgroundColor: "white", color: "#080494", fontWeight:"700", }}>Search</InputGroup.Text>
          <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" style={{ color:"#080494", fontWeight: "700" }} />
        </InputGroup>
      </div>
      <div className="oneClickApps">
        {filteredApps.map((app) => {
          // animDur += 50;
          // if (animDur > 3000) {
          //   animDur = 3000;
          // }
          return(
            <div className="oneClickApp" data-aos="fade-down" data-aos-duration={animDur.toString()}>
              <div className="oneClickAppBubble" style={{ backgroundImage: `url(${app.image})` }}></div>
              <div className="oneClickAppName">{app.name}</div>
            </div>
          )
        })}
        <div className="oneClickApp" data-aos="fade-down" data-aos-duration={animDur.toString()}>
          <div className="oneClickAppBubble" style={{ display: "flex", justifyContent: "center", alignItems: "center", color: "white", fontSize: "55px", backgroundColor: "#e4304c" }}><i class="fa-solid fa-plus"></i></div>
          <div className="oneClickAppName">More!</div>
        </div>
      </div>
    </section>
  )
}

export default OneClickApps