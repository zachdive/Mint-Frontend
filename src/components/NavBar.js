import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { MdShoppingCart } from "react-icons/md";
import { IconContext } from 'react-icons';


function NavBar({ loggedInUser, setCurrentLoggedInUser }) {
  //Passing user


  //Logout
  const logoutUser = async () => {
    await axios.post(`${process.env.REACT_APP_SERVER_HOSTNAME}/logout`, null, {
      withCredentials: true,
    });
    setCurrentLoggedInUser("");
  };

  return loggedInUser ? (
    <>
      <Nav variant="pills" activeKey="1">
        <Nav.Item>
          <Nav.Link eventKey="1" href="/products">
            Our Products
          </Nav.Link>
        </Nav.Item>
        <NavDropdown title= {`${loggedInUser.firstName} ${loggedInUser.lastName}`} id="nav-dropdown">
          <NavDropdown.Item eventKey="4.1" href={`/user/${loggedInUser._id}`}>My profile</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2" href="/orders">Orders</NavDropdown.Item>
          {loggedInUser.isFarmer === true && <NavDropdown.Item eventKey="4.2" href="/product/add">Add a product</NavDropdown.Item>}
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="4.4">
            <button onClick={logoutUser}>Logout</button>
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Item>
         
          <IconContext.Provider value={{color: 'black', size: '3rem' }}>
                                        <NavLink  eventKey="3" to='/cart'><MdShoppingCart /></NavLink>
          </IconContext.Provider>
         
        </Nav.Item>
      </Nav>
    </>
  ) : (
    <>
    <Nav variant="pills" activeKey="1">
      <Nav.Item>
        <Nav.Link eventKey="1" href="/products">
          Our Products
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link title="Item" href="/signup">
          Signup
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="3" href="/login">
          Login
        </Nav.Link>
      </Nav.Item>
      {/* <NavDropdown title="Dropdown" id="nav-dropdown">
      <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
      <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
      <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
    </NavDropdown> */}

    </Nav>
  </>
  );
}

export default NavBar;
