import React from "react";

class UserShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (!this.props.likes[0]) {
      //do the thing
    }
  }

  render() {}
}

export default UserShow;
