import React from "react";
import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import scrollDown from "../scrolldown.png";
import potato from "../potatos.jpeg";
import SignupProvider from "./SignupProvider";
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import Jump from 'react-reveal/Jump';

function Home() {
    return(
        <>
        <div className = "row lading-image">
        <Slide left cascade>
            <div className="col-md-7">
                <h1>Here you'll find <strong>GOOD</strong> products</h1>
                <p>
                    At mint.io we take the concept of farm to table and bring it to
                    the comfort of your home by delivering you the best local goods! 
                </p>
                <NavLink to="/signup">Do you have a farm and want to sell your products?</NavLink>
                <Button className="land-img-sign" variant="outline-success" href="/signup" size="lg">Sign up</Button>{' '}
            </div>
        </Slide>
        </div>
            <div className = "row land-sec-2">
                <div className="col-md-10">
                    <Fade bottom>
                    <h2>Hungry for Fresh Goods?</h2>
                    </Fade>
                    <p>
                        Using our platform you’ll be able to connect with many of your local producers like below.
                        Apart from vegetables and fruits we also have dairy, beverages, grains and alot more!
                    </p>
                    <img src={scrollDown} alt="scroll down" width="20px"/>
                </div>
            </div>
            <div className = "row row-land-sec-3">
                <div className="col-md-11 land-sec-3">
                <Fade bottom>
                    <div className="dummy-user">
                        <span>
                            <img src={potato} alt="potato"/>
                        </span>
                        <h3><strong>Alice Truman's Farm</strong></h3>
                    </div>
                </Fade>
                    <div className="dummy-user-goods">
                        <span>
                        <div className="dummy-user-goods-item">
                            <div className="dummy-user-goods-img dummy-user-img1"></div>
                            <span>
                                <h5>Potato</h5>
                                <p>0.77€</p>
                            </span>
                        </div>
                        <div className="dummy-user-goods-item">
                            <div className="dummy-user-goods-img dummy-user-img2"></div>
                            <span>
                                <h5>Tomato</h5>
                                <p>1.20€</p>
                            </span>
                        </div>
                        <div className="dummy-user-goods-item">
                            <div className="dummy-user-goods-img dummy-user-img3"></div>
                            <span>
                                <h5>Carrot</h5>
                                <p>0.50€</p>
                            </span>
                        </div>
                        <div className="dummy-user-goods-item">
                            <div className="dummy-user-goods-img dummy-user-img4"></div>
                            <span>
                                <h5>Strawberries</h5>
                                <p>1.88€</p>
                            </span>
                        </div>
                        </span>
                    </div>
                </div>
            </div>
            <div className="row row-land-sec-4">
                <div className="col-md-8 land-sec-4">
                    <div className="land-sec-4-img"></div>
                    <div className="land-sec-4-content">
                    <Fade bottom>
                        <h3>Alice Truman</h3>
                        <h4>FARMER</h4>
                    </Fade>
                        <p>
                            Mint.io helped me expand my agriculture business and reach a whole new set of clients. Come check some of my most loved goods, produced straight from my farm! 
                        </p>
                        <Jump>
                        <NavLink to="/signup">Check other farmers</NavLink>
                        </Jump>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-10 land-sec-5">
                <Slide left cascade>
                    <div className="land-sec-text">
                        <h2>Sign up to start browising the <strong>B E S T</strong>  local products!</h2>
                        <p>
                            Browse our digital farmers market and purchase a wide-range of local products. Finish the process and sign up to start making your orders!
                        </p>
                    </div>
                    <div className="land-sec-5-buttons">
                    <SignupProvider />
                    <Button variant="outline-success" href="/signup" size="lg">Sign up manually</Button>{' '}
                    </div>
                </Slide>
                </div>
            </div>
        </>
    );
}

export default Home;