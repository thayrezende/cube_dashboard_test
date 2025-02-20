import React, { useState, useEffect } from "react";
import cubejsApi from "../cubeClient";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const OrdersByStore = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    cubejsApi
      .load({
        measures: ["Orders.count"],
        dimensions: ["Stores.name"],
      })
      .then((result) => setData(result.chartPivot()));
  }, []);

  return (
    <div>
      <h2>Pedidos por Loja</h2>
      <BarChart width={800} height={400} data={data}>
        <XAxis dataKey="Stores.name" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Bar dataKey="Orders.count" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default OrdersByStore;
