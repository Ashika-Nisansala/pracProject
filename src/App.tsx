import React from "react";
import StatsCard from "./components/StatsCard";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <StatsCard
          title="Active Jobs"
          value={2}
          change="+12%"
          description="Currently accepting applications"
        />
        <StatsCard
          title="Total Applications"
          value={1}
          change="+8%"
          description="Across all job postings"
        />
        <StatsCard
          title="Profile Views"
          value={1847}
          change="+15%"
          description="Company page visits"
        />
        <StatsCard
          title="Avg Response Time"
          value="2.4h"
          change="-5%"
          description="Time to respond to applications"
        />
      </div>
    </div>
  );
}

export default App;



