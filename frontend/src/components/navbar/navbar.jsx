import React from 'react';


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
                    <button className="create-meme-button">Create Meme</button>
                    <button className="log-in-button">
                        <i class="fas fa-user-astronaut"></i>
                        Log In</button>
                </div>
            </div>
         );
    }
}
 
export default NavBar;