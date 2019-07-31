import React, { Component } from "react";
import { MDBContainer, MDBBtn } from "mdbreact";
import ReactLoading from "react-loading";
import Axios from "axios";

import "./Truck.scss";
import { truckData } from "../../data/trucks";
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
        id: null,
        name: null,
        image: null
      },
      sensor: null,
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

    let truckCode;
    try {
      truckCode = this.props.match.params.truckCode;
    } catch {
      truckCode = 1
    }

    Axios.get(TRUCK, {
      params: {
        truckCode
      }
    }).then(response => {
      let id, sensor;
      try {
        id = response.data.truckId;
        sensor = response.data.idLastSensorData;
      } catch {
        id = null;
        sensor = null;
      }

      if (id) {
        const { name, image } = truckData[truckCode];
        
        this.setState({
          truck: {
            id,
            name,
            image
          },
          sensor,
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
    const { truck, sensor, loading, pageReady } = this.state;
    const { id, name, image } = truck;
    const imageAlt = `Foto do ${name}`;
    const sensorInfo = `Sensor #${sensor}`;
    const valid = ! loading && id;

    return (
      <Wrapper active={pageReady} from="right">
        <MDBContainer>
          <div className="row">
            <div className="col">
              <Stepper truckId={id} />
              {valid ?
                <div className="truck-info">
                  <div className="mr-2">
                    <span className="truck-name">{name}</span>
                    <span className="sensor-info">{sensorInfo}</span>
                  </div>
                  <div className="truck-img-container">
                    <img className="truck-img" src={image} alt={imageAlt} />
                  </div>
                </div>
              :
                <div className="loading-truck">
                  <div className="loading-truck-container">
                    <ReactLoading
                      type="bubbles"
                      color="#808080"
                      width={32}
                      height={32}
                    />
                    <span className="sr-only">Carregando...</span>
                  </div>
                </div>
              }
              <div className="change-truck">
                <MDBBtn color="link" size="sm" id="btnChangeTruck" onClick={this.changeTruck}>
                  <Icon name="backward" />
                  <span className="ml-2">Voltar</span>
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