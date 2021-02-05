import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    // this.getLinks = this.getLinks.bind(this);
    this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
  }

   handleDemoSubmit(e){
        e.preventDefault();
        this.props.login({
            email: "testingtesting@gmail.com",
            password: "password123"
        })
    }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    if (this.props.loggedIn) {
      return (
        <div className="navbar-main">
          <div className="navbar-functions">
            <img src="img/logo2.png" alt="" className="logo-nav" />
            <Link to="/" className="name-logo">Progress Slacker</Link>
            {/* <Link to={"/"}>Dashboard</Link> */}
            {/* <Link to={"/profile"}>Profile</Link> */}
            <Link to="/creatememes" className="create-meme-button">Create Meme</Link>
            <button onClick={this.logoutUser} className="logout-button">Logout</button>
            <Link to="/template" className="upload-file">Upload</Link>
          </div>
        </div>
      );
    } else {
      return (
        <div className="navbar-main">
          <div className="navbar-functions">
            <img src="img/logo2.png" alt="" className="logo-nav" />
            <Link to="/" className="name-logo">Progress Slacker</Link>
          
            <Link to="/signup" className="create-meme-button">
              Create Meme
            </Link>
            <button className="demo-user-login" onClick={this.handleDemoSubmit}>Demo</button>
            <Link to="/login" className="log-in-button">
              <i className="fas fa-user-astronaut"></i>
              Log In
            </Link>
            <Link to="/signup" className="log-in-button">
              <i className="fas fa-smile"></i>
              Sign Up
            </Link>
             
          </div>
        </div>
      );
    }
  }
}

export default NavBar;

// return (
//   <div className="navbar-main">
//     <div className="navbar-functions">
//       <img src="img/logo2.png" alt="" className="logo-nav" />
//       <div className="name-logo">Progress Slacker</div>

//       <Link to="/signup" className="create-meme-button">
//         Create Meme
//       </Link>
//       <Link to="/login" className="log-in-button">
//         <i className="fas fa-user-astronaut"></i>
//         Log In
//       </Link>
//       <Link to="/signup" className="log-in-button">
//         <i className="fas fa-smile"></i>
//         Sign Up
//       </Link>

//     </div>
//   </div>
/*  
getLinks() {
    if (this.props.loggedIn) {
      return (
        <div>
          <Link to={"/"}>Dashboard</Link>
          <Link to={"/profile"}>Profile</Link>
          <Link to={"/create"}>Make a Meme</Link>
          <button onClick={this.logoutUser}>Logout</button>
        </div>
      );
    } else {
      return (
        <div>
          <Link to={"/signup"}>Signup</Link>
          <Link to={"/login"}>Login</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h1>progress Slacker</h1>
        {this.getLinks()}
      </div>
    );
  }
}
*/
