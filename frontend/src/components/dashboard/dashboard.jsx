import React from "react";
import FileUpload from "../file_upload/file_upload";

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <FileUpload />
        <h1>progress Slacker</h1>
        <footer>Copyright &copy; H&BG 2021</footer>
      </div>
    );
  }
}

export default Dashboard;
