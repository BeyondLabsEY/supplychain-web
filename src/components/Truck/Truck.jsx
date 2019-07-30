import React, { Component } from "react";
import { MDBContainer, MDBBtn } from "mdbreact";
import Axios from "axios";

import "./Truck.scss";
import Truck1 from "../../assets/img/truck-1.png";
import Truck2 from "../../assets/img/truck-2.png";
import { TRUCK } from "../../data/endpoints";
import { DEFAULT_TRANSITION, REQUEST_INTERVAL_SECONDS } from "../../data/defaults";

import Icon from "../Icon/Icon.jsx";
import Contract from "../Contract/Contract.jsx";
import Stepper from "../Stepper/Stepper.jsx";
import Wrapper from "../Wrapper/Wrapper.jsx";

class Truck extends Component {
  constructor(props) {
    super(props);

    this.state = {
      truck: {
        truckId: null
      },
      loading: true,
      pageReady: false
    };
    this.changeTruck = this.changeTruck.bind(this);
  }

  fetchTruckData() {
    if (! this.state.loading) {
      this.setState({
        loading: true
      });
    }

    Axios.get(TRUCK, {
      params: {
        truckCode: this.props.match.params.truckCode
      }
    }).then(response => {
      let truckId;
      try {
        truckId = response.data.truckId;
      } catch {
        truckId = null;
      }

      if (truckId) {
        this.setState({
          truck: {
            truckId
          },
          loading: false
        });
      }
    });
  }

  changeTruck() {
    this.leavePage();

    setTimeout(() => this.props.history.push("/"), DEFAULT_TRANSITION);
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
    this.fetchTruckData();
    this.inverval = setInterval(() => (this.fetchTruckData()), (REQUEST_INTERVAL_SECONDS * 1000));
  }

  componentWillUnmount() {
    clearInterval(this.inverval);
  }

  render() {
    const { truck, loading, pageReady } = this.state;
    const { truckId } = truck;
    const truckName = (truck == 1) ? "Redentor" : "Falcão"; 
    const truckImg = (truck == 1) ? Truck1 : Truck2; 
    const valid = ! loading && truckId;
    const info = valid ? truckName.toUpperCase() : "Buscando dados do caminhão...";

    return (
      <Wrapper active={pageReady} from="right">
        <MDBContainer>
          <div className="row">
            <div className="col">
              <Stepper truckId={truckId} />
              <div className="truck-info">
                <div className="mr-2">
                  <span className="d-block">{info}</span>
                </div>
                <img className="truck-img" src={truckImg} />
              </div>
              <div className="change-truck">
                <MDBBtn color="link" size="sm" id="btnChangeTruck" onClick={this.changeTruck}>
                  <Icon name="backward" />
                  <span className="ml-2">Trocar caminhão</span>
                </MDBBtn>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Contract />
            </div>
          </div>
        </MDBContainer>
      </Wrapper>
    );
  }
}

export default Truck;