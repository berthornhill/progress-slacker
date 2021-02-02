import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";
import { Route, Redirect, withRouter } from "react-router-dom";
import NavBarContainer from "./nav/navbar_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import MemeCanvas from "./meme_gen/meme_canvas";
import Dashboard from "./dashboard/dashboard";

const App = () => (
  // <div>dashboard</div>
  <div>
    <NavBarContainer />
    <Switch>
      <Route path="/" component={MemeCanvas} />
      <Route exact path="/" component={Dashboard} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>
  </div>
);

export default App;
