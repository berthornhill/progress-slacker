import React from "react";
import { Redirect } from "react-router-dom";

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
    debugger;
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
    debugger;

    if (!this.props.meme) return null;

    debugger;
    return (
      <div className="meme-show-outer">
        {this.renderRedirect()}
        <div className="meme-show-inner">
          <div>
            <img src={this.props.meme} className="meme-show-image" />
          </div>
          <div>
            <button onClick={() => this.handleDelete()}>DELETE</button>
          </div>
        </div>
      </div>
    );
  }
}

export default MemeShow;
