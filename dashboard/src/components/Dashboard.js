import React, { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import Bids from "./Bids";
import Funds from "./Funds";
import Holdings from "./Holdings";

import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // If we're at the root path, show the Summary component by default
    if (location.pathname === '/') {
      console.log('At root path, showing Summary component');
    }

    // Log the current path to help with debugging
    console.log('Current path:', location.pathname);
  }, [location.pathname]);

  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      <div className="content">
        <Routes>
          <Route path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/bids" element={<Bids />} />
          {/* Add a catch-all route to redirect to Summary */}
          <Route path="*" element={<Summary />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;