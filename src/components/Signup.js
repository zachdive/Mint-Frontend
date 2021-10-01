import React, { useState } from "react";

import { useHistory, NavLink } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isFarmer, setIsFarmer] = useState(false);
  
  
  const history = useHistory();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const body = {
      email,
      password,
      firstName,
      lastName,
      phoneNumber,
      isFarmer,
    };
    await axios.post(`${process.env.REACT_APP_SERVER_HOSTNAME}/signup`, body);
    toast.success("Signup success");
    history.push("/login");
  };

  return (
    <>
  
      
      <h2>Signup</h2>
      <form onSubmit={handleFormSubmit}>
        <label>Email</label>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <label>Password</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

       <label>First Name</label>
        <input
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />

        <label>Last Name</label>
        <input
          type="text"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        />

        <label>Phone Number</label>
        <input
          type="text"
          onChange={(e) => setPhoneNumber(e.target.value)}
          value={phoneNumber}
        />

        <label>Are you a farmer?</label>
        <input
          type="checkbox"
          checked={isFarmer}
          onChange={() => setIsFarmer(!isFarmer)}
          
        />



        <button type="submit">Signup</button>
      </form>
      Already have an account? Login <NavLink to="/login">here</NavLink>
    </>
  );
}

export default Signup;
