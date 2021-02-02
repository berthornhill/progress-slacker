import React from "react";

class MemeCanvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "Sir Grumps A Lot" };

    //text input to null
    this.canvasRef = null;
    this.imageRef = null;

    //function to set CanvasRef to the element using reference callback
    this.setCanvasRef = (element) => {
      this.canvasRef = element;
    };

    this.setImageRef = (element) => {
      this.imageRef = element;
    };

    this.focusCanvasRef = () => {
      // Focus the text input using the raw DOM API
      if (this.canvasRef) this.canvasRef.focus();
    };
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
      ctx.font = "bold 40px Courier";

      ctx.strokeText(this.state.text, 210, 75);
    };
  }

  render() {
    const imgStyle = {
      display: "none",
    };

    return (
      <div>
        <canvas ref={this.setCanvasRef} width={500} height={500} />
        <img
          src="https://media.wired.com/photos/5cdefb92b86e041493d389df/1:1/w_988,h_988,c_limit/Culture-Grumpy-Cat-487386121.jpg"
          alt="grumpy cat"
          style={imgStyle}
          ref={this.setImageRef}
        />
      </div>
    );
  }
}

export default MemeCanvas;
