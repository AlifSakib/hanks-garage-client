import React, { useEffect, useState } from "react";
import Order from "./Order";

const Orders = () => {
  const [orders, setorders] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => {
        setorders(data.data);
      });
  }, []);
  console.log(orders);
  return (
    <div>
      <div class="container px-5 py-24 mx-auto flex flex-wrap">
        <div class="">
          {orders.map((order) => (
            <Order key={order._id} order={order}></Order>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
