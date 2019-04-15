import React, { Component } from "react";

import "./Footer.scss";
import Copyright from "../../assets/img/copyright.png";

class Footer extends Component {
  render() {
    return (
      <footer>
        <p className="sr-only" lang="en" translate="no">Created by BeyondLabsEY</p>
        <img className="copyright" src={Copyright} alt="Frase de rodapé contando o aviso de direito autoral" />
      </footer>
    );
  }
}

export default Footer;