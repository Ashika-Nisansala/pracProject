import React from "react";

interface StatsCardProps {
  title: string;
  value: string | number;
  change: string; // "+12%" or "-5%"
  description: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, change, description }) => {
  const isPositive = change.startsWith("+");

  return (
    <div className="bg-white shadow-md rounded-sm flex flex-col justify-between">
      <div className="text-lg font-medium text-gray-500">{title}</div>
      <div className="text-2xl font-bold mt-2">{value}</div>
      <div
        className={`mt-1 text-sm font-semibold ${
          isPositive ? "text-green-500" : "text-red-500"
        }`}
      >
        {change}
      </div>
      <div className="text-xs text-gray-400 mt-1">{description}</div>
    </div>
  );
};

export default StatsCard;
