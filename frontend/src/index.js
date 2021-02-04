import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import jwt_decode from "jwt-decode";
import Root from "./components/root";
import { setAuthToken } from "./util/session_api_util";
import { logout } from "./actions/session_actions";
import { fetchTemplates } from "./actions/template_actions";
import { fetchTags } from "./actions/tag_actions";

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decodedUser = jwt_decode(localStorage.jwtToken);
    const preloadedState = {
      session: { isAuthenticated: true, user: decodedUser },
    };
    store = configureStore(preloadedState);

    const currentTime = Date.now() / 1000;

    if (decodedUser.exp < currentTime) {
      store.dispatch(logout());
      window.location.href = "/login";
    }
  } else {
    store = configureStore({});
  }

  // TESTING
  window.getTemplates = fetchTemplates;
  window.getTags = fetchTags;
  window.dispatch = store.dispatch;
  window.getState = store.getState;

  // END TESTING

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});
