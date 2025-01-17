"use client";
import React, { useState } from "react";
import Chart from "react-apexcharts";

export default function PieChart() {
  const [options, setOptions] = useState({
    labels: ["Pulsechain", "Avalanche", "BSC", "Base", "Sonic", "Mainnet"],
  });
  const [series, setSeries] = useState([29, 15, 41, 17, 15, 55]);

  return (
    <div className="p-3 rounded-3xl shadow-lg ">
      <Chart options={options} series={series} type="donut" width="380" />
    </div>
  );
}
