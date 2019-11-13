// hi_res_Data Quality
var chart_name = 'hi_res_data_quality'
var data_quality = [99.9573, 100.0, 67.508, 100.0, 100.0, 100.0, 99.9962, 99.9981, 99.9863, 99.9634, 99.9201, 99.9962, 100.0, 100.0, 100.0, 98.0369, 99.9943, 100.0] 
var year = [1993.0, 1994.0, 1995.0, 1996.0, 1997.0, 1998.0, 1999.0, 2000.0, 2001.0, 2002.0, 2003.0, 2004.0, 2005.0, 2006.0, 2007.0, 2008.0, 2009.0, 2010.0] 
var ymin = 62.507999999999996 
// COLORS
var color_1 = 'black' 

// PLOT CONTROLS
var font_1 = 12
// COLORS
// COLORS
var color_1 = 'black' 

// PLOT CONTROLS
// PLOT CONTROLS
var font_1 = 18
//Template
//Template
var ctx = document.getElementById(chart_name).getContext('2d');

var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: year,
    datasets: [{ 
        data: data_quality,
        label: 'average',
        borderColor: color_1,
        backgroundColor: color_1,
        fill: true,
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
          suggestedMin: ymin, 
          suggestedMax: 101, 
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