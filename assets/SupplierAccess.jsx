
import { Link } from 'react-router-dom';

function Supplier() {
  return (
    <><background><img className="Header-image" src="\autoliv-partner-portal-home-supplier-access.png" alt="banner" /></background><img className="Header-image-2" src="Rectangle 1 (3).png" alt="rect1" /><img className="Header-image-3" src="Rectangle 1 (3).png" alt="rect2" /><img className="Header-logo" src="logo.png" alt="logo" /><h1 className="AutolivPartnerPortalText-1">
      Suppiler Access Terms
    </h1><></><></><ul>
        <p><Link to="/main" className="link">Home</Link></p>
        <p><Link to="/supplieraccess" className="link-1">Supplier Access</Link></p>
        <p><a href='/support' className="link-2">Support</a></p>
        <p><a href="/genralrequirment" className="link-3">General Requirement</a></p>
        <p><a href="https://www.autoliv.com/contact-us"target='blank' className="link-4">Contact Us</a></p>
        <p><a href="https://www.autoliv.com"target='blank' className="link-5">autoliv.com</a></p>
      </ul><p className='PartnerPortalContent'>Access to this site is restricted to those who do business with Autoliv. If you are a partner that works with Autoliv Inc.
        and would like an account on this site, please contact your Autoliv Purchasing representative for more information.</p>
        <p className='PartnerPortalContent-1'>
        If you would like additional information about Autoliv as a company, please go to the</p>
        <a className='externallink' href='https://www.autoliv.com/'target="blank">Autoliv Inc.Corporate Web Site</a>
        <a className='externallink-2' href='https://www.autoliv.biz/enovia/portal/alvPortalSiteUsageRequirements.jsp'target="blank">
        Site Usage Requirements</a>
        
        <footer className="footer-text-supplier">
        <u><p className="site-policy">Sitepolicy</p></u><hr></hr><div>Autoliv claims the copyright interest in the compilation in all the
          Autoliv website Content, including without limitation, the incorporated Autoliv websites.
          The laws of the United States of America and all other signatories to the Berne Convention
          protect the copyright owner from infringement and you represent that you have read, understand and agree to The U.S.
          Copyright Act and such other applicable laws and regulations of other countries and you will not violate them in your
          access and use of any Autoliv website and that you will indemnify and hold Autoliv harmless.</div>
        <p>Copyright © Autoliv Inc. 2012 All rights reserved.</p>
      </footer></>
        );
        }

        export default Supplier;


