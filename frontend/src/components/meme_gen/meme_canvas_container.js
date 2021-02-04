import { connect } from "react-redux";
import { fetchMeme, postMeme } from "../../actions/meme_actions";
import MemeCanvas from "./meme_canvas";
import { _arrayBufferToBase64 } from "../../util/image_util";
import { fetchTemplate } from "../../actions/template_actions";

const mSTP = (state) => {
  debugger;
  return {
    memes: state.entities.templates,
  };
};

const mDTP = (dispatch) => {
  return {
    fetchTemplate: (id) => dispatch(fetchTemplate(id)),
    postMeme: (imgURL) => dispatch(postMeme(imgURL)),
    fetchMeme: (id) => dispatch(fetchMeme(id)),
  };
};

export default connect(mSTP, mDTP)(MemeCanvas);
