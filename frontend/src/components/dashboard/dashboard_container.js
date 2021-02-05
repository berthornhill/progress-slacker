import { connect } from "react-redux";
import DashBoard from "./dashboard";
import { fetchTags } from "../../actions/tag_actions";

const mSTP = (state, ownProps) => {
  return {
    toDisplay: state.entities.tags,
  };
};

const mDTP = (dispatch) => {
  return {
    fetchTags: () => dispatch(fetchTags()),
  };
};

export default connect(mSTP, mDTP)(DashBoard);
