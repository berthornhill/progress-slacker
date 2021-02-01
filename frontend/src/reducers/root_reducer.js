import { combineReducers } from "redux";
import session from "./session_reducer";

const RootReducer = combineReducers({
  session: session,
});

export default RootReducer;
