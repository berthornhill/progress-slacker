import React from "react";
import { withRouter } from "react-router-dom";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      handle: "",
      password: "",
      password2: "",
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
    this.handleDemo = this.handleDemo.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push("/login");
    }

    this.setState({ errors: nextProps.errors });
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleDemo(e) {
    e.preventDefault();
    const demo = { email: "guest@demouser.com", password: "password" };

    this.props.demoLogin(demo);
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      handle: this.state.handle,
      password: this.state.password,
      password2: this.state.password2,
    };

    this.props.signup(user, this.props.history);
  }

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
      <div className="signup-form-container">
        <div className="one-eye">
          <div className="shut">
            <span></span>
          </div>
          <div className="ball"></div>
        </div>

        <form
          onSubmit={this.handleSubmit}
          className="animate__animated animate__zoomIn"
        >
          <div className="signup-form">
            <br />
            <label>
              Email
              <br />
              <input
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
                placeholder="Enter Email Here"
              />
            </label>
            <br />
            <label>
              Handle
              <br />
              <input
                type="text"
                value={this.state.handle}
                onChange={this.update("handle")}
                placeholder="Please Select Your Username"
              />
            </label>
            <br />
            <label>
              Password
              <br />
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                placeholder="Password"
              />
            </label>
            <br />
            <label>
              Confirm Password
              <br />
              <input
                type="password"
                value={this.state.password2}
                onChange={this.update("password2")}
                placeholder="Confirm Password"
              />
            </label>
            <br />
            <input type="submit" value="Sign Up" className="signup-button" />
            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);
