import { RECEIVE_LIKES } from "../actions/like_actions";
import {
  RECEIVE_CURRENT_USER,
  RECEIVE_USER_LOGOUT,
} from "../actions/session_actions";

const LikesReducer = (state = [], action) => {
  Object.freeze(state);
  // ;

  switch (action.type) {
    case RECEIVE_LIKES:
      // ;
      return action.payload.data;
    case RECEIVE_CURRENT_USER:
      // ;
      return action.currentUser.likes;
    case RECEIVE_USER_LOGOUT:
      return [];
    default:
      return state;
  }
};

export default LikesReducer;
