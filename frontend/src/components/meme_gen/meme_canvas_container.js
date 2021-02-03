import { connect } from "react-redux";
import { fetchMeme } from "../../actions/meme_template_actions";
import MemeCanvas from "./meme_canvas";

const mSTP = (state) => {
  return {
    fetchedMeme: "",
  };
};

const mDTP = (dispatch) => {
  return {
    fetchMeme: (id) => dispatch(fetchMeme(id)),
  };
};

export default connect(mSTP, mDTP)(MemeCanvas);
