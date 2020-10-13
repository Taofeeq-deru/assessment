import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "../components/Nav";
import Home from "../components/Home";
import List from "../components/List";
import Signin from "../components/Signin";

class Layout extends Component {
  state = {};
  render() {
    return (
      <>
        <Router>
          <div className="bg-dark" style={{ height: "100vh" }}>
            <Nav />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/signin" exact component={Signin} />
              <Route path="/list" exact component={List} />
            </Switch>
          </div>
        </Router>
      </>
    );
  }
}

export default Layout;
