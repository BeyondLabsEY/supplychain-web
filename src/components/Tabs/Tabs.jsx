import React, { Component, Fragment } from "react";
import ReactLoading from 'react-loading';

import "./Tabs.scss";
import temperatureChartData from "./temperatureChartData";
import humidityChartData from "./humidityChartData";
import Icon from "../Icon/Icon.jsx";
import Chart from "../Chart/Chart.jsx";

const API_URL = "https://ikfprgiyxd.execute-api.us-east-1.amazonaws.com";
const API_VERSION = "v1";
const SENSOR_ENDPOINT = "sensor";

class Tabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tabs: {
        temperature: {
          isActive: true
        },
        humidity: {
          isActive: false
        }
      },
      chartOptions: {
        temperature: temperatureChartData,
        humidity: humidityChartData
      },
      firstLoaded: false
    };
    this.changeTab = this.changeTab.bind(this);
  }

  changeTab() {
    this.setState({
      tabs: {
        temperature: {
          isActive: ! this.state.tabs.temperature.isActive
        },
        humidity: {
          isActive: ! this.state.tabs.humidity.isActive
        }
      }
    });
  }

  fetchData() {
    const { truckId, stepId } = this.props;

    fetch(`${API_URL}/${API_VERSION}/${SENSOR_ENDPOINT}/?truck=${truckId}&step=${stepId}`).then(response => response.json()).then((data) => {
      temperatureChartData.series[0].data = data.t.map((point) => [point.d, point.t]);
      humidityChartData.series[0].data = data.h.map((point) => [point.d, point.h]);

      this.setState({
        chartOptions: {
          temperature: temperatureChartData,
          humidity: humidityChartData
        },
        firstLoaded: true
      });
    });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const { tabs, chartOptions, firstLoaded } = this.state;
    const TemperatureTabContent = () => (
      <div role="tabpanel" className={(tabs.temperature.isActive) ? "tab-pane active" : "tab-pane"} id="farmTemperatureTab">
        <Chart id="farmTemperatureChart" options={chartOptions.temperature} />
      </div>
    );
    const HumidityTabContent = () => (
      <div role="tabpanel" className={(tabs.humidity.isActive) ? "tab-pane active" : "tab-pane"} id="farmHumidityTab">
        <Chart id="farmHumidityChart" options={chartOptions.humidity} />
      </div>
    );
    const TabContent = () => {
      if (firstLoaded) {
        if (tabs.temperature.isActive) {
          return (
            <div className="tab-content">
              <TemperatureTabContent />
            </div>
          );
        } else if (tabs.humidity.isActive) {
          return (
            <div className="tab-content">
              <HumidityTabContent />
            </div>
          );
        }
      } else {
        return (
          <div className="tab-content">
            <div className="content-loading">
              <ReactLoading
                type="bubbles"
                color="#c0c0c0"
                height={48}
                width={48}
              />
            </div>
          </div>
        );
      }
    }

    return (
      <Fragment>
        <ul className="nav nav-pills nav-justified">
          <li className="nav-item">
            <a role="tab" data-toggle="pill" className={(tabs.temperature.isActive) ? "nav-link temperature-tab active" : "nav-link temperature-tab"} onClick={this.changeTab} id="aFarmTemperatureTab">
              <Icon name="temperature" />
              <span className="tab-title">Temperatura</span>
            </a>
          </li>
          <li className="nav-item">
            <a role="tab" data-toggle="pill" className={(tabs.humidity.isActive) ? "nav-link humidity-tab active" : "nav-link humidity-tab"} onClick={this.changeTab} id="aFarmHumidityTab">
              <Icon name="humidity" />
              <span className="tab-title">Umidade</span>
            </a>
          </li>
        </ul>
        <TabContent />
      </Fragment>
    );
  }
}

export default Tabs;