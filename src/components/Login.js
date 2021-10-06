import React, { useState, useContext } from "react";
import SignupProvider from "./SignupProvider";
import { useHistory, NavLink } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { LoggedUserConsumer } from "../context/loggedUser";
import Button from 'react-bootstrap/Button'


function Login({ setCurrentLoggedInUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const loggedInUser = useContext(LoggedUserConsumer);


  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const body = {
      username,
      password,
    };
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_HOSTNAME}/login`,
        body,
        { withCredentials: true }
      );
      if (response.data.username) {
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
    <div className="login-container">
        <form onSubmit={handleFormSubmit}>
          <h2>Login</h2>
          <label>email</label>
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            className="signup-user-input"
          />

          <label>password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="signup-user-input"
          />
          <p>Don't have an account? Signup <NavLink to="/signup">here!</NavLink></p>
          <span>
          <Button type="submit" variant="success">Enter</Button>{' '}
            <SignupProvider />
          </span>
        </form>
    </div>
  );
}

export default Login;
