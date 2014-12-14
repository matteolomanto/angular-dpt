/**
 * Custom Durbrow Theme for Highcharts JS
 * @author Laura Vecchio
 */

Highcharts.theme = {
  colors: ["#FF3F40", "#2BDCCD", "#33363C", "#22262B", "#FFFFFF"],
  chart: {
    backgroundColor: null,
    style: {
      fontFamily: "Dosis, sans-serif"
    }
  },
  title: {
    style: {
      fontSize: '16px',
      fontWeight: 'bold',
      textTransform: 'uppercase'
    }
  },
  tooltip: {
    borderWidth: 0,
    backgroundColor: 'rgba(219,219,216,0.8)',
    shadow: false
  },
  legend: {
    itemStyle: {
      fontWeight: 'bold',
      fontSize: '13px'
    }
  },
  xAxis: {
    gridLineWidth: 1,
    labels: {
      style: {
        fontSize: '12px'
      }
    }
  },
  yAxis: {
    minorTickInterval: 'auto',
    title: {
      style: {
        textTransform: 'uppercase'
      }
    },
    labels: {
      style: {
        fontSize: '12px'
      }
    }
  },
  plotOptions: {
    candlestick: {
      lineColor: '#404048'
    }
  },


  // General
  background2: '#F0F0EA'

};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);
