import {
  FETCH_MEME,
  FETCH_MEMES,
  CREATE_MEME_TEMPLATE,
  DELETE_MEME,
} from "../actions/meme_template_actions";

const MemesReducer = (state = {}, action) => {
  Object.freeze(state);
  const { meme, memes, memeId } = action;
  debugger
  switch (action.type) {
    case FETCH_MEMES:
      return Object.assign({}, state, action.memes.data);
    case FETCH_MEME:
      //  ;
      return Object.assign({}, state, { [meme.data._id]: meme.data.img.data });
    case DELETE_MEME:
      const newState = Object.assign({}, state);
      delete newState[memeId];
      return newState;
    default:
      return state;
  }
};

export default MemesReducer;
