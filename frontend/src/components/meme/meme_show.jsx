import React from "react";
import { Link, Redirect } from "react-router-dom";

class MemeShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.renderRedirect = this.renderRedirect.bind(this);
  }

  componentDidMount() {
    this.props.fetchMeme(this.props.match.params.id);
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
  };

  handleDelete() {
    this.props.deleteMeme(this.props.match.params.id).then(() => {
      this.setState({ redirect: true });
    });
  }

  render() {
    if (!this.props.meme) return null;

    return (
      <div className="meme-show-outer">
        {this.renderRedirect()}
        <div className="meme-show-inner">
          <div>
            <img
              src={this.props.meme.img}
              className="animate__animated animate__backInDown"
            />
          </div>
        </div>
        <div className="meme-info-holder">
          <Link
            to="/"
            className="far fa-arrow-alt-circle-left"
            onClick={() => this.renderRedirect()}
          ></Link>
          <div className="info-meme">
            <h1>Welcome To Your Meme</h1>
            <ul>
              <li>Click arrow to take out main</li>
              <li>Click on plus to create your own Meme!</li>
            </ul>
            <i className="fas fa-trash-alt"></i>
            <button
              onClick={() => this.handleDelete()}
              className="delete-button-show"
            >
              DELETE
            </button>
          </div>
          <Link to="/creatememes" className="far fa-plus-square"></Link>
        </div>
      </div>
    );
  }
}

export default MemeShow;
