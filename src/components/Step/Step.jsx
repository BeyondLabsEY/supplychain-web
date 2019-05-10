import React, { Component } from "react";
import { MDBPopover, MDBPopoverBody, MDBBtn } from "mdbreact";

import "./Step.scss";
import Icon from "../Icon/Icon.jsx";
import Tabs from "../Tabs/Tabs.jsx";

class Step extends Component {
  capitalize(word = "step") {
    return (`${word.charAt(0).toUpperCase()}${word.slice(1)}`);
  }

  render() {
    const { id, title, icon, disabled, truckId } = this.props;
    const stepClass = (disabled) ? "step" : "enabled step";
    const titleClass = (disabled) ? "title disabled" : "title";
    const popoverElementId = `popover${this.capitalize(icon)}`;
    const btnElementId = `btnToggle${this.capitalize(icon)}`;

    return (
      <div className={stepClass}>
        <div className={titleClass}>
          <span aria-hidden="true">{title}</span>
        </div>
        <MDBPopover placement="top" popover clickable id={popoverElementId}>
          <MDBBtn color="primary" disabled={disabled} className="indicator" type="button" id={btnElementId} aria-label={title}>
            <Icon name={icon} size="48" />
          </MDBBtn>
          <MDBPopoverBody>
            <Tabs truckId={truckId} stepId={id} />
          </MDBPopoverBody>
        </MDBPopover>
      </div>
    );
  }
}

export default Step;