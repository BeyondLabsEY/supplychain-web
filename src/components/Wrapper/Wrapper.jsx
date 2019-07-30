import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";

import "./Wrapper.scss";
import { DEFAULT_TRANSITION } from "../../data/defaults";

import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";

class Wrapper extends Component {
  render() {
    const { active, from, children } = this.props;
    
    let pageClassNames;
    switch (from) {
      case "left":
        pageClassNames = "page-from-left"
        break;
      case "right":
        pageClassNames = "page-from-right"
        break;
      default:
        pageClassNames = "page";
    }

    return (
      <CSSTransition in={active} timeout={DEFAULT_TRANSITION} classNames={pageClassNames} unmountOnExit>
        <div className="d-flex flex-column wrapper">
          <div className="flex-grow-0 pt-5 pb-4">
            <Header />
          </div>
          <div className="flex-grow-1 py-2">
            {children}
          </div>
          <div className="flex-grow-0 py-3">
            <Footer />
          </div>
        </div>
      </CSSTransition>
    );
  }
}

export default Wrapper;