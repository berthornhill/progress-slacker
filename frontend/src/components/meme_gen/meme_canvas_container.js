import { connect } from "react-redux";
import { fetchMeme } from "../../actions/meme_template_actions";
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
    fetchMeme: (id) => dispatch(fetchMeme(id)),
    _arrayBufferToBase64,
  };
};

export default connect(mSTP, mDTP)(MemeCanvas);
