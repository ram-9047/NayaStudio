import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../App.css";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSignIn = () => {
    fetch("/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.token) {
          localStorage.setItem("token", data.token);
          alert("succesfully iogged in");
        }
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  };

  render() {
    return (
      <div className="container">
        <div className="box">
          <h2 className="heading">Sign In</h2>

          <Link to="/signup" className="title">
            Need an account?
          </Link>

          <div className="input-box">
            <input
              placeholder="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            ></input>
            <br />
            <input
              placeholder="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            ></input>
            <br />
          </div>
          <button className="sign-in-btn" onClick={this.handleSignIn}>
            SignIn
          </button>
        </div>
      </div>
    );
  }
}
export default withRouter(SignIn);
