// hi_res_Data Quality
var chart_name = 'data_quality'
var data_quality = [100.0, 100.0, 100.0, 100.0, 99.9971, 100.0, 99.979, 99.9373, 100.0, 99.8437, 99.5971, 99.5839, 99.7528, 99.956, 99.9277, 99.655, 99.8687, 99.4578, 100.0, 100.0, 100.0, 100.0, 99.5186, 99.7736, 99.9089, 98.3942, 99.7979] 
var year = [1992.0, 1993.0, 1994.0, 1995.0, 1996.0, 1997.0, 1998.0, 1999.0, 2000.0, 2001.0, 2002.0, 2003.0, 2004.0, 2005.0, 2006.0, 2007.0, 2008.0, 2009.0, 2010.0, 2011.0, 2012.0, 2013.0, 2014.0, 2015.0, 2016.0, 2017.0, 0.0] 
// COLORS
var color_1 = 'black' 

// PLOT CONTROLS
var font_1 = 18
//Template
//Template
var ctx = document.getElementById(chart_name).getContext('2d');

var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: year,
    datasets: [{ 
        data: data_quality,
        label: 'average',
        borderColor: color_1,
        fill: false,
        borderDash: line_style_1,
        lineCap: 'round',
        pointStyle: 'line',
        borderWidth: border_width_1,
      }
    ]
  },
  options: {

    title: {
      display: false,
      text: 'Quality [%]',
      fontSize: font_1,
    },
    elements: {
      point: {
        radius: 0
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: false,
          fontSize: font_1
        },
        scaleLabel:{
          display: false,
          labelString: 'Wind Speed [m/s]',
          fontSize: font_1
        }
      }],
      xAxes: [{
        ticks: {
          fontSize: font_1,
          autoSkip:false
        },
        scaleLabel: {
          display: true,
          labelString: 'Year',
          fontSize: font_1
        }
      }]
    },    legend:{
      display: false,
      labels:{
        usePointStyle: true,
        fontSize: font_1
      }
    }
  }
});