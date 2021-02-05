import { connect } from "react-redux";
import MemeFeed from "./memefeed";
import { _arrayBufferToBase64 } from "../../util/image_util";
import { fetchMemes } from "../../actions/meme_actions";

const mSTP = (state, ownProps) => {
  return {
    // array of all 6 memes
    allMemes: state.entities.memes,
    allTags: state.entities.tags,
    // display is the array of memes to render
    // display: ownProps.params.match.display,
    // display: [],
  };
};

const mDTp = (dispatch) => {
  return {
    fetchMemes: () => dispatch(fetchMemes()),
  };
};

export default connect(mSTP, mDTp)(MemeFeed);
