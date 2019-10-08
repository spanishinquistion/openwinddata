// Hourly Wind Speed Probability Density Curve Plot 
var chart_name = 'probability_density'
var pdf = [1.38e+01,1.78e+01,1.76e+01,1.51e+01,1.17e+01,8.30e+00,5.50e+00,3.42e+00,
 2.00e+00,1.11e+00,5.88e-01,2.96e-01,1.42e-01,6.53e-02,2.88e-02,1.22e-02,
 4.94e-03,1.93e-03,7.27e-04,2.63e-04,9.20e-05,3.10e-05,1.01e-05,3.18e-06] 
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