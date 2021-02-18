import { RECEIVE_LIKES } from "../actions/like_actions";
import {
  RECEIVE_CURRENT_USER,
  RECEIVE_USER_LOGOUT,
} from "../actions/session_actions"

const LikesReducer = (state = [], action) => {
  Object.freeze(state);
  // debugger;

  switch (action.type) {
    case RECEIVE_LIKES:
      // debugger;
      return action.payload.data
    case RECEIVE_CURRENT_USER:
      // debugger;
      return action.currentUser.likes
    case RECEIVE_USER_LOGOUT:
      return []
    default:
      return state
  }
};

export default LikesReducer;
