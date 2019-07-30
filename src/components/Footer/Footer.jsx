import React, { Component } from "react";
import { MDBContainer } from "mdbreact";

import "./Footer.scss";
import Logo from "../../assets/img/logo-beyondlabsey.png";

class Footer extends Component {
  render() {
    return (
      <footer>
        <MDBContainer>
          <div className="row">
            <div className="col">
              <div className="mb-2">
                <img className="img-fluid logo" src={Logo} alt="BeyondLabs logo" />
              </div>
              <p>Created by BeyondLabsEY</p>
            </div>
          </div>
        </MDBContainer>
      </footer>
    );
  }
}

export default Footer;