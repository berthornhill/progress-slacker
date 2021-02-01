import React from "react";

class MemeCanvas extends React.Component {
  constructor(props) {
    super(props);

    //text input to null
    this.textInput = null;
    //function to set textinput to the element using reference callback
    this.setTextInputRef = (element) => {
      this.textInput = element;
    };

    this.focusTextInput = () => {
      // Focus the text input using the raw DOM API
      if (this.textInput) this.textInput.focus();
    };
  }
  componentDidMount() {
    const canvas = this.textInput;
    const ctx = canvas.getContext("2d");
  }

  initialize() {
    canvas = document.getElementById("meme-gen");
  }

  render() {
    return (
      <div>
        <canvas ref={this.setTextInputRef} width={500} height={500} />
        <img src={} alt={} className="hidden" />
      </div>
    );
  }
}

export default Canvas;
