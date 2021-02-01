import jwt_decode from "jwt-decode";
import * as APIUtil from "../util/session_api_util";

export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";

export const logoutUser = () => {
  return {
    type: RECEIVE_USER_LOGOUT,
  };
};

export const logout = () => {
  return (disptach) => {
    localStorage.removeItem("jwtToken");
    APIUtil.setAuthToken(false);
    return dispatch(logoutUser());
  };
};
