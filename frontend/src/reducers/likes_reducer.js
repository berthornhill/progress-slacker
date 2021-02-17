import { RECEIVE_LIKES } from "../actions/meme_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const LikesReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_LIKES:
      debugger;
      return action.payload.data;
    case RECEIVE_CURRENT_USER:
      debugger;
      return action.currentUser.likes;
    default:
      return state;
  }
};

export default LikesReducer;
