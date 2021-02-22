import React from "react";
import { Link } from "react-router-dom";

class MemeFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // display: props.display,
      // allMemes: ,
    };

    this.handleLike = this.handleLike.bind(this);
  }

  componentDidMount() {
    const userId = this.props.currentUser.id;
    debugger;
    this.props.fetchMemes();

    if (userId) {
      this.props.fetchLikes(userId);
    }
  }

  handleLike(id) {
    const { likes, currentUser, postLike, removeLike } = this.props;

    return (e) => {
      e.preventDefault();
      debugger;

      if (currentUser.id) {
        if (likes.includes(id)) {
          debugger;

          removeLike({
            id: currentUser.id,
            meme: id,
          });
        } else {
          postLike({
            // handle: this.props.currentUser.handle,
            id: currentUser.id,
            meme: id,
          });
        }
      }
    };
    // this.props.currentUser
  }

  render() {
    debugger;
    const allMemes = this.props.allMemes;
    let tagsArr = this.props.allTags[this.props.match.params.id];
    let display2;

    if (tagsArr) {
      display2 = tagsArr.memes;
    } else {
      display2 = Object.keys(allMemes);
    }

    // all memes
    if (!display2) {
      return null;
    }
    debugger;
    const featureMemes = display2.map((id, i) => {
      let src = allMemes[id].img;
      debugger;
      let classTags;

      if (this.props.likes[0] && this.props.likes.includes(id)) {
        classTags = "fas fa-heart liked";
      } else {
        classTags = "fas fa-heart";
      }

      debugger;
      return (
        <div key={i} className={"meme-box"}>
          <div className="multi-button">
            <button
              className={classTags}
              onClick={this.handleLike(id)}
            ></button>
          </div>
          <Link to={`/memes/${id}`}>
            <img src={src} className={"meme-meme"} />
          </Link>
        </div>
      );
    });

    return (
      <div className="meme-content">
        <h1 className="catalog-header">Featured Memes</h1>
        <br />
        {featureMemes}
      </div>
    );
  }
}

export default MemeFeed;

//   componentDidMount() {
// fetch("https://api.imgflip.com/get_memes")
//   .then((response) => response.json())
//   .then((response) => {
//     const { memes } = response.data;
//      ;
//     this.setState({
//       allMemes: memes,
//     });
//   });
// }
//     randomArr(arr) {
//     for (var i = arr.length - 1; i > 0; i--) {
//       let randomNum = Math.floor(Math.random() * (i + 1));
//       [arr[i], arr[randomNum]] = [arr[randomNum], arr[i]];
//     }

//     return arr;
//   }
