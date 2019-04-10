const temperatureChartOptionsData = {
  title: {
    text: "Temperatura ambiente ao longo do tempo"
  },

  colors: ['#91278f'],
  
  yAxis: {
    title: {
      text: "Temperatura (°C)"
    }
  },
  
  series: [{
    name: 'Temperatura',
    data: [21, 22, 24, 22, 25, 26, 22, 24, 24],
  }],

  tooltip: {
    pointFormat: '<span style="color:{series.color};">{series.name}: <strong>{point.y:,.0f}°C</strong></span>'
  }
};

export default temperatureChartOptionsData;