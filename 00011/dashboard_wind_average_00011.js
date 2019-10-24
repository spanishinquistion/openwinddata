// Wind Average plot for site 00011 
var chart_name = 'wind_speed_annual_history'
// DATA
var year  = [1980.,1981.,1982.,1983.,1984.,1985.,1986.,1987.,1988.,1989.,1990.,1991.,
 1992.,1993.,1994.,1995.,1996.,1997.,1998.,1999.,2000.,2001.,2002.,2003.,
 2004.,2005.,2006.,2007.,2008.,2009.,2010.,2011.,2012.,2013.,2014.,2015.,
 2016.,2017.,2018.] 
var v_ave_hm = [1.49,1.22,1.65,2.28,1.97,2.08,1.95,2.14,2.06,1.78,2.06,2.39,2.49,2.61,
 3.17,2.56,2.31,2.17,2.7 ,2.52,2.42,2.33,2.47,2.51,2.89,2.67,2.77,2.87,
 2.51,2.74,2.74,2.57,2.83,2.74,2.54,2.82,2.69,2.67,2.65] 
var v_ave_S = [1.77,1.45,1.96,2.7 ,2.34,2.47,2.32,2.54,2.45,2.12,2.44,2.83,2.95,3.1 ,
 3.77,3.04,2.74,2.58,3.21,2.99,2.87,2.76,2.93,2.98,3.43,3.17,3.29,3.41,
 2.97,3.25,3.25,3.05,3.36,3.25,3.02,3.35,3.2 ,3.17,3.15] 
var v_ave_M = [2.08,1.7 ,2.3 ,3.17,2.75,2.89,2.72,2.98,2.87,2.48,2.87,3.32,3.47,3.63,
 4.42,3.57,3.22,3.02,3.77,3.5 ,3.37,3.24,3.44,3.5 ,4.03,3.72,3.86,4.  ,
 3.49,3.81,3.82,3.58,3.93,3.81,3.54,3.92,3.75,3.72,3.69] 
var v_ave_L = [2.14,1.75,2.37,3.27,2.83,2.98,2.8 ,3.07,2.96,2.56,2.95,3.42,3.57,3.74,
 4.55,3.68,3.31,3.11,3.88,3.61,3.47,3.34,3.54,3.6 ,4.15,3.83,3.97,4.12,
 3.59,3.92,3.93,3.69,4.05,3.93,3.65,4.04,3.86,3.83,3.8 ] 
var h_m = [1980.,1987.,2005.,2018.]

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