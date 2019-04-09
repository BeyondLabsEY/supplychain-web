import React, { Component } from "react";

import "./Header.scss";
import Logo from "../../assets/img/logo.png";

class Header extends Component {
  render() {
    return (
      <header>
        <h1 className="sr-only" lang="en" translate="no">Supply Chain</h1>
        <img src={Logo} alt="EY SupplyChain" height="48" lang="en" translate="no" />
      </header>
    );
  }
}

export default Header;