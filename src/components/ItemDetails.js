import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, NavLink } from "react-router-dom";
import { toast } from "react-toastify";

function ItemDetails({ match }) {
  const [item, setItem] = useState({});

  const [quantity, setQuantity] = useState(1);
  const [deliveryFee, setDeliveryFee] = useState(3.95);
  const [totalPrice, setTotalPrice] = useState("");
  const [status, setStatus] = useState("Not processed");

  const history = useHistory();

  useEffect(() => {
    async function getProductDetails() {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_HOSTNAME}/products/${match.params.id}`
      );
      setItem(response.data);
    }
    getProductDetails();
  }, []);

  const handleAddToCart = async () => {
    const product = {
      itemId: item._id,
      quantity: quantity,
      purchasePrice: `${item.price * quantity}`,
    };

    debugger;
    
    await axios.post(`${process.env.REACT_APP_SERVER_HOSTNAME}/cart`, product, { withCredentials: true});
    toast.success("Added to cart");
    history.push("/products");
  };

  // const handleDeleteProject = async (id) => {
  //   await axios.delete(
  //     `${process.env.REACT_APP_SERVER_HOSTNAME}/projects/${id}`
  //   );
  //   toast.info("Project deleted");
  //   history.push("/");
  // };

  return (
    <>
      <h2>{item.name}</h2>
      <h4>{item.category}</h4>
      <h5>{item.quantity_available}</h5>
      <h5>{item.price}</h5>
      <h6>{item.expire_in}</h6>
      <p>{item.description}</p>
      {item.imageUrl && <img src={item.imageUrl} alt="product" />}

      <button onClick={handleAddToCart}>Add to cart</button>

      {/* <NavLink to={`/projects/${product._id}/edit`}>Edit</NavLink> */}
      {/* <button onClick={() => handleDeleteProject(project._id)}>Delete</button> */}
    </>
  );
}

export default ItemDetails;
