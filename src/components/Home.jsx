import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class Home extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="mt-5 text-center text-white d-flex flex-column align-items-center">
          <h1>Welcome</h1>
          <Link to="/list" style={{}}>
            Click here to view site list
          </Link>
        </div>
      </>
    );
  }
}

export default withRouter(Home);
