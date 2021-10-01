import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { LoggedUserConsumer } from "../context/loggedUser";


function Cart({match}) {
    const loggedInUser = useContext(LoggedUserConsumer);
    const [cart, setCart] = useState({});

    useEffect(() => {
        async function getCart(){
            const userCart = await axios.get( `${process.env.REACT_APP_SERVER_HOSTNAME}/cart/${loggedInUser.cart._id}`);
            setCart(userCart);
        } 
        getCart();
    }, []);

    return (
        <>
        <ul>
            {cart && cart.products.map((item) => {
                return (
                    <li>
                        <NavLink>
                            <h4>{item.name}</h4>
                            <img src={item.imageUrl}/>
                        </NavLink>
                    </li>
                );
            })}
        </ul>
        </>
    );
}

export default Cart;