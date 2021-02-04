// Create Meme
// Fetch Meme - get meme from url id
// Delete meme

import * as APIUtil from "../util/meme_api_util";

// catch typos section
export const FETCH_MEME = "FETCH_MEME";
export const FETCH_MEMES = "FETCH_MEMES";
export const CREATE_MEME = "CREATE_MEME";
export const DELETE_MEME = "DELETE_MEME";

// reg actions to reducer
const createMeme = (payload) => {
  return {
    type: CREATE_MEME,
    payload,
  };
};

<<<<<<< HEAD:frontend/src/actions/meme_template_actions.js
export const receiveMeme = (meme) => {
  debugger
=======
const receiveMeme = (payload) => {
>>>>>>> 62d7a93fae10cffb4774bd2bcc23074277310b60:frontend/src/actions/meme_actions.js
  return {
    type: FETCH_MEME,
    payload,
  };
};

const receiveMemes = (payload) => {
  return {
    type: FETCH_MEMES,
    payload,
  };
};

const removeMeme = (payload) => {
  return {
    type: DELETE_MEME,
    payload,
  };
};

// thunk actions to backend API
export const fetchMemes = () => {
  return (dispatch) => {
    return APIUtil.getMemes().then((memes) => {
      return dispatch(receiveMemes(memes));
      // .catch((err) => console.log(err));
    });
  };
};

export const fetchMeme = (memeId) => {
  debugger
  return (dispatch) => {
<<<<<<< HEAD:frontend/src/actions/meme_template_actions.js
    debugger
    return getMeme(memeId).then((meme) => {
      debugger
=======
    return APIUtil.getMeme(memeId).then((meme) => {
>>>>>>> 62d7a93fae10cffb4774bd2bcc23074277310b60:frontend/src/actions/meme_actions.js
      return dispatch(receiveMeme(meme));
      // .catch((err) => console.log(err));
    });
  };
};

export const postMeme = (meme) => {
  return (dispatch) => {
    return APIUtil.createMeme(meme).then((meme) => {
      return dispatch(createMeme(meme)).catch((err) => console.log(err));
    });
  };
};

export const deleteMeme = (memeId) => {
  return (dispatch) => {
    return APIUtil.deleteMemeFromDb(memeId).then((meme) => {
      return dispatch(removeMeme(meme.id)).catch((err) => console.log(err));
    });
  };
};
