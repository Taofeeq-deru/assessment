import React, { Component } from "react";
import axios from "axios";

const initialState = { error: false };

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.emailRef = React.createRef();
    this.passwordRef = React.createRef();
  }

  async handleSubmit(e) {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    //console.log(email, password);

    await axios
      .post(`https://fcs.concept-nova.com/api/v1/login`, {
        email: email,
        password: password,
      })
      .then((resp) => {
        console.log(resp.message.token);
        const token = resp.message.token;

        localStorage.setItem("token", token);
        this.history.push("/list");
        window.location.reload();
      })
      .catch((err) => {
        this.setState({ error: err.message });
        console.log(err.message);
      });

    this.emailRef.current.value = "";
    this.passwordRef.current.value = "";
  }

  render() {
    return (
      <>
        <div className="d-flex justify-content-center align-items-center h-100 p-3">
          <div className="form bg-light rounded" style={{ width: "320px" }}>
            <form onSubmit={(e) => this.handleSubmit(e)}>
              <div className="form-group">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  placeholder="Enter Email"
                  ref={this.emailRef}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                  placeholder="Enter Password"
                  ref={this.passwordRef}
                  required
                />
              </div>
              <div className="form-group">
                <button type="submit" className="form-control btn btn-primary">
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Signin;
