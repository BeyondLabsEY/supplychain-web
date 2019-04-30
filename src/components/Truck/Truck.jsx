import React, { Component, Fragment } from "react";

import "./Truck.scss";
import Stepper from "../Stepper/Stepper.jsx";

const API_URL = "https://ikfprgiyxd.execute-api.us-east-1.amazonaws.com";
const API_VERSION = "v1";
const TRUCK_ENDPOINT = "truck";
const REQUEST_INTERVAL_MINUTES = 1;

class Truck extends Component {
  constructor(props) {
    super(props);

    this.state = {
      truck: {
        truckId: null
      },
      firstLoaded: false
    };
  }

  fetchTruckData() {
    fetch(`${API_URL}/${API_VERSION}/${TRUCK_ENDPOINT}`).then(response => response.json()).then((data) => {
      this.setState({
        truck: data || {
          truckId: null
        },
        firstLoaded: true
      });
    });
  }

  componentDidMount() {
    this.fetchTruckData();
    this.inverval = setInterval(() => (this.fetchTruckData()), (60 * REQUEST_INTERVAL_MINUTES * 1000));
  }

  componentWillUnmount() {
    clearInterval(this.inverval);
  }

  render() {
    const { truck, firstLoaded } = this.state;
    const { truckId } = truck;

    return(
      <Fragment>
        <Stepper truckId={truckId} />
        <div className="truck-info">
          {(firstLoaded) ? <p>Caminhão #{truckId}</p> : <p>Buscando caminhão...</p>}
        </div>
      </Fragment>
    );
  }
}

export default Truck;