// Hourly Wind Speed Probability Density Curve Plot 
var chart_name = 'probability_density'
var pdf = [21.28,13.23, 9.18, 6.71, 5.05, 3.89, 3.04, 2.41, 1.93, 1.56, 1.26, 1.03,
  0.85, 0.7 , 0.58, 0.49, 0.41, 0.34, 0.29, 0.24, 0.2 , 0.17, 0.15, 0.13] 
var v  = [ 1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24] 
var color_1 = 'Red' 
var font_1 = 18
// Data Above Template Below
var ctx = document.getElementById(chart_name).getContext('2d');

var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: v,
    datasets: [{ 
        data: pdf,
        label: v,
        backgroundColor: color_1,
        fill: false
      },
      
    ]
  },
  options: {
    legend: {
      display: false
    },
    title: {
      display: true,
      text: ' '
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
          fontSize: font_1
        },
        scaleLabel:{
          display: true,
          labelString: 'Probability [%]',
          fontSize: font_1
        }
      }],
      xAxes: [{
        ticks:{
          beginAtZero: true,
          fontSize: font_1
        },
        scaleLabel: {
          display: true,
          labelString: 'Wind Speed [m/s]',
          fontSize: font_1

        }
      }]
    }
  }
});