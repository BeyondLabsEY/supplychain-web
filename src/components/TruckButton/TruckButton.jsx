import React, { Component } from "react";
import { MDBBtn } from "mdbreact";

import "./TruckButton.scss";

class TruckButton extends Component {
  render() {
    const { number, name, image, onClick } = this.props;
    const buttonId = `btnSelectTruck${number}`;
    const imageAlt = `Caminhão número ${number}`;

    return(
      <MDBBtn color="light" className="truck-select" type="button" id={buttonId} onClick={() => onClick(number)}>
        <img className="truck-img" src={image} alt={imageAlt} />
        <div className="truck-name">{name}</div>
      </MDBBtn>
    );
  }
}

export default TruckButton;