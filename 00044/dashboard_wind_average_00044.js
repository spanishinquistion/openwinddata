// Wind Average plot for site 00044 
var chart_name = 'wind_speed_annual_history'
// DATA
var year  = [1969.,1970.,1971.,1972.,1973.,1974.,1975.,1976.,1977.,1978.,1979.,1980.,
 1981.,1982.,1983.,1984.,1985.,1986.,1987.,1988.,1989.,1990.,1991.,1992.,
 1993.,1994.,1995.] 
var v_ave_hm = [3.8 ,3.81,3.54,3.78,3.83,4.17,3.79,3.94,3.95,3.87,3.83,4.23,4.14,4.06,
 4.42,4.15,4.01,4.21,3.93,4.53,4.14,4.39,3.62,3.94,3.96,3.76,3.32] 
var v_ave_S = [4.52,4.53,4.2 ,4.49,4.55,4.95,4.5 ,4.68,4.7 ,4.6 ,4.54,5.02,4.92,4.82,
 5.24,4.93,4.76,5.  ,4.67,5.38,4.91,5.22,4.29,4.68,4.7 ,4.46,3.95] 
var v_ave_M = [5.3 ,5.31,4.93,5.27,5.34,5.81,5.28,5.49,5.51,5.39,5.33,5.89,5.76,5.66,
 6.15,5.78,5.59,5.86,5.47,6.3 ,5.76,6.12,5.04,5.48,5.52,5.23,4.63] 
var v_ave_L = [5.46,5.47,5.08,5.43,5.5 ,5.98,5.44,5.65,5.67,5.55,5.49,6.07,5.94,5.83,
 6.34,5.95,5.76,6.04,5.64,6.5 ,5.94,6.3 ,5.19,5.65,5.68,5.39,4.77] 
var h_m = [1971.,1989.,1993.]

// LEGENDS
var legend_1 = 'Measurement Height' 
var legend_2 = '27m'
var legend_3 = '80m'
var legend_4 = '100m'
var legend_5 = ' no legend' 

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
// LEGENDS
// LEGENDS
var legend_1 = 'Measurement Height' 
var legend_2 = '27m'
var legend_3 = '80m'
var legend_4 = '100m'
var legend_5 = ' no legend' 

// COLORS
// COLORS
var color_1 = 'darkGray' 
var color_2 = 'limeGreen' 
var color_3 = 'Red' 
var color_4 = 'royalBlue' 

// PLOT CONTROLS
// PLOT CONTROLS
var font_1 = 18
var border_width = 4
var solid_line = []
var dash_line = [4,2]
var line_style_1 = solid_line
var line_style_2 = dash_line

/* Data Above Template Below
This section is the change between Mark's area (above)
and webmeister will's below)
*/

var ctx = document.getElementById(chart_name).getContext('2d');

var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: year,
    datasets: [{ 
        data: v_ave_hm,
        label: legend_1,
        borderColor: color_1,
        fill: false,
        borderDash: line_style_2,
        lineCap: 'round',
        pointStyle: 'line',
        borderWidth: border_width,
      }, 
      { 
       data: v_ave_S,
        label: legend_2,
        borderColor: color_2,
        backgroundColor: color_2,
        fill: false,
        borderDash: line_style_1,
        lineCap: 'round',
        pointStyle: 'line',
        borderWidth: border_width,
      },
      { 
       data: v_ave_M,
        label: legend_3,
        borderColor: color_3,
        borderDash: line_style_1,
        backgroundColor: color_3,
        fill: false,
        lineCap: 'round',
        pointStyle: 'line',
        borderWidth: border_width,
      },
      { 
       data: v_ave_L,
        label: legend_4,
        borderColor: color_4,
        backgroundColor: color_4,
        fill: false,
        borderDash: line_style_1,
        lineCap: 'round',
        pointStyle: 'line',
        borderWidth: border_width,
      },
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
          fontSize: font_1
        },
        scaleLabel:{
          display: true,
          labelString: 'Average Wind Speed [m/s]',
          fontSize: font_1
        }
      }],
      xAxes: [{
        ticks: {
          fontSize: font_1
        },
        scaleLabel: {
          display: true,
          labelString: 'Year',
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
          return !item.text.includes(legend_5);
        }
      }
    }
  }
});