import { connect } from "react-redux";
import { fetchMeme, postMeme } from "../../actions/meme_actions";
import MemeCanvas from "./meme_canvas";
import { _arrayBufferToBase64 } from "../../util/image_util";
import { fetchTemplate, fetchTemplates } from "../../actions/template_actions";
import { displayAATemps } from "../../actions/display_actions";

const mSTP = (state) => {
  debugger;
  return {
    memes: state.entities.templates,
    templates: state.entities.templates,
    tags: state.entities.tags,
  };
};

const mDTP = (dispatch) => {
  return {
    fetchTemplate: (id) => dispatch(fetchTemplate(id)),
    postMeme: (imgURL) => dispatch(postMeme(imgURL)),
    fetchMeme: (id) => dispatch(fetchMeme(id)),
    fetchTemplates: () => dispatch(fetchTemplates()),
    displayAATemps: (payload) => dispatch(displayAATemps(payload)),
  };
};

export default connect(mSTP, mDTP)(MemeCanvas);
