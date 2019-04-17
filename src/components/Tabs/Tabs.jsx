import React, { Component, Fragment } from "react";

import "./Tabs.scss";
import temperatureChartData from "./temperatureChartData";
import humidityChartData from "./humidityChartData";
import Icon from "../Icon/Icon.jsx";
import Chart from "../Chart/Chart.jsx";

const API_URL = "https://5cb612fa07f233001424dade.mockapi.io";
const MEASURES_ENDPOINT = "measures";

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
      loaded: false,
      error: false
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

  handleError() {
    this.setState({
      steps: stepsData,
      loaded: true,
      error: true
    });
  }

  fetchData() {
    this.setState({
      loaded: false,
      error: false
    });

    const measuresId = this.props.measuresId || "1";

    fetch(`${API_URL}/${MEASURES_ENDPOINT}/${measuresId}`).then(response => response.json()).then((data) => {
      try {
        temperatureChartData.series[0].data = data.sd.tc.map((measure) => [measure.d, measure.t]);
        humidityChartData.series[0].data = data.sd.ut.map((measure) => [measure.d, measure.u]);

        this.setState({
          chartOptions: {
            temperature: temperatureChartData,
            humidity: humidityChartData
          },
          loaded: true
        });
      } catch {
        this.handleError();
      }
    }, (error) => {
      this.handleError();
    });
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    const { tabs, chartOptions, loaded } = this.state;

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
          {(tabs.temperature.isActive && loaded) ?
            <div role="tabpanel" className={(tabs.temperature.isActive) ? "tab-pane active" : "tab-pane"} id="farmTemperatureTab">
              <Chart id="farmTemperatureChart" options={chartOptions.temperature} />
            </div>
          : null}
          {(tabs.humidity.isActive && loaded) ?
            <div role="tabpanel" className={(tabs.humidity.isActive) ? "tab-pane active" : "tab-pane"} id="farmHumidityTab">
              <Chart id="farmHumidityChart" options={chartOptions.humidity} />
            </div>
          : null}
        </div>
      </Fragment>
    );
  }
}

export default Tabs;