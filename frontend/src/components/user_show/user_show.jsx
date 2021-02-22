import React from "react";
import { Link, Redirect } from "react-router-dom";

class UserShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { redirect: false };

    this.handleUnLike = this.handleUnLike.bind(this);
    this.renderRedirect = this.renderRedirect.bind(this);
    this.handleRedirect = this.handleRedirect.bind(this);
  }

  componentDidMount() {
    this.props.fetchMemes();
    this.props.fetchLikes(this.props.currentUser.id);
  }

  handleUnLike(id) {
    let { removeLike, currentUser } = this.props;

    return (e) => {
      e.preventDefault();

      removeLike({ id, currentUser });
    };
  }

  handleRedirect() {
    this.setState({ redirect: true });
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
  };

  render() {
    const { allMemes, likes } = this.props;
    // const { likes } = this.state;
    let display2;

    if (Object.keys(allMemes).length === 0) return null;

    const likedMemes = likes.map((id, i) => {
      let src = allMemes[id].img;
      let classTags = "fas fa-heart liked";

      return (
        <div key={i} className={"meme-box"}>
          <div className="multi-button">
            <button
              className={classTags}
              onClick={this.handleUnLike(id)}
            ></button>
          </div>
          <Link to={`/memes/${id}`}>
            <img src={src} className={"meme-meme"} />
          </Link>
        </div>
      );
    });

    return (
      <div id="outer-show">
        {this.renderRedirect()}
        <div id="inner-show">
          <div id="memes-container">{likedMemes}</div>
          <div id="btf-container">
            <button
              className="logout-button"
              id="back-to-feed"
              onClick={() => this.handleRedirect()}
              //   onClick={<Redirect to="/" />}
            >
              Return to Feed
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default UserShow;
