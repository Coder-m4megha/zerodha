import React from "react";
import { useNavigate } from "react-router-dom";

function Universe() {
  const navigate = useNavigate();
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <a target="_blank" href="https://www.zerodhafundhouse.com" style={{ textDecoration: "none" }}>
          <img src="media/images/zerodhaFundhouse.png" style={{width:"50%" }}  />
          <p className="text-small text-muted">Our asset management venture <br/>that is creating simple and transparent index <br/>funds to help you save for your goals.</p>
          </a>
        </div>
        <div className="col-4 p-3 mt-5">
        <a target="_blank" href="https://sensibull.com/" style={{ textDecoration: "none" }}>
          <img src="media/images/sensibullLogo.svg" style={{width:"50%"}}  />
          <p className="text-small text-muted">Thematic investing platform <br/>that helps you invest in diversified <br/>baskets of stocks on ETFs.</p>
        </a>
        </div>
        <div className="col-4 p-3 mt-5">
        <a target="_blank" href="https://www.tijorifinance.com/ideas-dashboard/" style={{ textDecoration: "none" }}>
          <img src="media/images/tijori.svg" style={{width:"50%"}}  />
          <p className="text-small text-muted">Investment research platform <br/>that offers detailed insights on stocks, <br/>sectors, supply chains, and more.</p>
       </a>
        </div>
        <div className="col-4 p-3 mt-5">
        <a target="_blank" href="https://www.streak.tech/home" style={{ textDecoration: "none" }}>
          <img src="media/images/streakLogo.png" style={{width:"50%"}} />
          <p className="text-small text-muted">Systematic trading platform <br/>that allows you to create and backtest <br/>strategies without coding.</p>
        </a>
        </div>
        <div className="col-4 p-3 mt-5">
        <a target="_blank" href="https://smallcase.zerodha.com/" style={{ textDecoration: "none" }}>
          <img src="media/images/smallcaseLogo.png" />
          <p className="text-small text-muted">Thematic investing platform <br/>that helps you invest in diversified <br/>baskets of stocks on ETFs.</p>
        </a>
        </div>
        <div className="col-4 p-3 mt-5">
        <a target="_blank" href="https://joinditto.in/" style={{ textDecoration: "none" }}>
          <img src="media/images/dittoLogo.png"  style={{width:"50%"}} />
          <p className="text-small text-muted">Personalized advice on life <br/>and health insurance. No spam <br/>and no mis-selling.</p>
        </a>
        </div>
        {/* Signup Button with Navigation */}
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "15%", margin: "0 auto" }}
          onClick={() => navigate('/signup')}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;