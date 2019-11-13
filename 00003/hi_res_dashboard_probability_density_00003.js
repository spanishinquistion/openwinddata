// Hi Res Wind Speed Probability Density Curve Plot 
var chart_name = 'probability_density'
var pdf = [8.79e+00,1.31e+01,1.49e+01,1.45e+01,1.29e+01,1.05e+01,8.07e+00,5.81e+00,
 3.96e+00,2.57e+00,1.59e+00,9.35e-01,5.28e-01,2.85e-01,1.48e-01,7.37e-02,
 3.53e-02,1.63e-02,7.21e-03,3.08e-03,1.27e-03,5.06e-04,1.94e-04,7.21e-05] 
var v  = [ 1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24] 
var color_1 = 'black' 
var font_1 = 12
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