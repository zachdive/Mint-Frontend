import React, { useContext } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';
import logo from "../project3-04.jpg";
import { NavLink } from 'react-router-dom';
import { LoggedUserConsumer } from "../context/loggedUser";
import { Link } from 'react-scroll';
import {animateScroll as scroll} from 'react-scroll';

//history
import { useHistory } from 'react-router-dom';


function Footer() {
    const loggedInUser = useContext(LoggedUserConsumer);
   
    return  (
       
            <MDBFooter className = "margin-footer">
                <MDBContainer >
                    <MDBRow >
                        <MDBCol className = "row1-footer" md="6">
                        {/* <Link className="c-main__contact" to="nav" smooth={true} duration={1000}>Click me</Link> */}
                          {/* <div  onClick={() => scroll.scrollToTop()}> */}
                           <img  onClick={() => scroll.scrollToTop()} className="P__Footer" src={logo} alt="logo" width="200px"/> 
                           {/* </div> */}
                            <NavLink exact to="/products"><p className="P__Footer">All Products</p></NavLink>
                            <NavLink exact to="#"/*{`/user/${loggedInUser._id}`}*/><p className="P__Footer">My Profile</p></NavLink>
                            <NavLink exact to="/orders"><p className="P__Footer">Orders</p></NavLink>
                        </MDBCol>
                     
                    </MDBRow>
                </MDBContainer>
                <div className="footer-copyright py-6 marginTopFooter">
                
                    <MDBRow fluid>
                    <MDBCol md="4" className = "copyright">
                        &copy; {new Date().getFullYear()} Copyright:   mint.io. All Rights Reserved.
                    </MDBCol>
                    <MDBCol md="4"></MDBCol>
                    <MDBCol md="4" className = "plugs">
                        <a className = "plugs" href="https://www.linkedin.com/in/joamonteiro/">João Monteiro</a> &&&nbsp;  
                        <a className = "plugs" href="https://www.linkedin.com/in/nunofgg/">Nuno Gonçalves</a> &&&nbsp; 
                        <a className = "plugs" href="https://www.linkedin.com/in/zacharydive/">Zach Dive</a>
                     </MDBCol>
                    </MDBRow>
                   
                </div>
            </MDBFooter>
        ) 
                    }

export default Footer

