import React, { Component, Fragment } from "react";
import ReactLoading from "react-loading";
import Axios from "axios";

import "./Tabs.scss";
import { temperatureChartOptionsData, humidityChartOptionsData } from "../../data/chartOptions";
import { SENSOR } from "../../data/endpoints";

import Icon from "../Icon/Icon.jsx";
import Chart from "../Chart/Chart.jsx";

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
        temperature: temperatureChartOptionsData,
        humidity: humidityChartOptionsData
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

    Axios.get(SENSOR, {
      params: {
        truck: truckId,
        step: stepId
      }
    }).then(response => {
      try {
        temperatureChartOptionsData.series[0].data = response.data.t.map((point) => [point.d, point.t]);
        humidityChartOptionsData.series[0].data = response.data.h.map((point) => [point.d, point.h]);
      } catch {
        temperatureChartOptionsData.series[0].data = [];
        humidityChartOptionsData.series[0].data = [];
      }

      this.setState({
        chartOptions: {
          temperature: temperatureChartOptionsData,
          humidity: humidityChartOptionsData
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
              <span className="sr-only">Carregando...</span>
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