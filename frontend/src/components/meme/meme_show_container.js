import { connect } from "react-redux";
import { deleteMeme, fetchMeme } from "../../actions/meme_actions";
import MemeShow from "./meme_show";

const mSTP = (state, ownProps) => {
  return {
    meme: state.entities.memes[ownProps.match.params.id],
  };
};

const mDTP = (dispatch) => {
  return {
    deleteMeme: (id) => dispatch(deleteMeme(id)),
    fetchMeme: (id) => dispatch(fetchMeme(id)),
  };
};

export default connect(mSTP, mDTP)(MemeShow);
