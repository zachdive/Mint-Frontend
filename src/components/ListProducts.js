import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

function ListProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getAllProjects() {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_HOSTNAME}/products`,
        { withCredentials: true }
      );
      setProducts(response.data);
    }
    getAllProjects();
  }, []);

  return (
    <ul>
      {products.map((product) => {
        return (
          <li key={product._id}>
            <NavLink to={`/products/${product._id}`}>{product.title}</NavLink>
          </li>
        );
      })}
    </ul>
  );
}

export default ListProducts;
