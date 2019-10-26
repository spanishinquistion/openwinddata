// Hi Res Wind Speed Probability Density Curve Plot 
var chart_name = 'probability_density'
var pdf = [1.70e+01,1.78e+01,1.57e+01,1.28e+01,9.82e+00,7.20e+00,5.08e+00,3.48e+00,
 2.32e+00,1.50e+00,9.54e-01,5.93e-01,3.61e-01,2.16e-01,1.27e-01,7.33e-02,
 4.17e-02,2.34e-02,1.29e-02,7.02e-03,3.77e-03,2.00e-03,1.05e-03,5.43e-04] 
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