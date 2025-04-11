import React, { useEffect, useState } from 'react';
import { VerticalGraph } from "./VerticalGraph";

const labels = ["January", "February", "March", "April", "May", "June", "July"];


const data = {
  labels,
  datasets: [
    {
      label: "Current value",
      data: labels.map(() => 1000),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Current value",
      data: labels.map(() => 1000),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "P&L",
      data: labels.map(() => 1000),
      backgroundColor: "rgba(255, 206, 86, 0.5)",
    },
  ],
};

const Summary = () => {

  const [showMessage, setShowMessage] = useState(true);
  const username = localStorage.getItem('username') || 'User';

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setShowMessage(false);
    }, 1000); 

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);
  return (
    <>
    <div className="username">
    {showMessage && (
        <div>
          <p style={{ color: 'green', fontWeight: 'bold', fontSize: '18px', marginBottom: '5px' }}>
             You have successfully logged in!
          </p>
          <h2 style={{ color: 'green', fontWeight: 'bold', marginBottom: '5px', fontSize: '18px' }}>
        Welcome to Your Dashboard!
      </h2>
        </div>
      )}
      
      <h4 style={{ fontSize: '20px' ,color: 'teal'}}> Hi, {username}!</h4>

      <hr className="divider" />
    </div>
      <div className="row">
  <div className="section-box">
    <span><p>Equity</p></span>
    <div className="data">
      <div className="first">
        <h3>3.74k</h3>
        <p>Margin available</p>
      </div>
      <hr />
      <div className="second">
        <p>Margins used <span>0</span></p>
        <p>Opening balance <span>1L</span></p>
      </div>
    </div>
  </div>

  <div className="section-box">
    <span><p>Commodity</p></span>
    <div className="data">
      <div className="first">
        <h3>3.74k</h3>
        <p>Margin available</p>
      </div>
      <hr />
      <div className="second">
        <p>Margins used <span>0</span></p>
        <p>Opening balance <span>3.74k</span></p>
      </div>
    </div>
  </div>
</div>
<hr className="divider" />
      {/*    holding */}

      <div className="section">
        <span>
          <p>Holdings (13)</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className="profit">
              1.55k <small>+5.20%</small>{" "}
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>31.43k</span>{" "}
            </p>
            <p>
              Investment <span>29.88k</span>{" "}
            </p>
          </div>
        </div>
        <VerticalGraph data={data} />

        <hr className="divider" />
      </div>
      {/* Market Overview and Positions Section */}
      <div className="chart-section">
        <div className="chart-row">
          {/* Market Overview */}
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-title">
                <span>📈</span> Market overview
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
              <div style={{ width: "10px", height: "10px", backgroundColor: "#3f7ee8", marginRight: "5px" }}></div>
              <span style={{ fontSize: "13px" }}>NIFTY 50</span>
            </div>

            <div className="market-chart">
              {/* This would be replaced with an actual chart component */}
              <svg width="100%" height="100%" viewBox="0 0 500 150" preserveAspectRatio="none">
                <path d="M0,150 L0,120 C20,100 40,80 60,110 C80,140 100,120 120,100 C140,80 160,70 180,90 C200,110 220,130 240,120 C260,110 280,90 300,70 C320,50 340,40 360,60 C380,80 400,100 420,90 C440,80 460,70 480,90 L500,90 L500,150 Z" fill="none" stroke="#3f7ee8" strokeWidth="2" />
              </svg>
            </div>
          </div>

          {/* Positions */}
          <div className="chart-card">
            <div className="chart-header">
              <div className="chart-title">
                <span>📋</span> Positions
                <span className="chart-count">(8)</span>
              </div>
            </div>

            <div className="positions-list">
              <div className="position-item">
                <span className="position-name">USDINR 23JUN FUT (NRML)</span>
                <div style={{ width: "40%" }}>
                  <div className="position-bar" style={{ width: "100%" }}></div>
                </div>
              </div>

              <div className="position-item">
                <span className="position-name">11th 23MAY 18700 CE (NRML)</span>
                <div style={{ width: "40%" }}>
                  <div className="position-bar" style={{ width: "80%" }}></div>
                </div>
              </div>

              <div className="position-item">
                <span className="position-name">USDINR 23MAY FUT (NRML)</span>
                <div style={{ width: "40%" }}>
                  <div className="position-bar" style={{ width: "70%" }}></div>
                </div>
              </div>

              <div className="position-item">
                <span className="position-name">11th 23MAY 18750 CE (NRML)</span>
                <div style={{ width: "40%" }}>
                  <div className="position-bar" style={{ width: "50%" }}></div>
                </div>
              </div>



              <div className="position-item">
                <span className="position-name">IDFCFIRSTB (CNC)</span>
                <div style={{ width: "40%" }}>
                  <div className="position-bar" style={{ width: "20%" }}></div>
                </div>
              </div>

              <div className="position-item">
                <span className="position-name">GOLDPETAL 23MAY FUT (NRML)</span>
                <div style={{ width: "40%" }}>
                  <div className="position-bar blue" style={{ width: "30%" }}></div>
                </div>
              </div>

              <div className="position-item">
                <span className="position-name">11th 23MAY 18650 CE (NRML)</span>
                <div style={{ width: "40%" }}>
                  <div className="position-bar blue" style={{ width: "70%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="divider" />



    </>
  );
};

export default Summary;
