import axios from "axios";
import React, { useState, useEffect } from "react";


function Orders(){
const [user, setUser] = useState({});

useEffect(() => {
    async function getUser(){
        const response = axios.get(`${process.env.REACT_APP_SERVER_HOSTNAME}/orders`, { withCredentials: true });
        setUser(response.data);
    }
    getUser();
}, []);

return (
    <div>
        <h3>Your Orders</h3>
        <ul>
            {user.orders.map((order) => {
                return (
                    <li>
                        <h5>{order._id}</h5>
                        <p>{order.schedule_delivery.date}</p>
                        <p>{order.schedule_delivery.time}</p>
                        <p>{order.total}</p>
                    </li>
                );
            })}
        </ul>
    </div>
);
}

export default Orders;