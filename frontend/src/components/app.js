import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";
import { Route, Redirect, withRouter } from "react-router-dom";
import NavBarContainer from "./nav/navbar_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import MemeCanvas from "./meme_gen/meme_canvas";
import Dashboard from "./dashboard/dashboard";
import CreateMemeContainer from "./meme/meme_template_container";

const App = () => (
  // <div>dashboard</div>
  <div>
    <Switch>
      {/* <Route path="/" component={MemeCanvas} /> */}
      <Route exact path="/" component={Dashboard} />
      <AuthRoute exact path="/creatememes" component={MemeCanvas} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />

      <ProtectedRoute exact path="/create" component={CreateMemeContainer} />
    </Switch>
  </div>
);

// import { Route } from "react-router-dom";
// import Dashboard from "./dashboard/dashboard_container";

// const App = () => (
//     <Switch>
//       <Route exact path="/" component={Dashboard} />
//     </Switch>
// );

export default App;
