import {
  FETCH_TEMPLATE,
  FETCH_TEMPLATES,
  CREATE_TEMPLATE,
  DELETE_TEMPLATE,
} from "../actions/template_actions";

const TemplatesReducer = (state = {}, action) => {
  Object.freeze(state);
  debugger;
  const { payload } = action;

  switch (action.type) {
    case FETCH_TEMPLATES:
      return Object.assign({}, state, payload.data);
    case FETCH_TEMPLATE:
      debugger;
      return Object.assign({}, state, {
        [payload.data._id]: payload.data.img,
      });
    case DELETE_TEMPLATE:
      const newState = Object.assign({}, state);
      delete newState[payload.data.templateId];
      return newState;
    default:
      return state;
  }
};

export default TemplatesReducer;
