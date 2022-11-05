import React, { useEffect, useState } from "react";
import Order from "./Order";

const Orders = () => {
  const [orders, setorders] = useState([]);

  const handleStatus = (order) => {
    fetch(`http://localhost:5000/orders/${order._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "Approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const remainingOrders = orders.filter((odr) => odr._id !== order._id);
          const approving = orders.find((odr) => odr._id === order._id);
          approving.status = "Approved";

          const newOrders = [...remainingOrders, approving];
          setorders(newOrders);
        }
      });
  };
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
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="">
          {orders.map((order) => (
            <Order
              key={order._id}
              order={order}
              handleStatus={handleStatus}
            ></Order>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
