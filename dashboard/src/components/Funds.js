import React from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  return (
    <>
      <div className="funds">
        <p>Instant, zero-cost fund transfers with UPI </p>
        <Link className="btn btn-green">Add funds</Link>
        <Link className="btn btn-blue">Withdraw</Link>
      </div>
<div className="funds-content">
        <div className="funds-section">
          <div className="section-header">
            <div className="section-title">
              <i className="fa fa-clock-o" aria-hidden="true"></i>
              <span>Equity</span>
            </div>
            <div className="section-actions">
              <a href="#" className="view-statement">View statement</a>
              <a href="#" className="help">Help</a>
            </div>
          </div>

          <div className="funds-table">
            <div className="funds-row">
              <div className="funds-label">Available margin</div>
              <div className="funds-value blue">1,00,000.00</div>
            </div>
            <div className="funds-row">
              <div className="funds-label">Used margin</div>
              <div className="funds-value">0.00</div>
            </div>
            <div className="funds-row">
              <div className="funds-label">Available cash</div>
              <div className="funds-value">1,00,000.00</div>
            </div>
            <hr/>
            <div className="funds-row">
              <div className="funds-label">Opening balance</div>
              <div className="funds-value">1,00,000.00</div>
            </div>
            <div className="funds-row">
              <div className="funds-label">Payin</div>
              <div className="funds-value">0.00</div>
            </div>
            <div className="funds-row">
              <div className="funds-label">Payout</div>
              <div className="funds-value">0.00</div>
            </div>
            <div className="funds-row">
              <div className="funds-label">SPAN</div>
              <div className="funds-value">0.00</div>
            </div>
            <div className="funds-row">
              <div className="funds-label">Delivery margin</div>
              <div className="funds-value">0.00</div>
            </div>
            <div className="funds-row">
              <div className="funds-label">Exposure</div>
              <div className="funds-value">0.00</div>
            </div>
            <div className="funds-row">
              <div className="funds-label">Options premium</div>
              <div className="funds-value">0.00</div>
            </div>
            <hr/>
            <div className="funds-row">
              <div className="funds-label">Collateral (Liquid funds)</div>
              <div className="funds-value">0.00</div>
            </div>
            <div className="funds-row">
              <div className="funds-label">Collateral (Equity)</div>
              <div className="funds-value">0.00</div>
            </div>
            <div className="funds-row">
              <div className="funds-label">Total collateral</div>
              <div className="funds-value">0.00</div>
            </div>
            
          </div>
        </div>

        <div className="funds-section">
          <div className="section-header">
            <div className="section-title">
              <i className="fa fa-money" aria-hidden="true"></i>
              <span>Commodity</span>
            </div>
            <div className="section-actions">
              <a href="#" className="view-statement">View statement</a>
              <a href="#" className="help">Help</a>
            </div>
          </div>

          <div className="funds-table">
            <div className="funds-row">
              <div className="funds-label">Available margin</div>
              <div className="funds-value blue">50,000.00</div>
            </div>
            <div className="funds-row">
              <div className="funds-label">Used margin</div>
              <div className="funds-value">0.00</div>
            </div>
            <div className="funds-row">
              <div className="funds-label">Available cash</div>
              <div className="funds-value">50,000.00</div>
            </div>
            <hr/>
            <div className="funds-row">
              <div className="funds-label">Opening balance</div>
              <div className="funds-value">50,000.00</div>
            </div>
            <div className="funds-row">
              <div className="funds-label">Payin</div>
              <div className="funds-value">0.00</div>
            </div>
            <div className="funds-row">
              <div className="funds-label">Payout</div>
              <div className="funds-value">0.00</div>
            </div>
            <div className="funds-row">
              <div className="funds-label">SPAN</div>
              <div className="funds-value">0.00</div>
            </div>
            <div className="funds-row">
              <div className="funds-label">Delivery margin</div>
              <div className="funds-value">0.00</div>
            </div>
            <div className="funds-row">
              <div className="funds-label">Exposure</div>
              <div className="funds-value">0.00</div>
            </div>
            <div className="funds-row">
              <div className="funds-label">Options premium</div>
              <div className="funds-value">0.00</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;
