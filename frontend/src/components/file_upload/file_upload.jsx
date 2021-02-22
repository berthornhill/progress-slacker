import React from "react";
// import axios from "axios";
import { postTemplate } from "../../actions/template_actions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import MemeCanvas from "../meme_gen/meme_canvas_container";

class FileUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      picFile: null,
      previewUrl: "img/logo2.png",
      category: "app",
      title: "",
      redirect: false,
    };
    this.handleFileSelect = this.handleFileSelect.bind(this);
    this.handleFileUpload = this.handleFileUpload.bind(this);
    this.updateValue = this.updateValue.bind(this);
    this.renderRedirect = this.renderRedirect.bind(this);

    this.canvasRef = null;
    this.imageRef = null;
    this.errorRef = React.createRef();

    //function to set CanvasRef to the element using reference callback
    this.setCanvasRef = (element) => {
      this.canvasRef = element;
    };

    this.setImageRef = (element) => {
      this.imageRef = element;
    };
  }

  updateValue(value) {
    return (e) => {
      e.preventDefault();
      this.setState({ [value]: e.target.value });
    };
  }

  render() {
    const imgStyle = {
      display: "none",
    };

    if (this.canvasRef) {
      const canvas = this.canvasRef;
      const image = this.imageRef;
      let ctx = this.canvasRef.getContext("2d");
      ctx.drawImage(
        image,
        0,
        0,
        image.width,
        image.height, // source rectangle
        0,
        0,
        canvas.width,
        canvas.height
      );
    }

    return (
      <div className="file-upload">
        <div>
          {this.renderRedirect()}

          <canvas
            ref={this.setCanvasRef}
            width={500}
            height={500}
            className="meme-pic2"
          />
          <img
            src={this.state.previewUrl}
            alt="grumpy cat"
            style={imgStyle}
            ref={this.setImageRef}
            crossOrigin="anonymous"
          />
          <br />
          <div className="file-load-container">
            <input
              className="file-input"
              name="file-input"
              id="file-input"
              type="file"
              onChange={this.handleFileSelect}
            />
            <label htmlFor="file-input">Upload image</label>
            <br />
            <br />
            <br />
            <label className="select-tag">
              Select a tag
              <br />
              <select
                onChange={this.updateValue("category")}
                className="tag-drop"
              >
                <option value="app">App Academy</option>
                <option value="animals">Animals</option>
                <option value="anime">Anime</option>
                <option value="gaming">Gaming</option>
                <option value="tv">Tv Shows</option>
                <option value="movies">Movies</option>
                <option value="politics">Politics</option>
                <option value="sports">Sports</option>
                <option value="internet">Internet</option>
              </select>
              <br />
              <label className="title-header">Select a Title</label>
              <input
                type="text"
                onChange={this.updateValue("title")}
                value={this.state.title}
                className="tag-selector"
                placeholder="Enter Meme Title here"
              />
              <div ref={this.errorRef} className="hidden">
                * Title Cannot Be Blank
              </div>
            </label>
            <br />
            <button onClick={this.handleFileUpload} className="create-template">
              Create Template
            </button>
          </div>
        </div>
      </div>
    );
  }

  handleFileSelect = (e) => {
    let urlArr = URL.createObjectURL(e.target.files[0]);
    this.setState({ previewUrl: urlArr });

    // console.log(e.target.files[0]);
  };

  handleFileUpload(e) {
    e.preventDefault();
    if (this.state.title === "") {
      this.errorRef.current.className = "title-error";
      return null;
    }

    let meme = this.canvasRef.toDataURL("image/jpeg", 0.5);

    let tags = this.state.category;
    let title = this.state.title;

    let formData = { title: title, tags: tags, img: meme };
    this.props.postTemplate(formData).then(() => {
      this.setState({ redirect: true });
    });
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="creatememes" />;
    }
  };

  componentDidMount() {
    const canvas = this.canvasRef;
    //  ;
    const ctx = canvas.getContext("2d");
    const image = this.imageRef;
    image.onload = () => {
      ctx.drawImage(
        image,
        0,
        0,
        image.width,
        image.height, // source rectangle
        0,
        0,
        canvas.width,
        canvas.height
      );
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.previewUrl !== prevState.previewUrl) {
      this.setState({ previewUrl: this.state.previewUrl });
    }
  }
}

const mSTP = (state) => {
  return {};
};

const mDTP = (dispatch) => {
  return {
    postTemplate: (meme) => dispatch(postTemplate(meme)),
  };
};
export default connect(mSTP, mDTP)(FileUpload);
