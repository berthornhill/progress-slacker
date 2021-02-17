import { connect } from "react-redux";
import UserShow from "./user_show";

import { fetchMemes } from "../../actions/meme_actions";
import { fetchLikes, removeLike } from "../../actions/like_actions";

const mSTP = (state) => {
  return {
    likes: state.entities.likes,
    allMemes: state.entities.memes,
    currentUser: state.session.user,
  };
};

const mDTP = (dispatch) => {
  return {
    fetchLikes: (id) => dispatch(fetchLikes(id)),
    removeLike: (id) => dispatch(removeLike(id)),
    fetchMemes: () => dispatch(fetchMemes()),
  };
};

export default connect(mSTP, mDTP)(UserShow);
