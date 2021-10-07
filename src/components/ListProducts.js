import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Search from "./SearchBar";
import LoadingIndicator from "./LoadingIndicator";
import RadioBox from "./RadioBox";
import { categories } from "./Categories";

function ListProducts() {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);

  const [myFilters, setMyFilters] = useState({
    filters: { category: [] },
  });

  const [error, setError] = useState(false);
  const [filteredResults, setFilteredResults] = useState([]);

  const handleCategory = (value) => {
    const data = categories;
    let array = [];

    for (let key in data) {
      if (data[key]._id === parseInt(value)) {
        array = data[key].array;
      }
      // console.log(filteredResults)
    }
    return array;
  };

  //Search Button for Farms
  const filterUsers = (users, query) => {
    if (!query) {
      return users;
    }
    return users.filter((user) => {
      const userName = user.firstName.toLowerCase();
      return userName.includes(query);
    });
  };

  const { search } = window.location;
  const query = new URLSearchParams(search).get("search-bar");
  const [searchInput, searchUserFilter] = useState(query || "");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [originalUsers, setOriginalUsers] = useState([]);

  //useEffect

  useEffect(() => {
    setFilteredUsers(filterUsers(users, searchInput));
    setOriginalUsers(filterUsers(users, searchInput));
  }, [users, searchInput]);

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

  useEffect(() => {
    getAllUsers();
  }, []);

  const handleFilters = (filters, filterBy) => {
    const newFilters = { ...myFilters };
    newFilters.filters[filterBy] = filters;

    if (filterBy === "category") {
      let categoryValues = handleCategory(filters);
      newFilters.filters[filterBy] = categoryValues;
    }

    let filteredUsersByCategory = [];
    let filteredFarmItems = [];
    if (myFilters.filters.category[0] === "Any") {
      // setOriginalUsers(users)
      setFilteredUsers(originalUsers);
      console.log(originalUsers);
    } else {
      const _originalUsers = JSON.parse(JSON.stringify(originalUsers))

      _originalUsers.forEach((filteredUser) => {
        filteredFarmItems = [];
        filteredUser.farmItems.forEach((farmItem) => {
          if (farmItem.category === myFilters.filters.category[0]) {
            filteredFarmItems.push(farmItem);
            filteredUsersByCategory.push(filteredUser);
          }
        });
        filteredUser.farmItems = filteredFarmItems;
      });
      setFilteredUsers(filteredUsersByCategory);
    }

    // setFilteredUsers(filteredUsersByCategory);
    setMyFilters(newFilters);
  };

  return (
    <>
      <LoadingIndicator />
      <h4>Filter By Category</h4>
      <div>
        <RadioBox
          categories={categories}
          handleFilters={(filters) => handleFilters(filters, "category")}
        />
      </div>

      <div className="Mainfeed">
        <Search searchInput={searchInput} searchUserFilter={searchUserFilter} />
        <ul>
          {filteredUsers.map((user) => {
            return (
              <div>
                <h1>{user.firstName}</h1>
                {user.farmItems.map((item, index) => {
                  if (item.length === 0) {
                  } else {
                    return (
                      <li key={index} className="product-card">
                        <NavLink to={`/products/${item._id}`}>
                          <img src={item.imageUrl} width="50px" height="50px" />
                        </NavLink>
                        <p>{item.name}</p>
                        <p>{item.category}</p>
                        <br />
                        <NavLink to={`/products/${item._id}`}>
                          View details
                        </NavLink>
                        <p>{item.price}€</p>
                      </li>
                    );
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
