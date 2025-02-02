import React from "react";
import "./Investments.scss";

const Investments = () => {
  const investments = [
    { name: "April Maze Cycle", status: "Active", amount: "₦100,000", roi: "20%", startDate: "Jan 05, 2025", endDate: "Jan 10, 2025" },
    { name: "Rice Platform", status: "Completed", amount: "₦150,000", roi: "25%", startDate: "Jan 05, 2025", endDate: "Jan 10, 2025" },
    { name: "Cocoa Season", status: "Pending", amount: "₦50,000", roi: "15%", startDate: "Jan 05, 2025", endDate: "Jan 10, 2025" },
    { name: "Cassava Cycle", status: "Completed", amount: "₦200,000", roi: "18%", startDate: "Jan 05, 2025", endDate: "Jan 10, 2025" },
    { name: "Tomato Project", status: "Active", amount: "₦50,000", roi: "22%", startDate: "Jan 05, 2025", endDate: "Jan 10, 2025" },
    { name: "Bean Cycle", status: "Completed", amount: "₦100,000", roi: "30%", startDate: "Jan 05, 2025", endDate: "Jan 10, 2025" },
    { name: "Plantain Season", status: "Pending", amount: "₦120,000", roi: "25%", startDate: "Jan 05, 2025", endDate: "Jan 10, 2025" },
    { name: "Pepper Season", status: "Completed", amount: "₦100,000", roi: "20%", startDate: "Jan 05, 2025", endDate: "Jan 10, 2025" },
  ];

  return (
    <div className="investments-container">
      <div className="header">
        <h2>My Investments</h2>
        <p>Manage and track all your investments easily.</p>
      </div>

      <div className="overview">
        <div className="metric">
          <h3>Active Investment</h3>
          <p>5</p>
        </div>
        <div className="metric">
          <h3>Completed Investment</h3>
          <p>10</p>
        </div>
        <div className="metric">
          <h3>Upcoming Payout</h3>
          <p>₦150,000</p>
        </div>
        <div className="metric">
          <h3>Total ROI Earned</h3>
          <p>₦1,200,000</p>
        </div>
        <button className="invest-btn">📂 Invest in New Projects</button>
      </div>

      <div className="investment-portfolio">
        <div className="portfolio-header">
          <h3>Investment Portfolio</h3>
          <input type="text" placeholder="🔍 Search..." />
        </div>

        <table>
          <thead>
            <tr>
              <th>Project Name</th>
              <th>Status</th>
              <th>Investment Amount</th>
              <th>ROI (Projected)</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {investments.map((inv, index) => (
              <tr key={index}>
                <td>{inv.name}</td>
                <td><span className={`status ${inv.status.toLowerCase()}`}>{inv.status}</span></td>
                <td>{inv.amount}</td>
                <td>{inv.roi}</td>
                <td>{inv.startDate}</td>
                <td>{inv.endDate}</td>
                <td>⋮</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <button>← Previous</button>
        <div className="page-numbers">
          {[1, 2, 3, "...", 9, 10].map((num, index) => (
            <button key={index} className={num === 1 ? "active" : ""}>{num}</button>
          ))}
        </div>
        <button>Next →</button>
      </div>
    </div>
  );
};

export default Investments;
