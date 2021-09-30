import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { LoggedUserConsumer } from "../context/loggedUser";

function PrivateRoute({ component, ...options }) {
  const loggedInUser = useContext(LoggedUserConsumer);
  return loggedInUser ? (
    <Route {...options} component={component} />
  ) : (
    <Redirect to="/login" />
  );
}

export default PrivateRoute;