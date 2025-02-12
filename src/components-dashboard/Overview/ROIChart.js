import React, { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./ROIChart.scss";

const dailyData = [
  { month: "JAN", roi: 5000 },
  { month: "FEB", roi: 8000 },
  { month: "MAR", roi: 6000 },
  { month: "APR", roi: 7500 },
  { month: "MAY", roi: 9000 },
  { month: "JUN", roi: 11000 },
  { month: "JUL", roi: 10000 },
  { month: "AUG", roi: 9500 },
  { month: "SEP", roi: 8700 },
  { month: "OCT", roi: 9200 },
  { month: "NOV", roi: 8900 },
  { month: "DEC", roi: 9700 },
];

const weeklyData = dailyData.map((d) => ({
  ...d,
  roi: d.roi * 5,
}));

const annuallyData = dailyData.map((d) => ({
  ...d,
  roi: d.roi * 50,
}));

const ROIChart = () => {
  const [data, setData] = useState(annuallyData);
  const [selected, setSelected] = useState("Annually");

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevData) =>
        prevData.map((item) => ({
          ...item,
          roi: item.roi + (Math.random() * 2000 - 1000), // Random fluctuations
        }))
      );
    }, 3000); // Update every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="chart-container">
      <div className='chart'>
        <h3>ROI Growth Overtime</h3>
        <div className="buttons">
          {["Daily", "Weekly", "Annually"].map((option) => (
            <button
              key={option}
              className={selected === option ? "active" : ""}
              onClick={() => {
                setSelected(option);
                setData(
                  option === "Daily"
                    ? dailyData
                    : option === "Weekly"
                    ? weeklyData
                    : annuallyData
                );
              }}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorROI" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
          dataKey="month"
          label={{
            value: "MONTHS",
            position: "bottom",
            offset: -3, // Moves it further down
          }}
        />
        <YAxis
          label={{
            value: "ROI",
            angle: -90,
            position: "left",
            offset: 5, // Moves it further left
          }}
        />
        

          <Tooltip />
          <Area
            type="monotone"
            dataKey="roi"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorROI)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ROIChart;
