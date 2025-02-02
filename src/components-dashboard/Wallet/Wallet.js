import React from "react";
import "./Wallet.scss";

const Wallet = () => {
  const transactions = [
    { date: "Jan 05, 2025", id: "TXN12456780", type: "Credit", description: "ROI from Soybean Cycle 3", amount: "₦100,000", status: "Completed" },
    { date: "Jan 05, 2025", id: "TXN12123456", type: "Debit", description: "Investment in Maize Project", amount: "₦500,000", status: "Completed" },
    { date: "Jan 05, 2025", id: "TXN11223344", type: "Credit", description: "Wallet Deposit", amount: "₦250,000", status: "Completed" },
    { date: "Jan 05, 2025", id: "TXN10293847", type: "Credit", description: "Wallet Bonus (New Milestone)", amount: "₦750,000", status: "Pending" },
    { date: "Jan 05, 2025", id: "TXN15678904", type: "Debit", description: "Withdrawal to Bank Account", amount: "₦300,000", status: "Completed" },
    { date: "Jan 05, 2025", id: "TXN17894567", type: "Credit", description: "Refund from Delayed Project", amount: "₦150,000", status: "Completed" },
    { date: "Jan 05, 2025", id: "TXN16543278", type: "Debit", description: "Withdrawal to Bank Account", amount: "₦200,000", status: "Pending" },
    { date: "Jan 05, 2025", id: "TXN18907654", type: "Credit", description: "ROI from Rice Cycle", amount: "₦350,000", status: "Completed" },
  ];

  return (
    <div className="wallet-container">
      <div className="header">
        <h2>Wallet</h2>
        <p>Manage your funds easily and securely in one place.</p>
      </div>

      <div className="overview">
        <div className="metric">
          <h3>Wallet Balance</h3>
          <p>₦5,000,000</p>
        </div>
        <div className="metric">
          <h3>Total ROI Credited</h3>
          <p>₦1,000,000</p>
        </div>
        <div className="metric">
          <h3>Funds Withdrawn</h3>
          <p>₦850,000</p>
        </div>
        <div className="metric">
          <h3>Pending Transactions</h3>
          <p>5</p>
        </div>
        <div className="actions">
          <button className="add-funds">➕ Add Funds</button>
          <button className="withdraw">💳 Withdraw</button>
        </div>
      </div>

      <div className="transaction-history">
        <div className="history-header">
          <h3>Transaction History</h3>
          <input type="text" placeholder="🔍 Search..." />
        </div>

        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Transaction ID</th>
              <th>Type</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn, index) => (
              <tr key={index}>
                <td>{txn.date}</td>
                <td>{txn.id}</td>
                <td>{txn.type}</td>
                <td>{txn.description}</td>
                <td>{txn.amount}</td>
                <td><span className={`status ${txn.status.toLowerCase()}`}>{txn.status}</span></td>
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

export default Wallet;
