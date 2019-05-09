import React, { Component, Fragment } from "react";

import "./Truck.scss";
import Stepper from "../Stepper/Stepper.jsx";

const API_URL = "https://ikfprgiyxd.execute-api.us-east-1.amazonaws.com";
const API_VERSION = "v1";
const TRUCK_ENDPOINT = "truck";
const REQUEST_INTERVAL_SECONDS = 30;

class Truck extends Component {
  constructor(props) {
    super(props);

    this.state = {
      truck: {
        truckId: null,
      },
      loading: true
    };
  }

  fetchTruckData() {
    this.setState({
      loading: true
    });
    fetch(`${API_URL}/${API_VERSION}/${TRUCK_ENDPOINT}`).then(response => response.json()).then((data) => {
      this.setState({
        truck: data || {
          truckId: null
        },
        loading: false
      });
    });
  }

  componentDidMount() {
    this.fetchTruckData()
    this.inverval = setInterval(() => (this.fetchTruckData()), (REQUEST_INTERVAL_SECONDS * 1000));
  }

  componentWillUnmount() {
    clearInterval(this.inverval);
  }

  render() {
    const { truck, loading } = this.state;
    const { truckId } = truck;
    const valid = ! loading && truckId;
    const info = valid ? `Caminhão #${truckId}` : "Buscando caminhão...";

    return (
      <Fragment>
        <Stepper truckId={truckId} />
        <div className="truck-info">{info}</div>
      </Fragment>
    );
  }
}

export default Truck;