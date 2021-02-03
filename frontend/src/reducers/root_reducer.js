import { combineReducers } from "redux";
import session from "./session_reducer";
import errors from "./errors_reducer";
import meme from "./meme_reducer";

const RootReducer = combineReducers({
  session,
  meme,
  errors,
});

export default RootReducer;
