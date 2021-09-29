import { Switch, Route } from "react-router-dom";
import "./App.css";
import AddProject from "./components/AddProject";
import EditProject from "./components/EditProject";
import ListProjects from "./components/ListProjects";
import ProjectDetails from "./components/ProjectDetails";
import NavBar from "./components/NavBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [loggedInUser, setCurrentLoggedInUser] = useState("");

  useEffect(() => {
    async function checkLoggedIn() {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_HOSTNAME}/isloggedin`,
        { withCredentials: true }
      );
      if (response.data.username) {
        setCurrentLoggedInUser(response.data);
      }
    }
    checkLoggedIn();
  }, []);

  return (
    <div className="App">
      <ToastContainer />
      <NavBar loggedInUser={loggedInUser} setCurrentLoggedInUser={setCurrentLoggedInUser} />
      <Switch>
        <Route exact path={["/", "/projects"]} component={ListProjects} />
        <Route exact path="/projects/add" component={AddProject} />
        <Route exact path="/projects/:id" component={ProjectDetails} />
        <Route path="/projects/:id/edit" component={EditProject} />
        <Route path="/signup" component={Signup} />
        <Route
          path="/Login"
          render={() => {
            return <Login setCurrentLoggedInUser={setCurrentLoggedInUser} />;
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
