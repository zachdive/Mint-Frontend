import { Switch, Route } from "react-router-dom";
import "./App.css";
import EditProject from "./components/EditProject";
import ListProducts from "./components/ListProducts";
import ItemDetails from "./components/ItemDetails";
import NavBar from "./components/NavBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Cart from "./components/Cart";
import { useState, useEffect } from "react";
import axios from "axios";
import AddItem from "./components/AddItem";
import { LoggedUserProvider } from "./context/loggedUser";
import "bootstrap/dist/css/bootstrap.min.css";
import PrivateRoute from "./components/PrivateRoute";
import FarmerView from "./components/FarmerView";
import UserProfile from "./components/UserProfile";
import CheckOut from "./components/CheckOut";
import UserEdit from "./components/UserEdit";
import Home from "./components/Home";
import Orders from "./components/Orders";

function App() {
  const [loggedInUser, setCurrentLoggedInUser] = useState("");

  useEffect(() => {
    async function checkLoggedIn() {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_HOSTNAME}/isloggedin`,
        { withCredentials: true }
      );
      if (response.data.firstName) {
        setCurrentLoggedInUser(response.data);
      }
    }
    checkLoggedIn();
  }, []);

  return (
    <div className="App">
      <ToastContainer />
      <LoggedUserProvider value={loggedInUser}>
        <NavBar
          loggedInUser={loggedInUser}
          setCurrentLoggedInUser={setCurrentLoggedInUser}
        />
        <Switch>
          <Route path="/home" component={Home} />
          {loggedInUser.isFarmer ? (
            <>
              <Route exact path="/product/add" component={AddItem} />
              <Route exact path="/products" component={ListProducts} />
              {/* <Route 
            path="/products/:id" 
            render= {()=> {
              return <ItemDetails loggedInUser={loggedInUser} />
            }}
          /> */}

              <Route
                exact
                path="/products/:id"
                render={(props) => {
                  return (
                    <ItemDetails
                    {...props} setCurrentLoggedInUser={setCurrentLoggedInUser}
                    />
                  );
                }}
              />
              <Route exact path="/user/:id" component={UserProfile} />
              <Route exact path="/user/:id/edit" component={UserEdit} />
              <Route path="/signup" component={Signup} />
              <Route
                path="/Login"
                render={() => {
                  return (
                    <Login setCurrentLoggedInUser={setCurrentLoggedInUser} />
                  );
                }}
              />
              {/* GOOGLE_LOGIN */}
              <Route
                exact
                path="/login-google"
                render={() => {
                  window.location.href = `${process.env.REACT_APP_SERVER_HOSTNAME}/auth/google`;
                }}
              />
              <Route path="/cart" component={Cart} />
              <Route path="/" />
            </>
          ) : (
            <>
              <Route exact path="/products" component={ListProducts} />
              <Route exact path="/products/add" component={AddItem} />
              {/* <Route 
            path="/products/:id" 
            render= {()=> {
              return <ItemDetails loggedInUser={loggedInUser} />
            }}
          /> */}

              <Route
                exact
                path="/products/:id"
                render={(props) => {
                  return (
                    <ItemDetails
                      {...props} setCurrentLoggedInUser={setCurrentLoggedInUser}
                    />
                  );
                }}
              />
              <Route exact path="/user/:id" component={UserProfile} />
              <Route exact path="/orders" component={Orders} />
              <Route exact path="/products/:id/edit" component={EditProject} />
              <Route path="/signup" component={Signup} />
              <Route
                path="/Login"
                render={() => {
                  return (
                    <Login  setCurrentLoggedInUser={setCurrentLoggedInUser} />
                  );
                }}
              />
              {/* GOOGLE_LOGIN */}
              <Route
                exact
                path="/login-google"
                render={() => {
                  window.location.href = `${process.env.REACT_APP_SERVER_HOSTNAME}/auth/google`;
                }}
              />
              <Route exact path="/cart" component={Cart} />
              <Route path="/cart/checkout" component={CheckOut} />
              <Route path="/" />
            </>
          )}
        </Switch>
      </LoggedUserProvider>
    </div>
  );
}

export default App;
