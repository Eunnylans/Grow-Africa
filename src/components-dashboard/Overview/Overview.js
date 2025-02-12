import React from "react";
import "./Overview.scss";
import ROIChart from "./ROIChart";
import Imagemain from "../../ux-ux-designs/Tina-Edwards.png";


const Overview = () => {
  return (
    <div className="overview">
      <div className="overview-header">
        <div className="user-info">
          <img src={Imagemain} alt="Tina Edwards" className="user-avatar" />
          <div>
            <h2>Tina Edwards</h2>
            <p>Welcome back to Grow Afica 👋</p>
          </div>
        </div>
        <button className="invest-btn">Invest in New Projects</button>
      </div>

      {/* Key Metrics */}
      <div className='overview-body'>
      <section className="left-overview">
        <div className="key-metrics">
          <div className="metric">
            <span>Total Balance</span>
            <h3>₦2,500,000</h3>
          </div>
          <div className="metric">
            <span>Ongoing Projects</span>
            <h3>5</h3>
          </div>
          <div className="metric">
            <span>Total ROI</span>
            <h3>₦200,000</h3>
          </div>
        </div>

        {/* ROI Growth Overtime */}
        <div className="roi-growth">
        
          <div className="chart">
          <ROIChart />
          </div>
        </div>

        {/* Project Overview Table */}
        <div className="project-overview">
          <h3>Project Overview</h3>
          <table>
            <thead>
              <tr>
                <th>Project Name</th>
                <th>Status</th>
                <th>Investment Amount</th>
                <th>ROI (Projected)</th>
                <th>Last Updated</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>April Maze Cycle</td>
                <td className="status active">Active</td>
                <td>₦100,000</td>
                <td>20%</td>
                <td>Jan 05, 2025</td>
              </tr>
              <tr>
                <td>Rice Platform</td>
                <td className="status completed">Completed</td>
                <td>₦150,000</td>
                <td>25%</td>
                <td>Jan 05, 2025</td>
              </tr>
              <tr>
                <td>Cocoa Season</td>
                <td className="status pending">Pending</td>
                <td>₦50,000</td>
                <td>15%</td>
                <td>Jan 05, 2025</td>
              </tr>
              <tr>
                <td>Cassava Cycle</td>
                <td className="status completed">Completed</td>
                <td>₦200,000</td>
                <td>18%</td>
                <td>Jan 05, 2025</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      {/* Recent Activities */}
      <section className="right-overview">
        <div className="recent-activities">
          <h3>Recent Activities</h3>
          <div className="activity-filter">
            <button className="active">Today</button>
            <button>Yesterday</button>
            <button>This Week</button>
          </div>
          <div className="activities">
            <div className="activity">
              <span className="time">11:30 AM</span>
              <p>Maize Harvested - Green Valley Farms Yield: 200 Tons.</p>
            </div>
            <div className="activity">
              <span className="time">12:00 PM</span>
              <p>
                Investor Milestone - 100th investor joined "Rice Farming
                Project".
              </p>
            </div>
            <div className="activity">
              <span className="time">2:00 PM</span>
              <p>
                Crop Growth Update - Cassava Plantation reached 80% maturity.
              </p>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default Overview;
