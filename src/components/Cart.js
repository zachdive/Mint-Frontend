import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { LoggedUserConsumer } from "../context/loggedUser";

function Cart() {
  const loggedInUser = useContext(LoggedUserConsumer);
  const [userCart, setUserCart] = useState({});

  //2
  useEffect(() => {
    async function getUser() {
      const user = await axios.get(
        `${process.env.REACT_APP_SERVER_HOSTNAME}/usercart`,
        { withCredentials: true }
      );
      setUserCart(user.data);
    }
    getUser();
  }, []);

  const handleDeleteButton = async () => {
    await axios.put()
  }

  //1
  //3
  return (
    <>
      <h2>Cart</h2>
      <ul>
        {userCart.cart?.products.map((item, index) => {
          const handleQuantityButton = async (statement) => {
            const quantity = item.quantity;
            const product = {
                itemId: item._id,
                quantity: quantity,
                purchasePrice: `${item.price * quantity}`,
            };
            if (statement === "decrease") {
                await axios.put(`${process.env.REACT_APP_SERVER_HOSTNAME}/cart/${userCart.cart._id}`, product, { withCredentials: true })
            } else if (statement === "increase") {
                await axios.put(`${process.env.REACT_APP_SERVER_HOSTNAME}/cart/${userCart.cart._id}`, product, { withCredentials: true })
            }
          };

          return (
            <li key={index}>
                <div>
                  <NavLink to={`/products/${item.item._id}`}>
                    <h4>{item.item.name}</h4>
                  </NavLink>
                  <h6>{item.item.price}</h6>
                  <p>{item.item.expire_in}</p>
                  <div>
                    <button onClick={() => handleQuantityButton("decrease")}>
                        -
                    </button>
                    <p>{item.quantity}</p>
                    <button onClick={() => handleQuantityButton("increase")}>
                        +
                    </button>
                  </div>
                  <button onClick={handleDeleteButton}>Remove</button>
                </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Cart;
