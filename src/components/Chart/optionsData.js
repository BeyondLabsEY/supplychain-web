const optionsData = {
  chart: {
    type: "line",
    width: 550,
    height: 400,
    style: {
      fontFamily: "\"Noto Sans\", Arial, sans-serif"
    }
  },
  title: {
    text: null,
    style: {
      color: "#646464",
      fontSize: "12px",
      textTransform: "uppercase"
    }
  },
  
  exporting: {
    enabled: false
  },

  colors: ["#00a3ae", "#91278f", "#2c973e", "#ac98db"],

  xAxis: {
    title: {
      enabled: false
    },
    labels: {
      enabled: false
    }
  },

  series: [],
  
  legend: {
    enabled: false
  },

  tooltip: {
    headerFormat: null,
    pointFormat: '<span style="color:{series.color};">{series.name}: <strong>{point.y:,.0f}</strong></span>',
    hideDelay: .15,
    followTouchMove: false
  },

  responsive: {
    rules: [{
      condition: {
        maxWidth: 500
      },
      chartOptions: {
        pane: {
          size: "70%"
        }
      }
    }]
  },

  credits: {
    enabled: false
  }
};

export default optionsData;