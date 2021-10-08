import React, { useState } from "react";

import { useHistory, NavLink } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import SignupProvider from "./SignupProvider";
import Button from 'react-bootstrap/Button'

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [ farmerAdress, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZip] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isFarmer, setIsFarmer] = useState(false);
  
  
  const history = useHistory();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const body = {
      username,
      password,
      firstName,
      lastName,
      phoneNumber,
      farmerAdress,
      city,
      zipCode,
      imageUrl,
      isFarmer,
    };
    await axios.post(`${process.env.REACT_APP_SERVER_HOSTNAME}/signup`, body);
    toast.success("Signup success");
    history.push("/login");
  };

  return isFarmer ? (
    <div className="signup-user">
      <div className="signup-user-right-container">
      </div>
      <div className="signup-user-left-container col-md-6 r-farm">    
        <h2 className="r-farm-h2">Register has a farmer!</h2>
        <form onSubmit={handleFormSubmit} className="signup-user-form">
          <span className="signup-user-toggle">
            <label className="col-md-9 toggle">Do you want to sell your goods?</label>
            <input
              type="checkbox"
              checked={isFarmer}
              onChange={() => setIsFarmer(!isFarmer)}
              className="signup-user-input"
            />
          </span>

          <span className="row">
            <span className="signup-user-box col-md-6">
              <label>first Name</label>
              <input
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                className="signup-user-input"
              />
            </span>
            <span className="signup-user-box col-md-6">
              <label>last Name</label>
              <input
                type="text"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                className="signup-user-input"
              />
            </span>
          </span>

          <span className="signup-user-box">
            <label>email</label>
            <input
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              className="signup-user-input"
            />
          </span>

          <span className="signup-user-box">
            <label>password</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="signup-user-input"
            />
          </span>  

          <span className="signup-user-box">
            <label>address</label>
            <input
              type="text"
              onChange={(e) => setAddress(e.target.value)}
              value={farmerAdress}
              className="signup-user-input"
            />
          </span>  

          <span className="row">
            <span className="signup-user-box col-md-6">
              <label>zip</label>
              <input
                type="text"
                onChange={(e) => setZip(e.target.value)}
                value={zipCode}
                className="signup-user-input"
              />
            </span>
            <span className="signup-user-box col-md-6">
              <label>city</label>
              <input
                type="text"
                onChange={(e) => setCity(e.target.value)}
                value={city}
                className="signup-user-input"
              />
            </span>
          </span>     

          <span className="signup-user-box">
            <label>phone number</label>
            <input
              type="text"
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
              className="signup-user-input"
            />

            <label>farm image</label>
              <input
                type="text"
                onChange={(e) => setImageUrl(e.target.value)}
                value={imageUrl}
                className="signup-user-input"
              />
            </span>

          <span className="signup-user-buttons r-farm-buttons">
            <Button type="submit" variant="success" size="lg">Sign up</Button>{' '}
            <SignupProvider /> 
          </span>

        </form>
      </div>
    </div>
  ) : (
    <div className="signup-user">
    <div className="signup-user-left-container col-md-6">    
      <h2>Get in with the goods!</h2>
      <form onSubmit={handleFormSubmit} className="signup-user-form">
        <span className="signup-user-toggle">
          <label className="col-md-9 toggle">Do you want to sell your goods?</label>
          <input
            type="checkbox"
            checked={isFarmer}
            onChange={() => setIsFarmer(!isFarmer)}
            className="signup-user-input"
          />
        </span>

        <span className="signup-user-box">
          <label>email</label>
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            className="signup-user-input"
          />
        </span>

        <span className="signup-user-box">
          <label>password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="signup-user-input"
          />
        </span>

        <span className="row">
          <span className="signup-user-box col-md-6">
            <label>first Name</label>
            <input
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              className="signup-user-input"
            />
          </span>
          <span className="signup-user-box col-md-6">
            <label>last Name</label>
            <input
              type="text"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              className="signup-user-input"
            />
          </span>
        </span>

        <span className="signup-user-box">
          <label>phone number</label>
          <input
            type="text"
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
            className="signup-user-input"
          />
        </span>

        <span className="signup-user-buttons">
          <Button type="submit" variant="success" size="lg">Sign up</Button>{' '}
          <SignupProvider /> 
        </span>

      </form>
    </div>
    <div className="signup-user-right-container">
    </div>
  </div>
  );
}

export default Signup;
