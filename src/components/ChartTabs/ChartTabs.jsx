import React, { Component, Fragment } from "react";

import "./ChartTabs.scss";
import temperatureChartOptionsData from "./temperatureChartOptionsData";
import humidityChartOptionsData from "./humidityChartOptionsData";
import Icon from "../Icon/Icon.jsx";
import Chart from "../Chart/Chart.jsx";

class ChartTabs extends Component {
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
      }
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

  render() {
    return (
      <Fragment>
        <ul className="nav nav-pills nav-justified">
          <li className="nav-item">
            <a role="tab" data-toggle="pill" className={(this.state.tabs.temperature.isActive) ? "nav-link active" : "nav-link"} onClick={this.changeTab} id="aFarmTemperatureTab">
              <Icon name="temperature" />
              <span className="tab-title">Temperatura</span>
            </a>
          </li>
          <li className="nav-item">
            <a role="tab" data-toggle="pill" className={(this.state.tabs.humidity.isActive) ? "nav-link active" : "nav-link"} onClick={this.changeTab} id="aFarmHumidityTab">
              <Icon name="humidity" />
              <span className="tab-title">Umidade</span>
            </a>
          </li>
        </ul>
        <div className="tab-content">
          {(this.state.tabs.temperature.isActive) ?
            <div role="tabpanel" className="tab-pane active" id="farmTemperatureTab">
              <Chart id="farmTemperatureChart" options={temperatureChartOptionsData} />
            </div>
          : null}
          {(this.state.tabs.humidity.isActive) ?
            <div role="tabpanel" className="tab-pane" id="farmHumidityTab">
              <Chart id="farmHumidityChart" options={humidityChartOptionsData} />
            </div>
          : null}
        </div>
      </Fragment>
    );
  }
}

export default ChartTabs;