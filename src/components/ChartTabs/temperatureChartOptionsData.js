const temperatureChartOptionsData = {
  title: {
    text: "Temperatura ambiente ao longo do tempo"
  },

  colors: ['#91278f'],
  
  yAxis: {
    title: {
      text: "Temperatura (ºC)"
    }
  },
  
  series: [{
    name: 'Temperatura',
    data: [21, 22, 24, 22, 25, 26, 22, 24, 24],
  }]
};

export default temperatureChartOptionsData;