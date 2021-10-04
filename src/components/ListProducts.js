import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Search from "./SearchBar";
import LoadingIndicator from "./LoadingIndicator"


function ListProducts() {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  // const farmItems = users.farmItems;

//  const filterProducts = (farmItems, query) => {
//   if(!query) {
//     return farmItems;
//   }
//   return farmItems.filter(food => {
//     const foodName = food.name.toLowerCase();
//     return foodName.includes(query);
//   })
// }

  // const { search } = window.location;
  // const query = new URLSearchParams(search).get('search-bar');
  // const [ searchInput, searchProductFilter ] = useState(query || '');
  // const filteredProducts = filterProducts(farmItems, searchInput);


    

  useEffect(() => {
      async function getAllProjects() {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_HOSTNAME}/products`,
          { withCredentials: true }
        );
        setProducts(response.data);
      }
      getAllProjects();

      async function getAllUsers() {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_HOSTNAME}/users`,
          { withCredentials: true }
        );
        const allUsers = response.data;
        
        function getFarmers(obj) {
          if (obj.isFarmer === true) {
            return true;
          } else {
            return false;
          }
        }

        const farmUsers = allUsers.filter(getFarmers);
        setUsers(farmUsers);
      }
      getAllUsers();

  }, []);


  return (
    <>
    <LoadingIndicator />
    <div className="Mainfeed">
    {/* <Search searchInput={searchInput}  searchProductFilter = {searchProductFilter} /> */}
    <ul>
     
      {/* {filteredProducts.map((product) => {
        return (
          <li key={product._id} className="product-card">
            <NavLink to={`/products/${product._id}`}><img src={product.imageUrl} width = "50px"  height = "50px"/></NavLink>
            <NavLink to={`/products/${product._id}`}>{product.name}</NavLink>
            <p>{product.category}</p>
            <p>{product.quantity_available}</p>
            <p>{product.price}€</p>
          </li>
        );
      })} */}

      {/*  ------------------------------------------------------------ */}

      {users.map((user) => {
        return (
          <div>
          <h1>{user.firstName} {user.lastName} products</h1>
          {user.farmItems.map((item, index) => {
            if (item.length === 0) {
              ;
            } else {
              return(
                <li key={index} className="product-card">
                  <NavLink to={`/products/${item._id}`}><img src={item.imageUrl} width = "50px"  height = "50px"/></NavLink>
                  <NavLink to={`/products/${item._id}`}>{item.name}</NavLink>
                  <br/>
                  <NavLink to={`/products/${item._id}`}>View details</NavLink>
                  <p>{item.price}€</p>
              </li>
              )
            }
          })}
          </div>
        );
      })}

      {/* ------------------------------------------------------------ */}
    </ul>
    </div>
  
  </>
 
 );
}

export default ListProducts;
