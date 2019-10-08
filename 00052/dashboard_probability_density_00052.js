// Hourly Wind Speed Probability Density Curve Plot 
var chart_name = 'probability_density'
var pdf = [1.86e+01,2.16e+01,1.91e+01,1.45e+01,9.75e+00,5.99e+00,3.39e+00,1.79e+00,
 8.79e-01,4.07e-01,1.78e-01,7.33e-02,2.87e-02,1.07e-02,3.78e-03,1.28e-03,
 4.13e-04,1.27e-04,3.77e-05,1.07e-05,2.90e-06,7.56e-07,1.90e-07,4.58e-08] 
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