import React from "react";
import axios from "axios";

class FileUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      picFile: null,
    };
    this.handleFileSelect = this.handleFileSelect.bind(this);
    this.handleFileUpload = this.handleFileUpload.bind(this);
  }

  handleFileSelect = (e) => {
    this.setState({
      picFile: e.target.files[0],
    });
    // console.log(e.target.files[0]);
  };

  handleFileUpload(e) {
    e.preventDefault();
    const image = this.state.picFile;
    const formData = new FormData();
    formData.append("image", image);
    return axios.post("/api/meme-templates", formData);
  }

  render() {
    return (
      <div className="file-upload">
        <input type="file" onChange={this.handleFileSelect} />
        <button onClick={this.handleFileUpload}>Create Template</button>
      </div>
    );
  }
}

export default FileUpload;
