import moment from "moment";

const temperatureChartOptionsData = {
  title: {
    text: "Temperatura ambiente ao longo do tempo"
  },

  colors: ["#91278f"],

  yAxis: {
    title: {
      text: "Temperatura (°C)"
    }
  },

  series: [{
    name: "Temperatura",
    data: []
  }],

  tooltip: {
    formatter() {
      return (`
        <span style="color: ${this.series.color};">${this.series.name}</span>
        <strong>${this.y}°C</strong>
        <br />
        <small>${moment.unix(this.x).format("D/M/YYYY HH:mm:ss")}</small>
      `);
    }
  }
};

export default temperatureChartOptionsData;