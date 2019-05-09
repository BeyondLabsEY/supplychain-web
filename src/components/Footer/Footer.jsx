import React, { Component } from "react";
import { MDBContainer } from "mdbreact";

import "./Footer.scss";
import Logo from "../../assets/img/logo-beyondlabsey.png";

class Footer extends Component {
  render() {
    return (
      <footer>
        <MDBContainer>
          <div className="row justify-content-center">
            <div className="col-auto">
              <img className="logo" src={Logo} alt="Logo do Beyond Labs" />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-auto">
              <p lang="en" translate="no">Created by BeyondLabsEY</p>
            </div>
          </div>
        </MDBContainer>
      </footer>
    );
  }
}

export default Footer;