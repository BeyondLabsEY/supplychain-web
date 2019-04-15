import React, { Component } from "react";

import "./Header.scss";
import Logo from "../../assets/img/logo.png";

class Header extends Component {
  render() {
    return (
      <header>
        <h1 className="sr-only" lang="en" translate="no">EY Supply Chain</h1>
        <img className="logo" src={Logo} alt="Logo da aplicação" />
      </header>
    );
  }
}

export default Header;