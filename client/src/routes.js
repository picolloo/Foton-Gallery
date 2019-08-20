import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Home from "./components/Home";
import Post from "./components/Post";
import Login from "./components/SignIn";
import Profile from "./components/Profile";
import Register from "./components/SignUp";
import ErrorPage from "./components/ErrorPage";
import { isAuthentiated } from "./services/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      isAuthentiated() ? <Component {...props} /> : <Redirect />;
    }}
  />
);

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute path="/" exact component={Home} />
        <Route path="/signin" component={Login} />
        <PrivateRoute path="/profile" component={Profile} />
        <Route path="/signup" component={Register} />
        <PrivateRoute path="/:id" component={Post} />
        <Route path="*" component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
