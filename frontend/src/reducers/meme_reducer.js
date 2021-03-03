import {
  FETCH_MEME,
  FETCH_MEMES,
  CREATE_MEME,
  DELETE_MEME,
} from "../actions/meme_actions";

const MemesReducer = (state = {}, action) => {
  Object.freeze(state);
  const { payload } = action;

  debugger
  
  switch (action.type) {
    case FETCH_MEMES:
      let newerState = {};
      payload.data.forEach((meme) => {
        newerState[meme._id] = meme;
      });
      // return Object.assign({}, state, payload.data);
      return newerState;
    case FETCH_MEME:
      //  ;
      // return Object.assign({}, state, {
      //   [payload.data._id]: payload.data.img.data,
      // });
      return Object.assign({}, state, {
        [payload.data._id]: payload.data,
        // [payload.data._id]: payload.data.img,
      });
    // case DELETE_MEME:
    //   const newState = Object.assign({}, state);
    //   delete newState[payload.data.memeId];
    //   return newState;
    default:
      return state;
  }
};

export default MemesReducer;
