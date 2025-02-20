import React, { useState, useEffect } from "react";
import cubejsApi from "../cubeClient.js"; 
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const OrdersOverTime = () => {
  const [data, setData] = useState([]);
  const [startDate, setStartDate] = useState("2025-01-01");
  const [endDate, setEndDate] = useState("2025-12-31");

  useEffect(() => {
    cubejsApi
      .load({
        measures: ["Orders.count"],
        timeDimensions: [
          {
            dimension: "Orders.createdAt",
            dateRange: [startDate, endDate],
            granularity: "day",
          },
        ],
      })
      .then((result) => setData(result.chartPivot()));
  }, [startDate, endDate]);

  return (
    <div>
      <h2>Pedidos ao Longo do Tempo</h2>
      
      <div>
        <label>Data Inicial: </label>
        <input 
          type="date" 
          value={startDate} 
          onChange={(e) => setStartDate(e.target.value)} 
        />

        <label> Data Final: </label>
        <input 
          type="date" 
          value={endDate} 
          onChange={(e) => setEndDate(e.target.value)} 
        />
      </div>

      <LineChart width={800} height={400} data={data}>
        <XAxis dataKey="x" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Line type="monotone" dataKey="Orders.count" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default OrdersOverTime;
