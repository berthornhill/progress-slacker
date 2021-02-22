import { RECEIVE_LIKES } from "../actions/like_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

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
    default:
      return state;
  }
};

export default LikesReducer;
