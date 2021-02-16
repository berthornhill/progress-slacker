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
    this.props.fetchMemes();
  }

  handleLike(id) {
    debugger;
    return (e) => {
      e.preventDefault();
      debugger;
      this.props.postLike({
        handle: this.props.currentUser.handle,
        meme: id,
      })
      console.log(id);
      console.log("inside Handle like");
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
      return (
        <div className={"meme-box"}>
          <div className="multi-button">
            <button class="fas fa-heart" onClick={this.handleLike(id)}></button>
          </div>
          <Link key={i} to={`/memes/${id}`}>
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
