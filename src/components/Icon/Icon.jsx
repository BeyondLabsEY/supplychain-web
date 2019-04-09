import React, { Component } from "react";

import "./Icon.scss";

class Icon extends Component {
  render() {
    let sizeClass;
    switch (this.props.size) {
      case 18:
        sizeClass = "size-18";
        break;
      case 24:
        sizeClass = "size-24";
        break;
      case 36:
        sizeClass = "size-36";
        break;
      case 48:
        sizeClass = "size-48";
        break;
      default:
        sizeClass = undefined;
    }
    const icon = (sizeClass) ? `icon-${this.props.name} ${sizeClass}` : `icon-${this.props.name}`;
    return (
      <i className={icon} aria-hidden="true" />
    );
  }
}

export default Icon;