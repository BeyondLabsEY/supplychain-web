import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import optionsData from "./optionsData";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartId: this.props.id || "chart",
      chartOptions: optionsData
    };
  }

  mergeOptions() {
    const presetOptions = optionsData;
    const customOptions = this.props.options || {};
    const mergedOptions = Object.assign(presetOptions, customOptions);
    this.setState({
      chartOptions: mergedOptions
    });
  }

  componentWillMount() {
    this.mergeOptions();
  }

  componentDidMount() {
    const chartContainer = document.getElementById(this.state.chartId);
    chartContainer ? ReactDOM.render(<HighchartsReact highcharts={Highcharts} options={this.state.chartOptions} />, chartContainer) : false;
  }

  render() {
    return (
      <div id={this.state.chartId}></div>
    );
  }
}

export default Chart;