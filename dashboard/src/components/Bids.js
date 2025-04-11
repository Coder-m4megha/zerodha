import React from "react";
// import axios from "axios";
import { bids } from "../data/data";

const Bids = () => {
  // const [allBids, setAllBids] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3002/allBids")
  //     .then((res) => {
  //       setAllBids(res.data);
  //     })
  //     .catch((err) => {
  //       console.error("Error fetching bids:", err);
  //     });
  // }, []);

  return (
    <>
      <h3 className="title">Action ({bids.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Eligible qty.</th>
              <th>Last price</th>
              <th>Holding price</th>
              <th>Holding P&amp;L</th>
              <th>Auction no.</th>
            </tr>
          </thead>
          <tbody>
            {bids.map((stock, index) => {
              const isProfit = (stock.holdingPL ?? 0) >= 0;
              const profitClass = isProfit ? "profit" : "loss";

              return (
                <tr key={index}>
                  <td>{stock.instrument || "N/A"}</td>
                  <td>{stock.eligibleQty ?? "N/A"}</td>
                  <td>{(stock.lastPrice ?? 0).toFixed(2)}</td>
                  <td>{(stock.holdingPrice ?? 0).toFixed(2)}</td>
                  <td className={profitClass}>
                    {(stock.holdingPL ?? 0).toFixed(2)}
                  </td>
                  <td>{stock.auctionNo ?? "N/A"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Bids;
