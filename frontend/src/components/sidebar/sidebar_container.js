import { connect } from "recat-redux";
import SideBar from "./sidebar";

const mSTP = (state) => {
  return {
    tagIds: Object.values(state.entities.tags.id), // array of each tag id
    tags: state.entities.tags, // each tag object
  };
};

const mDTP = (dispatch) => {
  return {
    fetchTags: () => dispatch(fetchTags()),
  };
};

export default connect(mSTP, mDTP)(SideBar);
