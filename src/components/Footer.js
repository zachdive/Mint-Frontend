import React, { useEffect, useState } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';
import logo from "../project3-04.jpg";
// import { NavLink, Link } from "react-router-dom";
 import { Link } from 'react-scroll';
import {animateScroll as scroll} from 'react-scroll';

//history
import { useHistory } from 'react-router-dom';


function Footer() {

  

   
    

    // const scrollToTop = () => {
    //     window.scrollTo(0, 0);
    //     // window.scroll({
    //     //     top: 0,
    //     //     behavior: 'smooth'
    //     //   });
    // };
   
    return  (
       
            <MDBFooter className = "margin-footer">
                <MDBContainer >
                    <MDBRow >
                        <MDBCol className = "row1-footer" md="6">
                        {/* <Link className="c-main__contact" to="nav" smooth={true} duration={1000}>Click me</Link> */}
                          {/* <div  onClick={() => scroll.scrollToTop()}> */}
                           <img  onClick={() => scroll.scrollToTop()} className="P__Footer" src={logo} alt="logo" width="200px"/> 
                           {/* </div> */}
                            <p className="P__Footer">All Products</p>
                            <p className="P__Footer">My Profile</p>
                            <p className="P__Footer">Orders</p>
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

