import { connect } from "react-redux";
import SideBar from "./sidebar";
import { fetchTags } from "../../actions/tag_actions";

const mSTP = (state) => {
  debugger;
  return {
    // tagIds: Object.values(state.entities.tags.id), // array of each tag id
    tags: state.entities.tags, // each tag object
  };
};

const mDTP = (dispatch) => {
  debugger;
  return {
    fetchTags: () => dispatch(fetchTags()),
  };
};

export default connect(mSTP, mDTP)(SideBar);
