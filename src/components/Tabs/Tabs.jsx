import React, { Component, Fragment } from "react";

import "./Tabs.scss";
import temperatureChartData from "./temperatureChartData";
import humidityChartData from "./humidityChartData";
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
      },
      chartOptions: {
        temperature: temperatureChartData,
        humidity: humidityChartData
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
    const { tabs, chartOptions } = this.state;

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
        <div className="tab-content">
          {(tabs.temperature.isActive) ?
            <div role="tabpanel" className={(tabs.temperature.isActive) ? "tab-pane active" : "tab-pane"} id="farmTemperatureTab">
              <Chart id="farmTemperatureChart" options={chartOptions.temperature} />
            </div>
          : null}
          {(tabs.humidity.isActive) ?
            <div role="tabpanel" className={(tabs.humidity.isActive) ? "tab-pane active" : "tab-pane"} id="farmHumidityTab">
              <Chart id="farmHumidityChart" options={chartOptions.humidity} />
            </div>
          : null}
        </div>
      </Fragment>
    );
  }
}

export default ChartTabs;