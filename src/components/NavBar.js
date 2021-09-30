import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

function NavBar({ loggedInUser, setCurrentLoggedInUser }) {
  const logoutUser = async () => {
    await axios.post(`${process.env.REACT_APP_SERVER_HOSTNAME}/logout`, null, {
      withCredentials: true,
    });
    setCurrentLoggedInUser("");
  };

  return loggedInUser ? (
    <>
      <p>Welcome {loggedInUser.firstName}</p>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/">
              <button onClick={logoutUser}>Logout</button>
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={{ color: "red" }} exact to="/items">
              Our Products
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={{ color: "red" }} to="/items/add">
              Add a Product
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  ) : (
    <nav>
      <ul>
        <li>
          <NavLink activeStyle={{ color: "red" }} exact to="/items">
            Our Products
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={{ color: "red" }} to="/signup">
            Signup
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={{ color: "red" }} to="/login">
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;