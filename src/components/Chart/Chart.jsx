import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import _ from "lodash";

import { chartOptionsData } from "../../data/chartOptions";

class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chartElementId: this.props.id || "chart",
      chartOptions: _.merge(chartOptionsData, props.options)
    };
  }

  render() {
    const { chartElementId, chartOptions } = this.state;

    return (
      <div id={chartElementId}>
        <HighchartsReact
          highcharts={Highcharts}
          options={chartOptions}
        />
      </div>
    );
  }
}

export default Chart;