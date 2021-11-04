import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { IoMdCart } from "react-icons/io";
import { IconContext } from 'react-icons';
import {toast} from 'react-toastify';
import { useHistory } from "react-router-dom";
import logo from "../project3-04.jpg";
import Button from 'react-bootstrap/Button'


function NavBar({ loggedInUser, setCurrentLoggedInUser }) {
  const [loading, setLoading] = React.useState(false);
  const [products, setProducts] = useState([]);
  const searchRef = React.useRef();
  const [firstThreeFromSearch, setFirstThreeFromSearch] = React.useState([]);

const history = useHistory();
  
  //Logout
  const logoutUser = async () => {
    await axios.post(`${process.env.REACT_APP_SERVER_HOSTNAME}/logout`, null, {
      withCredentials: true,
    });
    setCurrentLoggedInUser("");
    toast.success(logoutUser.data);
    history.push("/login");
  };

  //Search Stuff

  //  useEffect(() => {
  //     async function getProducts() {
  //       const response = await axios.get(
  //         `${process.env.REACT_APP_SERVER_HOSTNAME}/products`,
  //         { withCredentials: true }
  //       );
  //       setProducts(response.data);
  //     }
    
  const getProducts = (query = null, limit = 0, stock = 'false') => {
    return axios.get(query ? `${process.env.REACT_APP_SERVER_HOSTNAME}/products?query=${query}&limit=${limit}&stock=${stock}` : `${process.env.REACT_APP_SERVER_HOSTNAME}/products?limit=${limit}&stock=${stock}`);
}


  const handleFormSubmit = (e) => {
    e.preventDefault();
    const search = searchRef.current.value;

    history.push(`/products?query=${search}`);
    searchRef.current.value = '';
    setFirstThreeFromSearch([]);
}

const handleClick = () => {
    searchRef.current.value = '';
    setFirstThreeFromSearch([]);
}

const handleChange = async () => {
    const search = searchRef.current.value;
    if(search) {
        const response = await getProducts(search, 6, 'true');
        setFirstThreeFromSearch(response.data);
    } else {
        setFirstThreeFromSearch([]);
    }
}



  return loggedInUser ? (
    <>
      <Nav variant="pills" activeKey="1" id="nav">
        <Nav.Item>
          <NavLink eventKey="1" to="/products" className="log-sign-logo">
            <img src={logo} alt="logo" width="200px"/>
          </NavLink>
        </Nav.Item>

        <Nav.Item className="nav-search">
                            <form className="d-flex" onSubmit={handleFormSubmit}>
                                <input className="form-control me-2 nav-search-input" type="text" placeholder="Search for a product.." aria-label="Search" onKeyUp={handleChange} ref={searchRef} />
                                <button className="btn btn-outline-dark" type='submit'></button>
                            </form>
                            <div className={(firstThreeFromSearch.length ? 'd-block' : 'd-none') + ' m-0 p-0 custom-width border bg-white'}
                                style={{position: 'absolute', top: '50px', zIndex: '50'}}>
                                <div className='me-2 p-0 custom-display mb-2' style={{width: '130px'}}>
                                    <div className="list-group" id="list-tab" role="tablist">
                                    {
                                        firstThreeFromSearch.map((product, index) => {
                                            return(
                                                <a key={product._id} className={"p-1 list-group-item list-group-item-action list-group-item-light rounded-0 border-0" + (index === 0 ? ' active' : '')} id={`list-${index}-list`} data-bs-toggle="list" href={`#list-${index}`} role="tab" aria-controls={product.name}>
                                                    {product.name.length > 15 ? product.name.substr(0, 15) + '...' : product.name}
                                                </a>
                                            )
                                        })
                                    }
                                    </div>
                                </div>

                                <div className='p-0 m-0 custom-display' style={{width: '300px'}}>
                                    <div className="tab-content" id="nav-tabContent">
                                    {
                                        firstThreeFromSearch.map((product, index) => {
                                            return (
                                            <div key={product._id} className={"tab-pane fade show" + (index === 0 ? ' active' : '')} id={`list-${index}`} role="tabpanel" aria-labelledby={`list-${index}-list`}>
                                                <div className="container-fluid p-0 d-flex flex-column">
                                                    <div className='me-1'>
                                                        <img width='80px' src= {product.imageUrl} alt="..." />
                                                        <div className='text-wrap' style={{height: '200px', fontSize: '0.8rem', overflowY: 'hidden'}}>
                                                          <Link to={`/products/${product._id}`} onClick={handleClick} className='btn btn-primary btn-sm ms-1'>View Product</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            )
                                        })
                                    }
                                    </div>
                                </div>
                            </div>
                        </Nav.Item>
        <div className="nav-right">
          <div className="nav-user-container">                
            <img src={loggedInUser.imageUrl} width="50rem" alt="user img" className="nav-usr-img"/>
            
            <NavDropdown title= {`${loggedInUser.firstName} ${loggedInUser.lastName}`} numberOfLines={1} ellipsizeMode="tail" style={{ width: 160, flex:1  }} id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1" href={`/user/${loggedInUser._id}`}>My profile</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2" href="/orders">Orders</NavDropdown.Item>
              {loggedInUser.isFarmer === true && <NavDropdown.Item eventKey="4.2" href="/product/add">Add a product</NavDropdown.Item>}
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="4.4">
                <button onClick={logoutUser} className="logout">Logout</button>
              </NavDropdown.Item>
            </NavDropdown>
          </div>
          <Nav.Item>
          
            <IconContext.Provider value={{color: '#59B175', size: '2.5rem' }}>
              <NavLink  eventKey="3" to='/cart'><IoMdCart /></NavLink>
            </IconContext.Provider>
          
          </Nav.Item>
        </div>
      </Nav>
    </>
  ) : (
    <>
    <Nav variant="pills" activeKey="1">
      <Nav.Item>
        <NavLink eventKey="1" exact to="/" className="log-sign-logo">
          <img src={logo} alt="logo" width="200px"/>
        </NavLink>
      </Nav.Item>
      <div className="log-sign-nav">
      <Nav.Item>
        <Nav.Link title="Item" href="/signup">
        <Button variant="success">Sign up</Button>{' '}
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className="log-nav">
        <NavLink eventKey="3" to="/login">
          Login
        </NavLink>
      </Nav.Item>
      </div>
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
