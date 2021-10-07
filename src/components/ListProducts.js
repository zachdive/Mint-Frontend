import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Search from "./SearchBar";
import LoadingIndicator from "./LoadingIndicator";
import RadioBox from "./RadioBox";
import { categories } from "./Categories";
//
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function ListProducts() {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);

  const [myFilters, setMyFilters] = useState({
    filters: { category: [] },
  });

  const [error, setError] = useState(false);
  const [filteredResults, setFilteredResults] = useState([]);

  //Carousel________________
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      partialVisibilityGutter: 40, // this is needed to tell the amount of px that should be visible.
      slidesToSlide: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40, // this is needed to tell the amount of px that should be visible.
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
      slidesToSlide: 1,
    },
  };
  //__________________________

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
      const _originalUsers = JSON.parse(JSON.stringify(originalUsers));

      _originalUsers.forEach((filteredUser) => {
        filteredFarmItems = [];
        filteredUser.farmItems.forEach((farmItem) => {
          if (farmItem.category === myFilters.filters.category[0]) {
            filteredFarmItems.push(farmItem);
            if (
              !filteredUsersByCategory.some(
                (user) => user._id === filteredUser._id
              )
            ) {
              filteredUsersByCategory.push(filteredUser);
            }

            console.log(filteredUser);
          }
        });
        filteredUser.farmItems = filteredFarmItems;
      });
      console.log(filteredUsersByCategory);
      setFilteredUsers(filteredUsersByCategory);
    }

    // setFilteredUsers(filteredUsersByCategory);
    setMyFilters(newFilters);
  };

  return (
    <div className="products-list-main">
      <div className="products-list-filters">
        <LoadingIndicator />
        <h4>Categories</h4>
        <div>
          <RadioBox
            categories={categories}
            handleFilters={(filters) => handleFilters(filters, "category")}
          />
        </div>
        <Search searchInput={searchInput} searchUserFilter={searchUserFilter} />
      </div>

      <div className="products-list-container">
        {filteredUsers.map((user) => {
          return (
            <div className="products-list-row">
              <div className="products-list-farmercard">
                <img
                  src={user.imageUrl}
                  alt="farm img"
                  className="products-list-farmname"
                />
                <h1>{user.firstName}</h1>
              </div>
              <Carousel
                swipeable={true}
                draggable={true}
                partialVisible={true}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                // deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
              >
                {user.farmItems.map((item, index) => {
                  if (item.length === 0) {
                  } else {
                    return (
                      <div key={index} className="product-card">
                        <NavLink to={`/products/${item._id}`}>
                          <img
                            src={item.imageUrl}
                            width="50px"
                            height="50px"
                            className="product-card-img"
                            alt={item.name}
                          />
                        </NavLink>
                        <div className="product-card-text">
                          <span>
                            <h5>{item.name}</h5>
                            <NavLink to={`/products/${item._id}`}>
                              View details
                            </NavLink>
                          </span>
                          <p>{item.price}€</p>
                        </div>
                      </div>
                    );
                  }
                })}
              </Carousel>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListProducts;
