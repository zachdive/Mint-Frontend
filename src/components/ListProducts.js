import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Search from "./SearchBar";

function ListProducts() {
  const [products, setProducts] = useState([]);


 const filterProducts = (products, query) => {
  if(!query) {
    return products;
  }
  return products.filter(food => {
    const foodName = food.name.toLowerCase();
    return foodName.includes(query);
  })
}

const { search } = window.location;
const query = new URLSearchParams(search).get('search-bar');
const [ searchInput, searchProductFilter ] = useState(query || '');
const filteredProducts = filterProducts(products, searchInput);

  

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
    <div className="Mainfeed">
    <Search searchInput={searchInput}  searchProductFilter = {searchProductFilter} />
    <ul>
     
      {filteredProducts.map((product) => {
        return (
          <li key={product._id}>
            <NavLink to={`/products/${product._id}`}><img src={product.imageUrl} width = "50px"  height = "50px"/></NavLink>
            <NavLink to={`/products/${product._id}`}>{product.name}</NavLink>
            <p>{product.category}</p>
          </li>
        );
      })}
    </ul>
    </div>
  );
}

export default ListProducts;
