import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";
import { Route, Redirect, withRouter } from "react-router-dom";
import MemeCanvas from "./meme_gen/meme_canvas";

// import Dashboard from "./dashboard";

const App = () => (
  <div>
    dashboard
    <MemeCanvas />
  </div>

  //   <Switch>
  //     <Route exact path="/" component={Dashboard} />
  //   </Switch>
);

export default App;
