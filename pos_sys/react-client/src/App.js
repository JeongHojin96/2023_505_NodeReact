import React from "react";
import "./App.css";
import Order from "./components/OrderList.jsx";
import Product from "./components/ProductList.jsx";

function App() {
  return (
    <div className="App">
      <h1>POS System</h1>
      <div className="container">
        <div className="section">
          <Order />
        </div>
        <div className="section">
          <Product />
        </div>
      </div>
    </div>
  );
}

export default App;
