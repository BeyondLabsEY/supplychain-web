import React, { Component } from "react";
import { MDBBtn } from "mdbreact";

import "./Step.scss";

class Step extends Component {
  constructor(props) {
    super(props);
  }

  capitalize(word = "step") {
    return (`${word.charAt(0).toUpperCase()}${word.slice(1)}`);
  }

  render() {
    const title = (this.props.disabled) ? "title disabled" : "title";
    const icon = `icon-${this.props.icon} size-48`;
    const btnId = `btnToggle${this.capitalize(this.props.icon)}`;

    return (
      <div className="step">
        <div className={title}>
          <span aria-hidden="true">{this.props.title}</span>
        </div>
        <MDBBtn color="primary" disabled={this.props.disabled} className="indicator" type="button" id={btnId}>
          <i className={icon} aria-label={this.props.title} />
        </MDBBtn>
      </div>
    );
  }
}

export default Step;