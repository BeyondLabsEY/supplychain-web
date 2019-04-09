import React, { Component } from "react";

import "./Footer.scss";
import Copyright from "../../assets/img/copyright.png";

class Footer extends Component {
  render() {
    return (
      <footer>
        <img src={Copyright} alt="Created by BeyondLabsEY" height="18" lang="en" translate="no" />
      </footer>
    );
  }
}

export default Footer;