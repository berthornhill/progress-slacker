import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import MemeFeed from "../memefeed/memefeed_container";
import SideBarContainer from "../sidebar/sidebar_container";

class DashBoard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      featured: "",
    };
  }

  componentDidMount() {
    // debugger;
    this.props.fetchTags();
  }

  render() {
    return (
      <div className="main-page">
        {/*  */}
        <div className="main-content">
          <SideBarContainer />
          <Switch>
            <Route
              path="/:id"
              component={MemeFeed}
              featured={this.props.toDisplay}
            />
            <Route
              path="/"
              component={MemeFeed}
              featured={this.props.toDisplay}
            />
          </Switch>
        </div>
      </div>
    );
    // return (
    //   <div className="full-page">
    //     <div className="main-page">
    //       <SideBarContainer />
    //       {/* <div className="animate__animated animate__fadeInLeftBig">

    //         <div>Lets</div>
    //         <div>Talk</div>
    //         <div>Memes</div>
    //         <div className="squid"></div>
    //       </div> */}
    //       <Switch>
    //         <Route
    //           path="/:id"
    //           component={MemeFeed}
    //           featured={this.props.toDisplay}
    //         />
    //         <Route
    //           path="/"
    //           component={MemeFeed}
    //           featured={this.props.toDisplay}
    //         />
    //       </Switch>
    //     </div>
    //     {/* <div className="memes-main-content">

    //     </div> */}
    //   </div>
    // );
  }
}

export default DashBoard;
