import React, { Component } from "react";
import { MDBContainer } from "mdbreact";
import Axios from "axios";

import "./Truck.scss";
import { TRUCK } from "../../data/endpoints";
import { DEFAULT_TRANSITION } from "../../data/defaults";

import Contract from "../Contract/Contract.jsx";
import Stepper from "../Stepper/Stepper.jsx";
import Wrapper from "../Wrapper/Wrapper.jsx";

const REQUEST_INTERVAL_SECONDS = 30;

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
  }

  fetchTruckData() {
    if (! this.state.loading) {
      this.setState({
        loading: true
      });
    }

    Axios.get(TRUCK, {
      params: {
        truckCode: 1
      }
    }).catch(() => {
      console.log("ERROR");
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
    const valid = ! loading && truckId;
    const info = valid ? `Caminhão #${truckId}` : "Buscando caminhão...";

    return (
      <Wrapper active={pageReady} from="right">
        <MDBContainer>
          <div className="row">
            <div className="col">
              <Stepper truckId={truckId} />
              <div className="truck-info">{info}</div>
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