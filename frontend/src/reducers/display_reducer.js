import { DISPLAY_AA_TEMPS, DISPLAY_TAGS } from "../actions/display_actions";
import { FETCH_MEMES } from "../actions/meme_actions";
import { FETCH_TEMPLATE } from "../actions/template_actions";

const DisplayReducer = (state = {}, action) => {
  // debugger;
  Object.freeze(state);
  const { payload } = action;
  debugger;
  switch (action.type) {
    case FETCH_MEMES:
      let newerState = [];
      payload.data.forEach((meme) => {
        newerState.push(meme._id);
      });
      let features = { features: newerState, display: [] };
      let retState = Object.assign({}, features);
      return retState;
    case DISPLAY_TAGS:
      let newState = [];
      payload.memes.forEach((memeId) => {
        newState.push(memeId);
      });
      let tag = { display: newState };
      return Object.assign({}, state, tag);
      return newState;
    case DISPLAY_AA_TEMPS:
      debugger;
      let aaTemp = [];

    default:
      return state;
  }
};

export default DisplayReducer;
