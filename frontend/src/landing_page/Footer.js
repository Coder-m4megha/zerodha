import React from "react";
import { Link } from "react-router-dom"; // Link को import करें

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
            <img src="media/images/logo.svg" style={{ width: "130px" }} alt="Zerodha" />
            <p className="mt-3">
              &copy; 2010 - 2025, Zerodha Broking Ltd. All rights reserved.
            </p>
            <div className="mt-3">
              {/* Social Media Icons */}
              <div className="mb-3">
                <Link to="#" className="text-dark me-3">
                  <i className="fa fa-twitter fa-lg" aria-hidden="true"></i>
                </Link>
                <Link to="#" className="text-dark me-3">
                  <i className="fa fa-facebook-square fa-lg" aria-hidden="true"></i>
                </Link>
                <Link to="#" className="text-dark me-3">
                  <i className="fa fa-instagram fa-lg" aria-hidden="true"></i>
                </Link>
                <Link to="#" className="text-dark me-3">
                  <i className="fa fa-linkedin fa-lg" aria-hidden="true"></i>
                </Link>
              </div>
              <div className="pt-2 border-top">
                <Link to="#" className="text-dark me-3">
                  <i className="fa fa-youtube-play fa-lg" aria-hidden="true"></i>
                </Link>
                <Link to="#" className="text-dark me-3">
                  <i className="fa fa-whatsapp fa-lg" aria-hidden="true"></i>
                </Link>
                <Link to="#" className="text-dark">
                  <i className="fa fa-telegram fa-lg" aria-hidden="true"></i>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="col">
            <h6 className="fw-bold">Company</h6>
            <ul className="list-unstyled">
              <li><Link to="/about" className="text-decoration-none text-dark">About</Link></li>
              <li><Link to="/products" className="text-decoration-none text-dark">Products</Link></li>
              <li><Link to="/pricing" className="text-decoration-none text-dark">Pricing</Link></li>
              <li><Link to="/referral" className="text-decoration-none text-dark">Referral programme</Link></li>
              <li><Link to="/careers" className="text-decoration-none text-dark">Careers</Link></li>
              <li><Link to="/zerodha-tech" className="text-decoration-none text-dark">Zerodha.tech</Link></li>
              <li><Link to="/open-source" className="text-decoration-none text-dark">Open source</Link></li>
              <li><Link to="/press-media" className="text-decoration-none text-dark">Press & media</Link></li>
              <li><Link to="/zerodha-cares" className="text-decoration-none text-dark">Zerodha Cares (CSR)</Link></li>
            </ul>
          </div>
          
          <div className="col">
            <h6 className="fw-bold">Support</h6>
            <ul className="list-unstyled">
              <li><Link to="/contact" className="text-decoration-none text-dark">Contact us</Link></li>
              <li><Link to="/support" className="text-decoration-none text-dark">Support portal</Link></li>
              <li><Link to="/blog" className="text-decoration-none text-dark">Z-Connect blog</Link></li>
              <li><Link to="/charges" className="text-decoration-none text-dark">List of charges</Link></li>
              <li><Link to="/downloads" className="text-decoration-none text-dark">Downloads & resources</Link></li>
              <li><Link to="/videos" className="text-decoration-none text-dark">Videos</Link></li>
              <li><Link to="/market-overview" className="text-decoration-none text-dark">Market overview</Link></li>
              <li><Link to="/file-complaint" className="text-decoration-none text-dark">How to file a complaint?</Link></li>
              <li><Link to="/complaint-status" className="text-decoration-none text-dark">Status of your complaints</Link></li>
            </ul>
          </div>
          
          <div className="col">
            <h6 className="fw-bold">Account</h6>
            <ul className="list-unstyled">
              <li><Link to="/open-account" className="text-decoration-none text-dark">Open an account</Link></li>
              <li><Link to="/fund-transfer" className="text-decoration-none text-dark">Fund transfer</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Legal और अन्य जानकारी वाला section */}
        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE & MCX - SEBI Registration no.: INZ000031633 CDSL/NSDL: 
            Depository services through Zerodha Broking Ltd. - SEBI Registration no.: IN-DP-431-2019 Commodity 
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 - SEBI Registration no.: 
            INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, 
            Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. 
            For any complaints pertaining to securities broking please write to <Link to="mailto:complaints@zerodha.com" className="text-decoration-none">complaints@zerodha.com</Link>, 
            for DP related to <Link to="mailto:dp@zerodha.com" className="text-decoration-none">dp@zerodha.com</Link>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF
          </p>
          <p>Procedure to file a complaint on <Link to="mailto:SEBI SCORES" className="text-decoration-none">SEBI SCORES</Link>: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
          <p><Link to="mailto:Smart Online Dispute Resolution" className="text-decoration-none">Smart Online Dispute Resolution</Link> | <Link to="mailto:Grievances Redressal Mechanism" className="text-decoration-none">Grievances Redressal Mechanism </Link> </p>
          <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
          <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
          <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. 
            If you find anyone claiming to be part of Zerodha and offering such services, please <Link to="mailto:create a ticket here" className="text-decoration-none">create a ticket here</Link>.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;