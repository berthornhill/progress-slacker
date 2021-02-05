import { DISPLAY_TAGS } from "../actions/display_actions";
import { FETCH_MEMES } from "../actions/meme_actions";

const DisplayReducer = (state = [], action) => {
  // debugger;
  Object.freeze(state);
  const { payload } = action;
  switch (action.type) {
    case FETCH_MEMES:
      let newerState = [];
      payload.data.forEach((meme) => {
        newerState.push(meme._id);
      });
      return newerState;
    case DISPLAY_TAGS:
      let newState = [];
      payload.memes.forEach((memeId) => {
        newState.push(memeId);
      });
      return newState;
    default:
      return state;
  }
};

export default DisplayReducer;
