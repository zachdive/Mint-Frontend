import React, { useState } from "react";
import { Switch } from '@headlessui/react';
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
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
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
      address,
      city,
      zip,
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
        <h2 className="r-farm-h2">Register as a farmer!</h2>
        <form onSubmit={handleFormSubmit} className="signup-user-form">

          <span className="signup-user-toggle">
            <label className="col-md-9 toggle switch">Do you want to sell your goods?</label>
            <input
              type="checkbox"
              checked={isFarmer}
              onChange={() => setIsFarmer(!isFarmer)}
              className="signup-user-input"
            />
             <span class="slider round"></span>
          </span>

      {/* <div className="py-16 signup-user-toggle">
      <label className="col-md-9 toggle">Do you want to sell your goods?</label>
      <Switch
        checked={isFarmer}
        onChange= {setIsFarmer}
        className={`${isFarmer ? 'bg-teal-900' : 'bg-teal-700'}
          relative inline-flex flex-shrink-0 h-[38px] w-[74px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${isFarmer ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[34px] w-[34px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
        />
      </Switch>
    </div> */}

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
              value={address}
              className="signup-user-input"
            />
          </span>  

          <span className="row">
            <span className="signup-user-box col-md-6">
              <label>zip</label>
              <input
                type="text"
                onChange={(e) => setZip(e.target.value)}
                value={zip}
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
{/*     
    <div className="py-16 signup-user-toggle">
      <label className="col-md-9 toggle">Do you want to sell your goods?</label>
      <Switch
        checked={isFarmer}
        onChange= {setIsFarmer}
        className={`${isFarmer ? 'bg-teal-900' : 'bg-teal-700'}
          relative inline-flex flex-shrink-0 h-[38px] w-[74px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${isFarmer ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[34px] w-[34px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
        />
      </Switch>
    </div> */}

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
