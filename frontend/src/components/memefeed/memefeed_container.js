import { connect } from "react-redux";
import MemeFeed from "./memefeed";
import { _arrayBufferToBase64 } from "../../util/image_util";
import { fetchMemes } from "../../actions/meme_actions";

const mSTP = (state, ownProps) => {
  return {
    // array of all 6 memes
    allMemes: state.entities.memes,
    // display is the array of memes to render
    // display: ownProps.params.match.display,
    // display: [],
  };
};

const mDTp = (dispatch) => {
  return {
    fetchMemes: () => dispatch(fetchMemes()),
    _arrayBufferToBase64,
  };
};

export default connect(mSTP, mDTp)(MemeFeed);
