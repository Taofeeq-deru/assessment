import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class Nav extends Component {
  state = {};
  render() {
    const token = localStorage.getItem("token");
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="nav-link active" to="/">
            Home <span className="sr-only">(current)</span>
          </Link>
          <Link className="nav-link" to="/Link">
            Link
          </Link>
          {token === null ? (
            <Link className="nav-link" to="/signin">
              Sign in
            </Link>
          ) : (
            <Link className="nav-link" to="/signout">
              Sign out
            </Link>
          )}
        </nav>
      </>
    );
  }
}

export default withRouter(Nav);
