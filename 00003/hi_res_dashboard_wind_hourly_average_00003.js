// Hourly wind average plot for site 00003 
var chart_name = 'hi_res_hourly_ave_wind_speed'
var hour  = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23] 
var m_vave = [2.788, 2.789, 2.796, 2.806, 2.795, 2.805, 2.86, 2.977, 3.136, 3.294, 3.433, 3.532, 3.56, 3.534, 3.462, 3.354, 3.219, 3.076, 2.925, 2.846, 2.812, 2.8, 2.8, 2.797]
var m_std_plus = [3.8, 3.8, 3.8, 3.81, 3.8, 3.82, 3.89, 4.02, 4.18, 4.35, 4.51, 4.6, 4.62, 4.57, 4.46, 4.34, 4.18, 4.03, 3.88, 3.81, 3.8, 3.8, 3.8, 3.81]
var m_std_minus = [1.78, 1.78, 1.79, 1.8, 1.79, 1.79, 1.83, 1.94, 2.09, 2.24, 2.36, 2.47, 2.51, 2.5, 2.46, 2.37, 2.26, 2.12, 1.97, 1.88, 1.82, 1.8, 1.79, 1.79]
var y_max = 6.0
var labels = hour
var xaxis_label = 'Time [Hour]' 
// COLORS
var color_1 = 'darkGray' 
var color_2 = 'limeGreen' 
var color_3 = 'Red' 
var color_4 = 'royalBlue' 

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