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

  const handleDeleteButton = async (item) => {
    const product = {
        itemId: item.item._id,
        quantity: item.quantity,
        purchasePrice: item.item.price * item.quantity,
    };
    const response = await axios.put(`${process.env.REACT_APP_SERVER_HOSTNAME}/cart/${userCart._id}/remove`, product, { withCredentials: true });
    setUserCart(response.data);
  }

  const handleQuantityButton = async (statement, item) => {
    const product = {
        itemId: item.item._id,
        quantity: item.quantity,
        purchasePrice: item.item.price * item.quantity,
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
    <div className="cart-page">
      <h2>Cart</h2>
      <div className="cart-box">
        <ul>
          {userCart && userCart.products?.map((item, index) => {

            return (
              <li key={index}>
                  <div className="cart-products-box">
                  <div className="cart-product-info">
                    <NavLink to={`/products/${item.item._id}`}>
                      <img width="40px" src={item.item.imageUrl} />
                    </NavLink>
                    <h4>{item.item.name}</h4>
                    <h6>{item.item.price}€</h6>
                    <p>Expire date: {item.item.expire_in}</p>
                  </div>
                  <div className="cart-buttons-box">
                    <div className="cart-quantity-buttons">
                        <button className="cart-quantity-button" onClick={() => handleQuantityButton("decrease", item)}>
                            -
                        </button>
                        <p>{item.quantity}</p>
                        <button className="cart-quantity-button" onClick={() => handleQuantityButton("increase", item)}>
                            +
                        </button>
                      </div>
                      <button className="cart-remove-button" onClick={() => handleDeleteButton(item)}>Remove</button>
                  </div>
                  </div>
              </li>
            );

          })}
        </ul>
        <NavLink className="cart-checkout-button" to="/cart/checkout">Check out</NavLink>
      </div>
    </div>
  );
}

export default Cart;
