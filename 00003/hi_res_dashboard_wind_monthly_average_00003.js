// Monthly wind average plot for site 00003 
var chart_name = 'hi_res_monthly_ave_wind_speed'
var month  = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] 
var m_vave = [4.05, 3.885, 3.629, 2.945, 2.468, 2.321, 2.462, 2.256, 2.441, 2.93, 3.384, 3.944]
var m_std_plus = [5.32, 5.07, 4.72, 3.84, 3.21, 3.02, 3.2, 2.97, 3.2, 3.9, 4.46, 5.18]
var m_std_minus = [2.78, 2.7, 2.54, 2.05, 1.72, 1.62, 1.72, 1.54, 1.68, 1.96, 2.31, 2.71]
var y_max = 7.0
var labels = month
var xaxis_label = 'Month' 
// COLORS
var color_1 = 'darkGray' 
var color_2 = 'limeGreen' 
// PLOT CONTROLS
var font_1 = 18
var border_width_1 = 4
var border_width_2 = 4
var solid_line = []
var dash_line = [4,2]
var line_style_1 = solid_line
var line_style_2 = dash_line
//Template
//Template
var ctx = document.getElementById(chart_name).getContext('2d');

var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: labels,
    datasets: [{ 
        data: m_vave,
        label: 'average',
        borderColor: color_3,
        fill: false,
        borderDash: line_style_1,
        lineCap: 'round',
        pointStyle: 'line',
        borderWidth: border_width_1,
      },
     { 
        data: m_std_plus,
        label: '+/-\u{03C3}',
        borderColor: color_1,
        fill: false,
        borderDash: line_style_2,
        lineCap: 'round',
        pointStyle: 'line',
        borderWidth: border_width_1,
      },
      { 
        data: m_std_minus,
        label: legend_5,
        borderColor: color_1,
        fill: false,
        borderDash: line_style_2,
        lineCap: 'round',
        pointStyle: 'line',
        borderWidth: border_width_1,
      }
    ]
  },
  options: {

    title: {
      display: false,
      text: 'Average Wind Speed',
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
          beginAtZero: true,
          max: y_max,
          fontSize: font_1
        },
        scaleLabel:{
          display: true,
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
          labelString: xaxis_label,
          fontSize: font_1
        }
      }]
    },    legend:{
      display: true,
      labels:{
        usePointStyle: true,
        fontSize: font_1,
        filter: function(item, chart) {
          // Logic to remove a particular legend item goes here
          // Logic to remove a particular legend item goes here
          // Logic to remove a particular legend item goes here
          // Logic to remove a particular legend item goes here
          return !item.text.includes(legend_5);
        }
      }
    }
  }
});