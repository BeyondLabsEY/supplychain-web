import React, { Component } from "react";
import { MDBBtn } from "mdbreact";

import "./Step.scss";
import Icon from "../../assets/img/icons/white/cattle.svg";

class Step extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="step">
        <div className="title">
          <span>{this.props.location}</span>
        </div>
        <MDBBtn color="primary" className="indicator" type="button" id="btnToggleFarm">
          <img src={Icon} alt="Ícone de uma vaca representando fazenda" width="100" height="100" />
        </MDBBtn>
      </div>
    );
  }
}

export default Step;