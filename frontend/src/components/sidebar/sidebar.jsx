import React from "react";
import { Link, Redirect } from "react-router-dom";

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allMemes: [],
    };

    this.featureClick = this.featureClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  featureClick() {
    this.props.fetchTags();
  }

  componentDidMount() {
    // request to backend to return each tag with its specific array imgs of that tag
    // this.props.fetchTags();
    // this.props
  }

  handleClick(tag) {
    // debugger;
    this.props.displayTags(tag);
    // };
    //   //passess array of tagged memes ids to memefeed
  }

  render() {
    const { tags, tagIds } = this.props;

    const displayTags = Object.values(tags).map((tag, i) => {
      debugger;
      return (
        <li key={i} onClick={() => this.handleClick(tag)} tag={tag}>
          <Link to={`/${tag._id}`}>{tag.title}</Link>
        </li>
      );
    });

    return (
      <div className="sidebar">
        <div className="feature-button">
          <i className="fas fa-laugh-squint"></i>
          <Link to="/">Feature</Link>
        </div>
        {/* {tagList} */}
        <div>{displayTags}</div>
      </div>
    );
  }
}

export default SideBar;

//   componentDidMount() {
//     fetch("https://api.imgflip.com/get_memes")
//       .then((response) => response.json())
//       .then((response) => {
//         const { memes } = response.data;
//          ;
//         this.setState({
//           allMemes: memes,
//         });
//       });
//   }

// tags object
// let tagList = tagIds.map((tag, i) => {
// let displayTags;
// let tagList = [
//   "anime",
//   "animals",
//   "sports",
//   "internet",
//   "appAcademy",
//   "10-26",
// ].map((tag, i) => {
//   return (
//     <li key={i} onClick={this.handleClick(tag.id)}>
//       {tag}
//     </li>
//   );
// });
