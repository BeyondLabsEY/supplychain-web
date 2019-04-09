import React, { Component } from "react";
import { MDBBtn } from "mdbreact";

import "./Step.scss";
import Icon from "../Icon/Icon.jsx";

class Step extends Component {
  constructor(props) {
    super(props);
  }

  capitalize(word = "step") {
    return (`${word.charAt(0).toUpperCase()}${word.slice(1)}`);
  }

  render() {
    const title = (this.props.disabled) ? "title disabled" : "title";
    const btnId = `btnToggle${this.capitalize(this.props.icon)}`;

    return (
      <div className="step">
        <div className={title}>
          <span aria-hidden="true">{this.props.title}</span>
        </div>
        <MDBBtn color="primary" disabled={this.props.disabled} className="indicator" type="button" id={btnId} aria-label={this.props.title}>
          <Icon name={this.props.icon} size={48} />
        </MDBBtn>
      </div>
    );
  }
}

export default Step;