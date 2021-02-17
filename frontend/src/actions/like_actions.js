import axios from "axios";
import * as APIUtil from "../util/meme_api_util";

export const RECEIVE_LIKES = "RECEIVE_LIKES";

const receiveLikes = (payload) => {
  debugger;
  return {
    type: RECEIVE_LIKES,
    payload,
  };
};

//like == userid, memeid
export const postLike = (like) => {
  return (dispatch) => {
    debugger;
    return APIUtil.postLike(like).then((likes) => {
      debugger;
      return dispatch(receiveLikes(likes));
    });
  };
};

export const removeLike = (likeId) => {
  return (dispatch) => {
    debugger;
    return APIUtil.removeLike(likeId).then((likes) => {
      debugger;
      return dispatch(receiveLikes(likes));
    });
  };
};

export const fetchLikes = (userId) => {
  return (dispatch) => {
    debugger;
    return APIUtil.fetchLikes(userId).then((likes) => {
      debugger;
      return dispatch(receiveLikes(likes));
    });
  };
};
