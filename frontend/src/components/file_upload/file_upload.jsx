import React from "react";
import axios from "axios";

class FileUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      picFile: null,
      previewUrl: "img/logo2.png",
    };
    this.handleFileSelect = this.handleFileSelect.bind(this);
    this.handleFileUpload = this.handleFileUpload.bind(this);

    this.canvasRef = null;
    this.imageRef = null;

    //function to set CanvasRef to the element using reference callback
    this.setCanvasRef = (element) => {
      this.canvasRef = element;
    };

    this.setImageRef = (element) => {
      this.imageRef = element;
    };
  }

  render() {
    debugger;
    const imgStyle = {
      display: "none",
    };

    if (this.canvasRef) {
      const canvas = this.canvasRef;
      debugger;
      const image = this.imageRef;
      let ctx = this.canvasRef.getContext("2d");
      debugger;
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
        <input type="file" onChange={this.handleFileSelect} />
        <button className="" onClick={this.handleFileUpload}>
          Create Template
        </button>
        <div className="canvas-creator">
          {/* <canvas ref={this.setCanvasRef} width={500} height={500} /> */}
          <canvas
            ref={this.setCanvasRef}
            width={500}
            height={500}
            className="meme-pic"
          />
          <img
            src={this.state.previewUrl}
            alt="grumpy cat"
            style={imgStyle}
            ref={this.setImageRef}
            crossOrigin="anonymous"
          />
        </div>
      </div>
    );
  }

  handleFileSelect = (e) => {
    debugger;
    // this.setState({
    //   picFile: e.target.files[0],
    // });

    let urlArr = URL.createObjectURL(e.target.files[0]);
    debugger;
    this.setState({ previewUrl: urlArr });

    // console.log(e.target.files[0]);
  };

  handleFileUpload(e) {
    e.preventDefault();

    debugger;
    // const image = this.state.picFile;
    // const formData = new FormData();
    // formData.append("image", image);

    // {  tags: "Anime", title: "", image: "urlEncodedString" }

    let meme = this.canvasRef.toDataURL("image/jpeg", 0.5);
    debugger;

    let tags = "Anime";
    let title = "KeyboardDan";

    let formData = { title: title, tags: tags, img: meme };
    return axios.post("/api/templates", formData);
    // this.props.postMeme({ title: "newMeme", img: meme });
  }

  renderImage() {}

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
    debugger;
    if (this.state.previewUrl !== prevState.previewUrl) {
      this.setState({ previewUrl: this.state.previewUrl });
    }
  }
}

export default FileUpload;
