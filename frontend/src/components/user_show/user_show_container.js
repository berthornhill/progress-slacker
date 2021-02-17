import { connect } from "react-redux";
import UserShow from "./user_show";

import { fetchLikes } from "../../actions/like_actions";

const mSTP = (state) => {
  return {
    likes: state.entities.likes,
    allMemes: state.entities.memes,
  };
};
