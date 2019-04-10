import React, { Component } from "react";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import _ from 'lodash';

import optionsData from "./optionsData";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartId: this.props.id || "chart",
      chartOptions: _.merge(optionsData, props.options)
    };
  }

  render() {
    const { chartId, chartOptions } = this.state;

    return (
      <div id={chartId}>
        <HighchartsReact
          highcharts={Highcharts}
          options={chartOptions}
        />
      </div>
    );
  }
}

export default Chart;