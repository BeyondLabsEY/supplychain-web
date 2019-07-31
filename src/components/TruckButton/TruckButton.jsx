import React, { Component } from "react";
import { MDBBtn } from "mdbreact";

import "./TruckButton.scss";

import Icon from "../Icon/Icon.jsx";

class TruckButton extends Component {
  render() {
    const { number, name, image, onClick } = this.props;
    const buttonId = `btnSelectTruck${number}`;
    const imageAlt = `Foto do ${name}`;

    return(
      <MDBBtn color="light" className="truck-select" type="button" id={buttonId} onClick={() => onClick(number)}>
        <img className="truck-img" src={image} alt={imageAlt} />
        <div className="truck-name">
          <span className="mr-2 ml-1">{name}</span>
          <Icon name="forward" />
        </div>
      </MDBBtn>
    );
  }
}

export default TruckButton;