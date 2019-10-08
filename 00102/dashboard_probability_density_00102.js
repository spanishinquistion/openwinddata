// Hourly Wind Speed Probability Density Curve Plot 
var chart_name = 'probability_density'
var pdf = [0.82,2.08,3.51,4.96,6.3 ,7.42,8.24,8.7 ,8.77,8.49,7.89,7.07,6.1 ,5.08,
 4.08,3.16,2.36,1.7 ,1.18,0.79,0.51,0.32,0.19,0.11] 
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