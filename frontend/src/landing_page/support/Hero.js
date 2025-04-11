import React from "react";

function Hero() {
  return (
    <section className="support-hero">
      <div className="support-container">
        <div className="support-header">
          <h4>Support Portal</h4>
          <a href="#" className="track-link">Track Tickets</a>
        </div>

        <div className="support-content">
          <div className="support-left">
            <h1 className="support-title">
              Search for an answer or browse help topics to create a ticket
            </h1>
            <div className="search-box">
              <input
                type="text"
                placeholder="Eg: how do I activate F&O, why is my order getting rejected..."
              />
              <button className="search-btn"><i className="fa fa-search" aria-hidden="true"></i></button>
            </div>
            <div className="quick-links">
              <a href="#">Track account opening</a>
              <a href="#">Track segment activation</a>
              <a href="#">Intraday margins</a>
              <a href="#">Kite user manual</a>
            </div>
          </div>

          <div className="support-right">
            <h1 className="support-title">Featured</h1>
            <ol>
              <li>
                <a href="#">Change in expiry day of NSE derivative contracts from April 04, 2025 [Withheld]</a>
              </li>
              <li>
                <a href="#">Change in mutual fund settlement cycle due to settlement holiday on account of Annual Bank closing (April 01, 2025)</a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
