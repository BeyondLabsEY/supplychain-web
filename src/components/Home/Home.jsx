import React, { Component } from "react";
import { MDBContainer } from "mdbreact";

import "./Home.scss";
import Truck1 from "../../assets/img/truck-1.png";
import Truck2 from "../../assets/img/truck-2.png";
import { DEFAULT_TRANSITION } from "../../data/defaults";

import TruckButton from "../TruckButton/TruckButton.jsx";
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
                <p className="home-choose mb-4 text-center">Escolha o seu caminhão:</p>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-auto">
                <TruckButton number="1" name="Redentor" image={Truck1} onClick={this.chooseTruck} />
              </div>
              <div className="col-auto">
                <TruckButton number="2" name="Falcão" image={Truck2} onClick={this.chooseTruck} />
              </div>
            </div>
          </MDBContainer>
      </Wrapper>
    );
  }
}

export default Home;