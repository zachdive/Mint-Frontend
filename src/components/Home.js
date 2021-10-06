import React from "react";
import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import scrollDown from "../scrolldown.png";
import potato from "../potatos.jpeg";
import SignupProvider from "./SignupProvider";

function Home() {
    return(
        <>
        <div className = "row lading-image">
            <div className="col-md-7">
                <h1>Here you'll find <strong>GOOD</strong> products</h1>
                <p>
                    At mint.io we take the concept of farm to table and bring it to
                    the comfort of your home by delivering you the best local goods! 
                </p>
                <NavLink to="/signup">Do you have your farm and want to sell your products?</NavLink>
                <Button className="land-img-sign" variant="outline-success" href="/signup" size="lg">Sign up</Button>{' '}
            </div>
        </div>
            <div className = "row land-sec-2">
                <div className="col-md-10">
                    <h2>Hungry for Fresh Goods?</h2>
                    <p>
                        Inside of our website you’ll be hable to find alot of farms that look alot like the one beneath.
                        Apart from vegetables and fruits we also dairy, beverages, bakerys and alot more!
                    </p>
                    <img src={scrollDown} alt="scroll down" width="20px"/>
                </div>
            </div>
            <div className = "row row-land-sec-3">
                <div className="col-md-11 land-sec-3">
                    <div className="dummy-user">
                        <span>
                            <img src={potato} alt="potato"/>
                        </span>
                        <h3><strong>Alice Truman's Farm</strong></h3>
                    </div>
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
                        <h3>Alice Truman</h3>
                        <h4>FARMER</h4>
                        <p>
                            Mint.io helped me prupolsing my small hobbie into a whole new buisness opportunity! Come check some of my most loved goods! 
                        </p>
                        <NavLink to="/signup">Check other farmers</NavLink>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-10 land-sec-5">
                    <div className="land-sec-text">
                        <h2>Sign up to start browising the <strong>B E S T</strong>  local products!</h2>
                        <p>
                            Inside you’ll find out some more informations about the local offers of farmer goods. Finish the process and sign up to start making your orders!
                        </p>
                    </div>
                    <div className="land-sec-5-buttons">
                    <SignupProvider />
                    <Button variant="outline-success" href="/signup" size="lg">Sign up manually</Button>{' '}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;