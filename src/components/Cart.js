import React, { useContext } from "react";
import { LoggedUserConsumer } from "../context/loggedUser";
//populate with user
//get user.cart
//map user.cart

function Cart({match}) {
    const loggedInUser = useContext(LoggedUserConsumer);

    return (
        <>
        {loggedInUser && <p>{loggedInUser.email}</p>}
        <p>ovbqoebo</p>
        </>
    );
}

export default Cart;