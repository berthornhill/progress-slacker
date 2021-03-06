import { connect } from "react-redux";
import SideBar from "./sidebar";
import { fetchTags } from "../../actions/tag_actions";
import { displayTags } from "../../actions/display_actions";

const mSTP = (state) => {
  // ;
  return {
    // tagIds: Object.values(state.entities.tags.id), // array of each tag id
    tags: state.entities.tags, // each tag object
  };
};

const mDTP = (dispatch) => {
  // ;
  return {
    fetchTags: () => dispatch(fetchTags()),
    displayTags: (tag) => dispatch(displayTags(tag)),
  };
};

export default connect(mSTP, mDTP)(SideBar);
