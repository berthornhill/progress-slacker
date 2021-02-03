import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
 constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    // this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }


    render() { 
        return ( 
            <div className="navbar-main">
                <div className="navbar-functions">
                    <img src="img/logo2.png" alt="" className="logo-nav"/>
                    <div className="name-logo">Progress Slacker</div>
                    <Link to='/signup' className="create-meme-button">Create Meme</Link>
                    <Link to='/login' className="log-in-button">
                        <i class="fas fa-user-astronaut"></i>
                    Log In</Link>
                    <Link to='/signup' className="log-in-button">
                        <i class="fas fa-smile"></i>
                    Sign Up</Link>
                </div>
            </div>
         );
    }
}
 
export default NavBar;


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
