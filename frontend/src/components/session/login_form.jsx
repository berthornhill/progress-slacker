import React from "react";
import { withRouter } from "react-router-dom";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }


  // Once the user has been authenticated, redirect to the Tweets page
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.history.push("/");
    }

    // Set or clear errors
    this.setState({ errors: nextProps.errors });
  }

  // Handle field updates (called in the render method)
  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }



  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.login(user);
  }

  // Render the session errors if there are any
  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>{this.state.errors[error]}</li>
        ))}
      </ul>
    );
  }



  

  render() {

    return (
        <div className="login-main">
          <div className="extra-circle"></div>
          <div className="extra-circle2"></div>
        <form onSubmit={this.handleSubmit} className="login-form">
             <div className="face"> 
            <div className="eyes"> 
                <div className="eye"></div> 
                <div className="eye"></div> 
            </div> 
          </div> 
          <div className='form-user-login'>
            <label> Email
              <br/>
            <input
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
              placeholder="Enter Email Here"
            />
            </label>
            <br />
            <label> Password
              <br/>
            <input
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="Insert Password"
            />
            </label>
            <br />
            <input type="submit" value="Login" className='login-button'/>
            <p className="errors">{this.renderErrors()}</p>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginForm);
