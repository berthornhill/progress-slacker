import { connect } from "react-redux";
import MemeFeed from "./memefeed";
import { _arrayBufferToBase64 } from "../../util/image_util";
import { fetchMemes } from "../../actions/meme_actions"
import { postLike, removeLike, fetchLikes } from "../../actions/like_actions"

const mSTP = (state, ownProps) => {
  debugger;
  return {
    // array of all 6 memes
    allMemes: state.entities.memes,
    allTags: state.entities.tags,
    currentUser: state.session.user,
    likes: state.entities.likes,
  };
};

const mDTp = (dispatch) => {
  return {
    fetchMemes: () => dispatch(fetchMemes()),
    postLike: (like) => dispatch(postLike(like)),
    removeLike: (likeId) => dispatch(removeLike(likeId)),
    fetchLikes: (userId) => dispatch(fetchLikes(userId)),
  }
};

export default connect(mSTP, mDTp)(MemeFeed);
