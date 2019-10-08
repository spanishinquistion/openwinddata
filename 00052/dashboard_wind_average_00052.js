// Wind Average plot for site 00052 
var chart_name = 'wind_speed_annual_history'
// DATA
var year  = [1969.,1970.,1971.,1972.,1973.,1974.,1975.,1976.,1977.,1978.,1979.,1980.,
 1981.,1982.,1983.,1984.,1985.,1986.,1987.,1988.,1989.,1990.,1991.,1992.,
 1993.,1994.,1995.,1996.,1997.,1998.,1999.,2000.,2001.] 
var v_ave_hm = [3.73,3.47,3.1 ,3.1 ,3.24,3.36,3.08,2.97,3.  ,3.  ,3.04,3.29,3.17,2.83,
 3.06,2.86,2.71,3.04,3.04,2.97,2.8 ,3.2 ,2.69,2.83,2.77,2.6 ,2.35,2.75,
 2.32,2.42,2.3 ,2.26,2.22] 
var v_ave_S = [4.43,4.12,3.68,3.68,3.85,3.98,3.65,3.52,3.56,3.57,3.61,3.91,3.76,3.36,
 3.63,3.4 ,3.22,3.61,3.61,3.53,3.32,3.79,3.2 ,3.37,3.29,3.08,2.79,3.27,
 2.75,2.88,2.73,2.68,2.64] 
var v_ave_M = [5.19,4.83,4.31,4.32,4.51,4.67,4.28,4.13,4.18,4.18,4.23,4.58,4.41,3.94,
 4.26,3.99,3.78,4.23,4.23,4.14,3.89,4.45,3.75,3.95,3.86,3.61,3.28,3.83,
 3.22,3.37,3.2 ,3.14,3.09] 
var v_ave_L = [5.35,4.97,4.44,4.45,4.65,4.81,4.41,4.26,4.3 ,4.31,4.36,4.72,4.55,4.06,
 4.39,4.11,3.89,4.36,4.36,4.27,4.01,4.58,3.86,4.07,3.98,3.72,3.38,3.95,
 3.32,3.47,3.3 ,3.24,3.18] 
var h_m = [1973.,1973.,1975.,1980.,1982.]

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