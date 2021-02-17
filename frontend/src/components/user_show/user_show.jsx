import React from "react";
import { Link } from "react-router-dom";

class UserShow extends React.Component {
  constructor(props) {
    super(props);

    this.handleUnLike = this.handleUnLike.bind(this);
  }

  componentDidMount() {
    if (!this.props.likes[0]) {
      this.props.fetchLikes(this.props.currentUser.id);
    }
  }

  handleUnLike(id) {
    let { removeLike, currentUser } = this.props;

    return (e) => {
      e.preventDefault();

      removeLike({ id, currentUser });
    };
  }

  render() {
    const { allMemes, likes } = this.props;
    let display2;
    if (!likes[0]) return null;

    debugger;
    const likedMemes = likes.map((id, i) => {
      let src = allMemes[id].img;
      debugger;
      let classTags = "fas fa-heart liked";

      return (
        <div className={"meme-box"}>
          <div className="multi-button">
            <button
              className={classTags}
              onClick={this.handleUnLike(id)}
            ></button>
          </div>
          <Link key={i} to={`/memes/${id}`}>
            <img src={src} className={"meme-meme"} />
          </Link>
        </div>
      );
    });

    return (
      <div className="outer-show">
        <div className="inner-show">
          <div className="memes-containers">{likedMemes}</div>
        </div>
      </div>
    );
  }
}

export default UserShow;
