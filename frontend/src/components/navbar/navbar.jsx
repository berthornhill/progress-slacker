import React from 'react';
import { Link } from "react-router-dom";

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
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