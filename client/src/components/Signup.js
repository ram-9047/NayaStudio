import React from "react";
import { Link, withRouter } from "react-router-dom";

class SignUp extends React.Component {
  state = {
    email: "",
    username: "",
    password: "",
    err: {
      emailerr: "",
      usernameerr: "",
      passworderr: "",
    },
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSignUp = () => {
    fetch("/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email: this.state.email,
        username: this.state.username,
        password: this.state.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("sucessfully signed-up");
        this.props.history.push("/");
      });
  };
  render() {
    return (
      <div className="container">
        <div className="box">
          <h2 className="heading">Sign Up</h2>

          <Link to="/" className="title">
            Have an account?
          </Link>

          <div className="input-box">
            <input
              type="text"
              placeholder="username"
              value={this.state.username}
              name="username"
              onChange={this.handleChange}
            ></input>
            <br />
            <input
              value={this.state.email}
              type="email"
              name="email"
              placeholder="email"
              onChange={this.handleChange}
            ></input>
            <br />
            <input
              type="password"
              placeholder="password"
              value={this.state.password}
              name="password"
              onChange={this.handleChange}
            ></input>
          </div>
          <button className="sign-in-btn" onClick={this.handleSignUp}>
            SignUp
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(SignUp);
