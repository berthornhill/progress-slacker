import * as APIUtil from "../util/tag_api_util";

// catch typos section
export const FETCH_TAG = "FETCH_TAG";
export const FETCH_TAGS = "FETCH_TAGS";
export const CREATE_TAG = "CREATE_TAG";
export const DELETE_TAG = "DELETE_TAG";

// reg actions to reducer
const createTag = (payload) => {
  return {
    type: CREATE_TAG,
    payload,
  };
};

const receiveTag = (payload) => {
  return {
    type: FETCH_TAG,
    payload,
  };
};

const receiveTags = (payload) => {
  return {
    type: FETCH_TAGS,
    payload,
  };
};

const removeTag = (payload) => {
  return {
    type: DELETE_TAG,
    payload,
  };
};

// thunk actions to backend API
export const fetchTags = () => {
  return (dispatch) => {
    return APIUtil.getTags().then((tags) => {
      return dispatch(receiveTags(tags));
      // .catch((err) => console.log(err));
    });
  };
};

export const fetchTag = (tagId) => {
  return (dispatch) => {
    return APIUtil.getTag(tagId).then((tag) => {
      return dispatch(receiveTag(tag));
      // .catch((err) => console.log(err));
    });
  };
};

export const postTag = (tag) => {
  return (dispatch) => {
    return APIUtil.createTag(tag).then((tag) => {
      return dispatch(createTag(tag));
      //   .catch((err) => console.log(err));
    });
  };
};

export const deleteTag = (tagId) => {
  return (dispatch) => {
    return APIUtil.deleteTagFromDb(tagId).then((tag) => {
      return dispatch(removeTag(tag.id)).catch((err) => console.log(err));
    });
  };
};
