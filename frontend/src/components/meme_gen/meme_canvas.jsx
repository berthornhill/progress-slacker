import { authorize } from "passport";
import React from "react";

class MemeCanvas extends React.Component {
  constructor(props) {
    super(props);
    //text input to null
    this.state = {
      topText: "",
      bottomText: "",
      textSize: 70,
      bottomTextSize: 70,
      image:
        "https://media.wired.com/photos/5cdefb92b86e041493d389df/1:1/w_988,h_988,c_limit/Culture-Grumpy-Cat-487386121.jpg",
    };

    this.canvasRef = null;
    this.imageRef = null;

    //function to set CanvasRef to the element using reference callback
    this.setCanvasRef = (element) => {
      this.canvasRef = element;
    };

    this.setImageRef = (element) => {
      this.imageRef = element;
    };

    // this.focusCanvasRef = () => {
    //   // Focus the text input using the raw DOM API
    //   if (this.canvasRef) this.canvasRef.focus();
    // };

    this.updateValue = this.updateValue.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderImage = this.renderImage.bind(this);
    this.getImage = this.getImage.bind(this);
  }

  updateValue(value) {
    // debugger;
    return (e) => {
      e.preventDefault();
      this.setState({ [value]: e.target.value });
      debugger;
    };
  }

  getImage() {
    this.props.fetchMeme("601a0c3652f5ae75941588e5").then((image) => {
      debugger;
      let buffer = image.meme.data.img.data.data;

      let img = this._arrayBufferToBase64(buffer);
      // let img = function _arrayBufferToBase64(buffer) {
      //   var binary = "";
      //   var bytes = new Uint8Array(buffer);
      //   var len = bytes.byteLength;
      //   for (var i = 0; i < len; i++) {
      //     binary += String.fromCharCode(bytes[i]);
      //   }
      //   return window.btoa(binary);
      // };
      debugger;

      // <img src={"data:image/png;base64," + Data.Photo} />;
      this.setState({ image: "data:image/png;base64," + img });
    });
    debugger;
  }

  _arrayBufferToBase64(buffer) {
    var binary = "";
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.renderImage();
  }

  renderImage() {
    debugger;
    let meme = this.canvasRef.toDataURL("image/jpeg", 1);
    console.log(meme);
  }

  componentDidMount() {
    // debugger;
    const canvas = this.canvasRef;
    // debugger;
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

  render() {
    //only after initial render of canvas and image:
    if (this.canvasRef) {
      // debugger;
      const canvas = this.canvasRef;
      // // debugger;
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
      // debugger;

      let x = canvas.width / 2;
      let y = canvas.height / 5;
      ctx.font = `bolder ${this.state.topTextSize}px Helvetica`;
      debugger;
      ctx.textAlign = "center";
      ctx.fillStyle = "white";
      ctx.fillText(this.state.topText, x, y);
      ctx.strokeText(this.state.topText, x, y);

      let z = canvas.width / 2;
      let v = 450;
      ctx.font = `bolder ${this.state.bottomTextSize}px Helvetica`;
      ctx.textAlign = "center";
      ctx.fillStyle = "white";
      debugger;
      ctx.fillText(this.state.bottomText, z, v);
      ctx.strokeText(this.state.bottomText, z, v);
    }

    // display none set to image so it doesnt' on top of canvas element. rendering of the image happens inside of the componentDidMount()
    const imgStyle = {
      display: "none",
    };
    debugger;
    return (
      <div>
        {/* <canvas ref={this.setCanvasRef} width={500} height={500} /> */}
        <div className="canvas-element">
          <canvas ref={this.setCanvasRef} width={500} height={500} />
          <img
            src={this.state.image}
            alt="grumpy cat"
            style={imgStyle}
            ref={this.setImageRef}
            // crossOrigin="user-credentials"
          />
        </div>

        <div className="meme-form">
          <label value="topText">Top Text</label>
          <input
            type="text"
            onChange={this.updateValue("topText")}
            value={this.state.topText}
          />
          <label value="bottomText">Bottom Text</label>
          <input
            type="text"
            onChange={this.updateValue("bottomText")}
            value={this.state.bottomText}
          />
          <label value="top text size">Top Text Size</label>
          <input
            type="range"
            min="12"
            max="100"
            defaultValue={this.state.topTextSize}
            onChange={this.updateValue("topTextSize")}
          />

          <label value="bottom text size">Bottom Text Size</label>
          <input
            type="range"
            min="12"
            max="100"
            defaultValue={this.state.bottomTextSize}
            onChange={this.updateValue("bottomTextSize")}
          />
        </div>
        <form onSubmit={this.handleSubmit}>
          <button value="generateMeme">Generate Meme</button>
        </form>

        <form onSubmit={() => this.getImage}>
          <input type="button" value="submit" onClick={() => this.getImage()} />
        </form>
      </div>
    );
  }
}

export default MemeCanvas;

// form to change text.
// options to change text attributs, style, color, shape?!
// sliders to adjust sizing of image.
