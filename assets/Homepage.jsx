

import { Link } from 'react-router-dom';

function Homepage() {
  console.log('Email:', );
  console.log('Password:',);



  return (
  
      <><background src="autoliv-partner-portal-home-banner.png"></background><img className="Header-image" src="autoliv-partner-portal-home-banner.png" alt="banner" /><img className="Header-image-2" src="Rectangle 1 (3).png" alt="rect1" /><img className="Header-image-3" src="Rectangle 1 (3).png" alt="rect2" /><img className="Header-logo" src="logo.png" alt="logo" /><h1 className="AutolivPartnerPortalText">
      Welcome to the Autoliv Partner Portal
    </h1><></><></><ul>
        <p><Link to="/main" className="link">Home</Link></p>
        <p><Link to="/supplier" className="link-1">Supplier Access</Link></p>
        <p><a href="/support" className="link-2">Support</a></p>
        <p><a href="/genralrequirment" className="link-3">General Requirement</a></p>
        <p><a href="https://www.autoliv.com/contact-us"target='blank' className="link-4">Contact Us</a></p>
        <p><a href="https://www.autoliv.com"target='blank' className="link-5">autoliv.com</a></p>
      </ul><><>
        <p className="PartnerPortalContent">
          The Autoliv Partner Portal is the entry point for suppliers and other partners   to access Autoliv web-enabled applications and databases. If you already have an account, press the Login link.
        </p>
        <p className="PartnerPortalContent-1">if you are an Autoliv supplier and do not have an account yet, you will be contacted by your lead buyer when it is time to create your account.
        </p>
        <h1 className="Header-portalcontent">Site Usage Agreement</h1>
        <p className="PartnerPortalContent-2">Sharing your user ID and/or password with others is considered improper use of this site, and may lead to a formal supplier reprimand or even the removal of the user from Autoliv&apos;s systems.
        </p>
        <p className="PartnerPortalContent-3">Upon accessing this website and benefiting from this service, you agree that you will maintain the confidentiality of proprietary information, protect their password from unauthorized use, and otherwise act in a professional and responsible manner to avoid liability for all concerned.</p>
        <p className="PartnerPortalContent-4">Your access to this service extends only to those employees of your company who have been expressly authorized by your company to use Autoliv&apos;s website and service. All information on Autoliv&apos;s portal remains the confidential and proprietary property of Autoliv. Do not disclose any of it to other employees of your company, except to those authorized to have it, or to anyone outside your company. You can use the information and content only for what your company does for Autoliv and can make no other use of it. The confidentiality obligation does not apply to any information or content that you can establish with clear and convincing evidence made public by Autoliv.

          Unauthorized or improper use will lead to personal liability, prosecution, your company&apos;s liability, damages, injunctive relief, or other relief available under the law.</p>
      </><div className="login-container">
          <h2>Login</h2>

          <div className="input-group">
            <label htmlFor="email">User ID:</label>
            <input
              type="email"
              id="email"

              onChange={(e) => (e.target.value)}
              required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value />




          </div><button type="submit">Login</button>

        </div><footer className="footer-text">
          <u><p className="site-policy">Sitepolicy</p></u><hr></hr><div>Autoliv claims the copyright interest in the compilation in all the
            Autoliv website Content, including without limitation, the incorporated Autoliv websites.
            The laws of the United States of America and all other signatories to the Berne Convention
            protect the copyright owner from infringement and you represent that you have read, understand and agree to The U.S.
            Copyright Act and such other applicable laws and regulations of other countries and you will not violate them in your
            access and use of any Autoliv website and that you will indemnify and hold Autoliv harmless.</div>
          <p>Copyright © Autoliv Inc. 2012 All rights reserved.</p>
        </footer></></>
      

    
 

    
    
    
    
  
  )
}

export default Homepage
