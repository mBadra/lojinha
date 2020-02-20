import React, { Component } from "react";

export default class LoginComponent extends Component {
  render() {
    return (
      <div className="container p-5 rounded ma top-space">
        <div className="LogIn-Content">
          <form method="GET">
            <h2>Login</h2>
            <input></input>
            <h2>Senha</h2>
            <input></input>
            <button
              type="submit"
              className="mt-4 btn btn-lg btn-success mx-auto"
            >
              LOGIN
            </button>
          </form>
          <p>Esqueci minha senha!</p>
        </div>
      </div>
    );
  }
}
