import React from "react";
import "./Portfolio.scss";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <section className="hero">
        <h1>Portfolio</h1>
      </section>

      <section className="why-choose">
        <h2>Why choose Cosmos?</h2>
        <div className="benefits">
          <div className="benefit">
            <span>💰</span>
            <h3>High Return</h3>
            <p>Competitive ROI for agricultural investment</p>
          </div>
          <div className="benefit">
            <span>📊</span>
            <h3>Diversified Portfolio</h3>
            <p>Multiple crop types and investment options</p>
          </div>
          <div className="benefit">
            <span>🔍</span>
            <h3>Transparency</h3>
            <p>Regular updates and clear reporting</p>
          </div>
        </div>
      </section>

      <section className="investment-opportunities">
        <h2>Current Investment Opportunities</h2>
        <div className="opportunities">
          <div className="opportunity">
            <img src="/images/plantain.jpg" alt="Premium Plantain Farm" />
            <h3>Premium Plantain Farm</h3>
            <p>Location: Lagos, Nigeria</p>
            <p>Min Investment: ₦70,000</p>
            <p>ROI: 25%</p>
            <p>Status: Open</p>
            <button>View Detail</button>
          </div>
          <div className="opportunity">
            <img src="/images/maize.jpg" alt="Maize Farming Initiative" />
            <h3>Maize Farming Initiative</h3>
            <p>Location: Benin, Nigeria</p>
            <p>Min Investment: ₦50,000</p>
            <p>ROI: 28%</p>
            <p>Status: Open</p>
            <button>View Detail</button>
          </div>
          <div className="opportunity">
            <img src="/images/rice.jpg" alt="Rice Farming Initiative" />
            <h3>Rice Farming Initiative</h3>
            <p>Location: Kaduna, Nigeria</p>
            <p>Min Investment: ₦100,000</p>
            <p>ROI: 30%</p>
            <p>Status: Open</p>
            <button>View Detail</button>
          </div>
        </div>
      </section>

      <section className="investment-strategy">
        <h2>Our Investment Strategy</h2>
        <p>
          At Cosmos, we prioritize key investment strategies for profitability.
        </p>
        <ul>
          <li>Focus on high-demand crops</li>
          <li>Strategic farm locations</li>
          <li>Modern farming techniques</li>
        </ul>
      </section>

      <section className="call-to-action">
        <h2>Invest in Agriculture. Grow Your Wealth!</h2>
        <p>Support farmers, earn returns, and make a difference today.</p>
        <button>Contact Us Now</button>
      </section>
    </div>
  );
};

export default Portfolio;
