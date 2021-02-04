import React from "react";
import { Link } from "react-router-dom";

class MemeFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // display: props.display,
      // allMemes: ,
    };
  }

  componentDidMount() {
    this.props.fetchMemes();
  }

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

  render() {
    // const { allMemes } = this.state;

    // let boxCount = [];

    // const boxMemes = allMemes.map((meme) => {
    //   if (meme.box_count <= 2) {
    //     boxCount.push(meme);
    //   }
    // });

    // let randomMemes = this.randomArr(allMemes);

    // const featureMemes = boxCount.map((meme, i) => {
    //   return (
    //     <div className={"meme-box"}>
    //       <div className="multi-button">
    //         <button class="fas fa-heart"></button>
    //       </div>
    //       <Link key={i} to={`/memes/${meme.id}`} >
    //         <img src={meme.url} className={"meme-meme"} />
    //       </Link>
    //     </div>
    //   );
    // });
    // const keys = Object.keys(this.props.allMemes);
    // if (keys.length === 0) {
    //   return null;
    // }
    debugger
    const featureMemes = Object.values(this.props.allMemes).map((meme, i) => {
      // let meme = this.props.allMemes[memeId];
      // meme.img.data.data;
      let src = meme.img;

      return (
        <Link key={i} to={`/memes/${meme._id}`} className={"meme-box"}>
          <img src={src} className={"meme-meme"} />
        </Link>
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
