import React, { Component } from "react";
import { MDBPopover, MDBPopoverBody, MDBBtn } from "mdbreact";

import "./Step.scss";
import Icon from "../Icon/Icon.jsx";
import ChartTabs from "../Tabs/Tabs.jsx";

class Step extends Component {
  constructor(props) {
    super(props);
  }

  capitalize(word = "step") {
    return (`${word.charAt(0).toUpperCase()}${word.slice(1)}`);
  }

  render() {
    const title = (this.props.disabled) ? "title disabled" : "title";
    const popoverId = `popover${this.capitalize(this.props.icon)}`;
    const btnId = `btnToggle${this.capitalize(this.props.icon)}`;

    return (
      <div className="step">
        <div className={title}>
          <span aria-hidden="true">{this.props.title}</span>
        </div>
        <MDBPopover placement="bottom" popover clickable id={popoverId}>
          <MDBBtn color="primary" disabled={this.props.disabled} className="indicator" type="button" id={btnId} aria-label={this.props.title}>
            <Icon name={this.props.icon} size={48} />
          </MDBBtn>
          <MDBPopoverBody>
            <ChartTabs />
          </MDBPopoverBody>
        </MDBPopover>
      </div>
    );
  }
}

export default Step;