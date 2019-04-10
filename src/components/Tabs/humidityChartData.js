const humidityChartOptionsData = {
  title: {
    text: "Umidade relativa do ar ao longo do tempo"
  },

  colors: ['#00a3ae'],
  
  yAxis: {
    title: {
      text: "Umidade (%)"
    }
  },
  
  series: [{
    name: 'Umidade',
    data: [61, 58, 50, 56, 60, 59, 58, 61, 57],
  }],

  tooltip: {
    pointFormat: '<span style="color:{series.color};">{series.name}: <strong>{point.y:,.0f}%</strong></span>'
  }
};

export default humidityChartOptionsData;