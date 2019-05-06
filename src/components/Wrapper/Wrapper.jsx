import React, { Component } from "react";
import { MDBContainer } from 'mdbreact';

import "./Wrapper.scss";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Truck from "../Truck/Truck.jsx";
import Contract from "../Contract/Contract.jsx";

class Wrapper extends Component {
  render() {
    return (
      <div className="d-flex flex-column wrapper">
        <div className="flex-grow-0 pt-5 pb-4">
          <MDBContainer>
            <div className="row">
              <div className="col">
                <Header />
              </div>
            </div>
          </MDBContainer>
        </div>
        <div className="flex-grow-1 py-2">
          <MDBContainer>
            <div className="row">
              <div className="col">
                <Truck />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Contract />
              </div>
            </div>
          </MDBContainer>
        </div>
        <div className="flex-grow-0 py-3">
          <MDBContainer>
            <div className="row">
              <div className="col">
                <Footer />
              </div>
            </div>
          </MDBContainer>
        </div>
      </div>
    );
  }
}

export default Wrapper;