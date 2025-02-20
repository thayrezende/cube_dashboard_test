import React from "react";
import OrdersByStore from "./components/OrdersByStore";
import OrdersOverTime from "./components/OrdersOverTime";

function App() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Dashboard de Vendas</h1>
      <OrdersByStore />
      <OrdersOverTime />
    </div>
  );
}

export default App;
