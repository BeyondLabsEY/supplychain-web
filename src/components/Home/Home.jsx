import React, { Component } from "react";
import { MDBContainer, MDBBtn } from "mdbreact";

import "./Home.scss";
import Truck1 from "../../assets/img/truck-1.png";
import Truck2 from "../../assets/img/truck-2.png";
import { DEFAULT_TRANSITION } from "../../data/defaults";

import Wrapper from "../Wrapper/Wrapper.jsx";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageReady: false
    };
    this.chooseTruck = this.chooseTruck.bind(this);
  }

  chooseTruck(truckCode) {
    this.leavePage();

    setTimeout(() => this.props.history.push(`/truck/${truckCode}`), DEFAULT_TRANSITION);
  }

  enterPage() {
    this.setState({
      pageReady: true
    });
  }

  leavePage() {
    this.setState({
      pageReady: false
    });
  }

  componentDidMount() {
    this.enterPage();
  }

  render() {
    return(
      <Wrapper active={this.state.pageReady} from="left">
        <MDBContainer>
            <div className="row justify-content-center">
              <div className="col-auto">
                <p className="mb-3 text-center">Escolha o seu caminhão:</p>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-auto">
                <MDBBtn color="light" className="truck-select" type="button" onClick={() => this.chooseTruck(1)}>
                  <img className="truck-img" src={Truck1} alt="Caminhão número 1" />
                  <div className="truck-name">Redentor</div>
                </MDBBtn>
              </div>
              <div className="col-auto">
                <MDBBtn color="light" className="truck-select" type="button" onClick={() => this.chooseTruck(2)}>
                  <img className="truck-img" src={Truck2} alt="Caminhão número 2" />
                  <div className="truck-name">Falcão</div>
                </MDBBtn>
              </div>
            </div>
          </MDBContainer>
      </Wrapper>
    );
  }
}

export default Home;