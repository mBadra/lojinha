import React, { Component } from "react";
import { faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default class RegisterComponent extends Component {
  render() {
    return (
      <div className="logIn">
        <div className="p-5 rounded ma top-space">
          <div className="LogIn-Content offset-lg-8 offset-md-7 col-lg-4 col-md-5">
            <h2 className="form-title">Cadastre-se</h2>
            <form method="POST" className="register-form" id="register-form">
              <div className="form-group">
                <label for="name">
                  <i className=""></i>
                </label>
                <input type="text" name="name" id="name" placeholder="Nome" />
              </div>
              <div className="form-group">
                <label for="email">
                  <i className=""></i>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <label for="pass">
                  <i className=""></i>
                </label>
                <input
                  type="password"
                  name="pass"
                  id="pass"
                  placeholder="Senha"
                />
              </div>
              <div className="form-group">
                <label for="re-pass">
                  <i className=""></i>
                </label>
                <input
                  type="password"
                  name="re_pass"
                  id="re_pass"
                  placeholder="Repita a senha"
                />
              </div>
              <div className="form-group">
                <input
                  type="checkbox"
                  name="agree-term"
                  id="agree-term"
                  className="agree-term"
                />
                <label for="agree-term" className="label-agree-term">
                  Concordo com os Termos de serviço
                </label>
              </div>
              <div className="form-group form-button">
                <input
                  type="submit"
                  name="signup"
                  id="signup"
                  className="form-submit"
                  value="Registrar"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
