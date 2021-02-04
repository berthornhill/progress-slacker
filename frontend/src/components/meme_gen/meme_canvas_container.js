import { connect } from "react-redux";
import { fetchMeme, postMeme } from "../../actions/meme_actions";
import MemeCanvas from "./meme_canvas";
import { _arrayBufferToBase64 } from "../../util/image_util";

const mSTP = (state) => {
  debugger;
  return {
    memes: state.entities.memes,
  };
};

const mDTP = (dispatch) => {
  return {
    postMeme: (imgURL) => dispatch(postMeme(imgURL)),
    fetchMeme: (id) => dispatch(fetchMeme(id)),
    _arrayBufferToBase64,
  };
};

export default connect(mSTP, mDTP)(MemeCanvas);
