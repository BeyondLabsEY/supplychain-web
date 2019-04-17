import React, { Component } from "react";

import "./Icon.scss";

class Icon extends Component {
  sizeToClassName(size) {
    let className;
    
    switch (size) {
      case 18:
        className = "size-18";
        break;
      case 24:
        className = "size-24";
        break;
      case 36:
        className = "size-36";
        break;
      case 48:
        className = "size-48";
        break;
      default:
        className = null;
    }
    return (className);
  }

  render() {
    const { name, size } = this.props;
    const sizeClass = this.sizeToClassName(size);
    const iconClass = (sizeClass) ? `icon-${name} ${sizeClass}` : `icon-${name}`;

    return (
      <i className={iconClass} aria-hidden="true" />
    );
  }
}

export default Icon;