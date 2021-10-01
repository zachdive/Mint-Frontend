import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { LoggedUserConsumer } from "../context/loggedUser";


function Cart() {
    const loggedInUser = useContext(LoggedUserConsumer);
    const [userCart, setUserCart] = useState({});

    //2
    useEffect(() => {
        async function getUser (){
            const user = await axios.get(`${process.env.REACT_APP_SERVER_HOSTNAME}/usercart`, { withCredentials: true})
            setUserCart(user.data);
        } 
        getUser();
        
    }, []);
    

    //1
    //3
    return (
        <>
        <h2>Cart</h2>
        <ul>
            {userCart.cart?.products.map((item, index) => {
                return (
                    <li key={index}>
                        <NavLink to={`/products/${item.item._id}`}>
                            <div>
                                <h4>{item.item.name}</h4>
                                <h6>{item.item.price}</h6>
                                <p>{item.item.expire_in}</p>
                            </div>
                        </NavLink>
                    </li>
                );
            })}
        </ul>
        </>
    );
}

export default Cart;