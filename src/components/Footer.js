import React, { useEffect, useState } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';
import logo from "../project3-04.jpg";

//history
import { useHistory } from 'react-router-dom';


function Footer() {

    // const [ showButton, setShowButton ] = useState(true);
    const history = useHistory();

    const toHome = (e) => {
        history.push('/');
    };
    const toSignup = (e) => {
        history.push('/signup');
    };
    
    // useEffect(() => {
    //         window.addEventListener('scroll', ) 
    // }, [])

    // useEffect(() => {
    //     window.addEventListener('scroll', () => {
    //         if (window.pageYOffset > 100) {
    //             setShowButton(true);
    //         } else {
    //             setShowButton(false);
    //         }
    //     });
    // }, []);

    const scrollToTop = () => {
        // window.scrollTo(0, 0);
        window.scroll({
            top: 0,
            behavior: 'smooth'
          });
    };
   
    return  (
       
            <MDBFooter classname = "margin-footer">
                <MDBContainer >
                    <MDBRow classname = "margin-footer">
                        <MDBCol className = "Row1" md="6">
                           <img onClick={scrollToTop} className="P__Footer" src={logo} alt="logo" width="200px"/>
                            <p className="P__Footer">All Products</p>
                            <p className="P__Footer">My Profile</p>
                            <p className="P__Footer">Orders</p>
                        </MDBCol>
                     
                    </MDBRow>
                </MDBContainer>
                <div className="footer-copyright py-6 marginTopFooter">
                
                    <MDBRow fluid>
                    <MDBCol md="4">
                        &copy; {new Date().getFullYear()} Copyright:   mint.io. All Rights Reserved.
                    </MDBCol>
                    <MDBCol md="4"></MDBCol>
                    <MDBCol md="4" className = "plugs">
                        <a className = "plugs" href="https://github.com/joamonteiro">Joaõ Monteiro</a> &&&nbsp;  
                        <a className = "plugs" href="https://github.com/Nunofgg">Nuno Gonçalves</a> &&&nbsp; 
                        <a className = "plugs" href="https://github.com/zachdive">Zach Dive</a>
                     </MDBCol>
                    </MDBRow>
                   
                </div>
            </MDBFooter>
        ) 
                    }

export default Footer

