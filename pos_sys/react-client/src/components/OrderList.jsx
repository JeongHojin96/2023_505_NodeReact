import React, { useState, useEffect } from "react";
import axios from "axios";

function Order() {
  const [orders, setOrders] = useState([]);
  const [newOrder, setNewOrder] = useState({ o_pcode: "", o_count: 0 });

  const fetchOrders = async () => {
    const response = await axios.get("/api/orders");
    setOrders(response.data);
  };

  const createOrder = async () => {
    await axios.post("/api/orders", newOrder);
    fetchOrders();
    setNewOrder({ o_pcode: "", o_count: 0 });
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div>
      <h2>Orders</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.o_seq}>
            Product Code: {order.o_pcode}, Count: {order.o_count}
          </li>
        ))}
      </ul>
      <h2>Create New Order</h2>
      <div>
        <input
          type="text"
          placeholder="Product Code"
          value={newOrder.o_pcode}
          onChange={(e) =>
            setNewOrder({ ...newOrder, o_pcode: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Count"
          value={newOrder.o_count}
          onChange={(e) =>
            setNewOrder({ ...newOrder, o_count: parseInt(e.target.value) })
          }
        />
        <button onClick={createOrder}>Create</button>
      </div>
    </div>
  );
}

export default Order;
