import React from "react";

function Pricing() {
  return (
    <div className="container py-7 ">
      <div className="row align-items-center">
        <div className="col-4 ">
          <h1 className="mb-4 fs-2 fw-bold">Unbeatable pricing</h1>
          <p className="mb-4 ">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#" className="text-decoration-none fw-bold">
            See pricing <i className="fa fa-long-arrow-right ms-1" aria-hidden="true"></i>
          </a>
        </div>
        
        <div className="col-6 mb-5">
          <div className="row ">
            <div className="col d-flex align-items-center ">
              <img  src="media/images/pricing-eq.svg"  alt="Free account opening"  width="110"height="110" /> <p className="mb-0 small"> free account<br/> opening</p> 
            </div>
            
            <div className="col d-flex align-items-center ">
              <img  src="media/images/pricing-eq (1).svg"  alt="Free equity delivery"  width="110" height="110" /> <p className="mb-0 small">Free equity delivery<br/>  and direct mutual funds</p> </div>
            
            <div className="col d-flex align-items-center ">
              <img  src="media/images/other-trades.svg"  alt="Intraday trading"  width="110" height="110" />  <p className="mb-0 small">Intraday and<br/> F&O</p>  </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;