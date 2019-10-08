// Hourly Wind Speed Probability Density Curve Plot 
var chart_name = 'probability_density'
var pdf = [1.05e+01,1.45e+01,1.55e+01,1.44e+01,1.23e+01,9.76e+00,7.27e+00,5.14e+00,
 3.45e+00,2.22e+00,1.37e+00,8.08e-01,4.60e-01,2.52e-01,1.34e-01,6.83e-02,
 3.38e-02,1.62e-02,7.51e-03,3.38e-03,1.48e-03,6.26e-04,2.58e-04,1.03e-04] 
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