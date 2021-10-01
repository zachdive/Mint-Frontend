import React, { useState, useContext } from "react";
import SignupProvider from "./SignupProvider";
import { useHistory, NavLink } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { LoggedUserConsumer } from "../context/loggedUser";


function Login({ setCurrentLoggedInUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const loggedInUser = useContext(LoggedUserConsumer);


  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const body = {
      email,
      password,
    };
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_HOSTNAME}/login`,
        body,
        { withCredentials: true }
      );
      if (response.data.email) {
        toast.success("Login success");
        setCurrentLoggedInUser(response.data); //Comes from the app component
        //NotWorking______________________________________________________
        if(response.data.isFarmer === true) {
          history.push(`/user/${response.data._id}`);
        } else {
          history.push("/products");
        }
        //________________________________________________________________
      }
    } catch (e) {
      toast.error("Invalid login");
    }
  };

  return (
    <>
   <SignupProvider />

      <h2>Login</h2>

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

        <button type="submit">Login</button>
      </form>
      Don't have an account? Signup <NavLink to="/signup">here!</NavLink>
    </>
  );
}

export default Login;
