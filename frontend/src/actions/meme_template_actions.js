// Create Meme
// Fetch Meme - get meme from url id
// Delete meme

import {
  getMeme,
  getMemes,
  createMemeTemplate,
  deleteMemeFromDb,
} from "../util/meme_api_util";

// catch typos section
export const FETCH_MEME = "FETCH_MEME";
export const FETCH_MEMES = "FETCH_MEMES";
export const CREATE_MEME_TEMPLATE = "CREATE_MEME_TEMPLATE";
export const DELETE_MEME = "DELETE_MEME";

// reg actions to reducer
export const postMeme = (memeTemplate) => {
  return {
    type: CREATE_MEME_TEMPLATE,
    memeTemplate,
  };
};

export const receiveMeme = (meme) => {
  return {
    type: FETCH_MEME,
    meme,
  };
};

export const receiveMemes = (memes) => {
  return {
    type: FETCH_MEMES,
    memes,
  };
};

export const removeMeme = (memeId) => {
  return {
    type: DELETE_MEME,
    memeId,
  };
};

// thunk actions to backend API
export const fetchMemes = () => {
  return (dispatch) => {
    return getMemes().then((memes) => {
      return dispatch(receiveMemes(memes)).catch((err) => console.log(err));
    });
  };
};

export const fetchMeme = (memeId) => {
  return (dispatch) => {
    return getMeme(memeId).then((meme) => {
      return dispatch(receiveMeme).catch((err) => console.log(err));
    });
  };
};

export const createMeme = (meme) => {
  return (dispatch) => {
    return createMemeTemplate(meme).then((meme) => {
      return dispatch(postMeme(meme)).catch((err) => console.log(err));
    });
  };
};

export const deleteMeme = (memeId) => {
  return (dispatch) => {
    return deleteMemeFromDb(memeId).then((meme) => {
      return dispatch(removeMeme(meme.id)).catch((err) => console.log(err));
    });
  };
};
