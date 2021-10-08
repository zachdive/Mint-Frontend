import axios from "axios";
import React, { useState, useEffect } from "react";

function Orders() {
  const [user, setUser] = useState({});

  useEffect(() => {
    async function getUser() {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_HOSTNAME}/orders`,
        { withCredentials: true }
      );
      setUser(response.data);
    }
    getUser();
  }, []);

  return (
    <div className="orders-page">
      <h3>Your Orders</h3>
      <div className="orders-box">
        <ul>
          {user.orders?.map((order, index) => {
            return (
              <li key={index}>
                <div className="order-box">
                  <h5>{order.userProducts.length} products</h5>
                  <div>
                    <p>{order.schedule_delivery.date}</p>
                    <p>{order.schedule_delivery.time}</p>
                  </div>
                  <div>
                    <p>{order.address.city}</p>
                    <p>{order.address.address}</p>
                    <p>{order.address.zipCode}</p>
                  </div>
                  <div>
                    <p>{order.payment.cardNumber}</p>
                    <p>{order.payment.cardType}</p>
                  </div>
                  <h6>Total: {order.total}€</h6>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Orders;
