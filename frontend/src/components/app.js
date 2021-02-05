import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";
import { Route, Redirect, withRouter } from "react-router-dom";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import MemeCanvas from "./meme_gen/meme_canvas_container";
import Dashboard from "./dashboard/dashboard";
// import CreateMemeContainer from "./meme/meme_template_container";
import Navbar from "./navbar/navbar_container";
import FileUpload from "./file_upload/file_upload";
import MemeShow from "./meme/meme_show_container";

const App = () => (
  // <div>dashboard</div>
  <div className="entire-window">
    <Navbar />

    <div>
      <Switch>
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <Route path="/memes/:id" component={MemeShow} />
        <ProtectedRoute path="/creatememes" component={MemeCanvas} />
        <ProtectedRoute path="/template" component={FileUpload} />
        <Route path="/" component={Dashboard} />

        {/* <ProtectedRoute exact path="/create" component={CreateMemeContainer} /> */}
      </Switch>
    </div>
  </div>
);

// import { Route } from "react-router-dom";
// import Dashboard from "./dashboard/dashboard_container";

// const App = () => (
//   <AuthRoute exact path="/template-create" component={FileUpload} />
// );

export default App;
