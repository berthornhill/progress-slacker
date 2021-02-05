import {
  FETCH_TAG,
  FETCH_TAGS,
  CREATE_TAG,
  DELETE_TAG,
} from "../actions/tag_actions";

const TagsReducer = (state = {}, action) => {
  Object.freeze(state);
  debugger;
  const { payload } = action;

  switch (action.type) {
    case FETCH_TAGS:
      let newerState = {};
      payload.data.forEach((tag) => {
        newerState[tag._id] = tag;
      });
      // return Object.assign({}, state, payload.data);
      return newerState;
    case FETCH_TAG:
      //  ;
      return Object.assign({}, state, {
        [payload.data._id]: payload.data.img.data,
      });
    case DELETE_TAG:
      const newState = Object.assign({}, state);
      delete newState[payload.data.tagId];
      return newState;
    default:
      return state;
  }
};

export default TagsReducer;
