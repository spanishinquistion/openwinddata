// Wind Average plot for site 00090 
var chart_name = 'wind_speed_annual_history'
// DATA
var year  = [1988.,1989.,1990.,1991.,1992.,1993.,1994.,1995.,1996.,1997.,1998.,1999.,
 2000.,2001.,2002.,2003.,2004.,2005.,2006.,2007.,2008.,2009.,2010.,2011.,
 2012.,2013.,2014.,2015.,2016.,2017.,2018.] 
var v_ave_hm = [3.64,3.31,3.73,3.19,3.03,3.34,3.75,3.74,3.22,3.15,3.67,3.65,3.55,3.47,
 3.76,2.97,3.33,3.16,3.18,3.48,3.39,3.15,3.2 ,3.35,3.29,3.07,2.99,3.29,
 3.01,3.19,3.1 ] 
var v_ave_S = [4.32,3.93,4.43,3.79,3.6 ,3.96,4.45,4.44,3.82,3.74,4.36,4.34,4.21,4.12,
 4.46,3.53,3.96,3.75,3.78,4.14,4.03,3.74,3.8 ,3.97,3.91,3.65,3.55,3.9 ,
 3.57,3.78,3.68] 
var v_ave_M = [5.06,4.61,5.2 ,4.45,4.22,4.65,5.22,5.21,4.48,4.39,5.11,5.09,4.94,4.84,
 5.24,4.14,4.64,4.4 ,4.43,4.85,4.72,4.39,4.46,4.66,4.58,4.28,4.16,4.58,
 4.19,4.44,4.32] 
var v_ave_L = [5.22,4.75,5.36,4.58,4.35,4.79,5.38,5.36,4.62,4.52,5.27,5.24,5.09,4.98,
 5.39,4.26,4.78,4.53,4.56,5.  ,4.87,4.52,4.59,4.8 ,4.72,4.4 ,4.29,4.71,
 4.32,4.57,4.45] 
var h_m = [1988.,2010.]

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