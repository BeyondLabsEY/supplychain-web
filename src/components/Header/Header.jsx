import React, { Component } from "react";
import { MDBContainer } from "mdbreact";

import "./Header.scss";
import Logo from "../../assets/img/logo-ey-supplychain.png";

class Header extends Component {
  render() {
    return (
      <MDBContainer>
        <div className="row">
          <div className="col">
            <header>
              <h1 className="sr-only" lang="en" translate="no">EY Supply Chain</h1>
              <img className="logo" src={Logo} alt="Logo da aplicação" />
            </header> 
          </div>
        </div>
      </MDBContainer>
    );
  }
}

export default Header;