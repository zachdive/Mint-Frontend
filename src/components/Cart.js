import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Cart() {
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

  const handleQuantityButton = async (statement, item) => {
    const product = {
        itemId: item.item._id,
        quantity: item.quantity,
        purchasePrice: `${item.item.price * item.quantity}`,
    };
    if (statement === "decrease") {
        const response = await axios.put(`${process.env.REACT_APP_SERVER_HOSTNAME}/cart/${userCart._id}/decrease`, product, { withCredentials: true });
        setUserCart(response.data);
    } else if (statement === "increase") {
        const response = await axios.put(`${process.env.REACT_APP_SERVER_HOSTNAME}/cart/${userCart._id}/increase`, product, { withCredentials: true });
        setUserCart(response.data);
    }
  };

  //1
  //3
  return (
    <>
      <h2>Cart</h2>
      <ul>
        {userCart && userCart.products?.map((item, index) => {
         

          return (
            <li key={index}>
                <div>
                  <NavLink to={`/products/${item.item._id}`}>
                    <h4>{item.item.name}</h4>
                  </NavLink>
                  <h6>{item.item.price}</h6>
                  <p>{item.item.expire_in}</p>
                  <div>
                    <button onClick={() => handleQuantityButton("decrease", item)}>
                        -
                    </button>
                    <p>{item.quantity}</p>
                    <button onClick={() => handleQuantityButton("increase", item)}>
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
