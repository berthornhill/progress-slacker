import axios from "axios";
import * as APIUtil from "../util/meme_api_util";

export const RECEIVE_LIKES = "RECEIVE_LIKES";

const receiveLikes = (payload) => {
  return {
    type: RECEIVE_LIKES,
    payload,
  };
};

//like == userid, memeid
export const postLike = (like) => {
  return (dispatch) => {
    return APIUtil.postLike(like).then((likes) => {
      return dispatch(receiveLikes(likes));
    });
  };
};

export const removeLike = (likeId) => {
  return (dispatch) => {
    return APIUtil.removeLike(likeId).then((likes) => {
      return dispatch(receiveLikes(likes));
    });
  };
};

export const fetchLikes = (userId) => {
  return (dispatch) => {
    return APIUtil.fetchLikes(userId).then((likes) => {
      return dispatch(receiveLikes(likes));
    });
  };
};
