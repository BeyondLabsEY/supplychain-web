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
    data: [
      [1554918943, 24],
      [1554918954, 27],
      [1554918972, 25],
      [1554918980, 25],
      [1554919006, 27]
    ]
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