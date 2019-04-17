import moment from "moment";

const humidityChartOptionsData = {
  title: {
    text: "Umidade relativa do ar ao longo do tempo"
  },

  colors: ["#00a3ae"],
  
  yAxis: {
    title: {
      text: "Umidade (%)"
    }
  },
  
  series: [{
    name: "Umidade",
    data: []
  }],

  tooltip: {
    formatter() {
      return (`
        <span style="color: ${this.series.color};">${this.series.name}</span>
        <strong>${this.y}%</strong>
        <br />
        <small>${moment.unix(this.x).format("D/M/YYYY HH:mm:ss")}</small>
      `);
    }
  }
};

export default humidityChartOptionsData;