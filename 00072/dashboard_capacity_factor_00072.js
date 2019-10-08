var chart_name = 'capacity_factor'
var cp  = [4.,5.,6.] 
var color_1 = 'black' 
var color_2 = 'limeGreen' 
var color_3 = 'Red' 
var color_4 = 'royalBlue' 
var font_1 = 18
var labels = ['S', 'M', 'L'] 
// Template below //
// color_2 = turbine 1, color_2 = turbine 2, color_3 = turbin 3
var ctx = document.getElementById(chart_name).getContext('2d');

var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: labels,
    datasets: [{ 
        data: cp,
        label: v,
        backgroundColor: [color_2, color_3, color_4],
        fill: false
      },
      
    ]
  },
  options: {
    legend: {
      display: false
    },
    title: {
      display: false,
    },
    elements: {
      point: {
        radius: 0
      }
    },
    scales: {
      yAxes: [{
        ticks:{
          display: true,
          beginAtZero: true,
          fontSize: font_1
        },
        scaleLabel:{
          display: true,
          labelString: 'Capacity Factor [%]',
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
          labelString: 'Turbine Model',
          fontSize: font_1
        }
      }]
    }
  }
});