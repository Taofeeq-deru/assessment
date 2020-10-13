import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class List extends Component {
  state = {};
  render() {
    const token = localStorage.getItem("token");
    if (token === null) return <Redirect to="/signin" />;
    return (
      <>
        <div>List</div>
      </>
    );
  }
}

export default List;
