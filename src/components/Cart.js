import React, { useContext } from "react";
import { LoggedUserConsumer } from "../context/loggedUser";


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