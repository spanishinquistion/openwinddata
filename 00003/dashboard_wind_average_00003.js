// Wind Average plot for site 00003 
var chart_name = 'wind_speed_annual_history'
// DATA
var year  = [1937.,1938.,1939.,1940.,1951.,1952.,1953.,1954.,1955.,1956.,1957.,1958.,
 1959.,1960.,1961.,1962.,1963.,1964.,1965.,1966.,1967.,1968.,1969.,1970.,
 1971.,1972.,1973.,1974.,1975.,1976.,1977.,1978.,1979.,1980.,1981.,1982.,
 1983.,1984.,1985.,1986.,1987.,1988.,1989.,1990.,1991.,1992.,1993.,1994.,
 1995.,1996.,1997.,1998.,1999.,2000.,2001.,2002.,2003.,2004.,2005.,2006.,
 2007.,2008.,2009.,2010.,2011.] 
var v_ave_hm = [3.59,4.55,4.99,4.28,3.95,3.6 ,3.16,4.15,3.44,3.57,3.74,3.58,3.25,3.59,
 3.39,3.55,3.11,3.2 ,3.54,3.4 ,3.68,3.16,3.05,3.4 ,2.96,3.14,3.38,3.9 ,
 3.15,2.96,3.33,3.24,3.22,3.21,3.08,3.05,3.42,2.93,2.85,3.08,2.61,2.97,
 2.72,3.46,3.23,3.43,3.28,3.21,2.96,2.74,2.77,3.35,3.36,3.4 ,3.04,3.06,
 2.67,2.99,2.81,2.95,3.04,3.46,3.21,3.15,3.72] 
var v_ave_S = [3.92,4.96,5.44,4.66,4.31,3.93,3.45,4.52,3.76,3.89,4.08,3.91,3.55,3.92,
 3.7 ,3.87,3.39,3.49,3.86,3.71,4.01,3.45,3.33,3.7 ,3.23,3.42,3.69,4.25,
 3.44,3.23,3.64,3.53,3.51,3.5 ,3.36,3.33,3.73,3.2 ,3.11,3.36,2.85,3.24,
 2.96,3.77,3.52,3.74,3.58,3.5 ,3.23,2.99,3.02,3.66,3.66,3.71,3.32,3.34,
 2.92,3.26,3.06,3.22,3.32,3.77,3.5 ,3.43,4.05] 
var v_ave_M = [4.6 ,5.82,6.38,5.47,5.05,4.61,4.05,5.3 ,4.4 ,4.56,4.79,4.59,4.16,4.59,
 4.34,4.54,3.98,4.09,4.52,4.35,4.71,4.05,3.9 ,4.34,3.79,4.02,4.33,4.99,
 4.03,3.78,4.26,4.14,4.12,4.11,3.94,3.9 ,4.37,3.75,3.64,3.94,3.34,3.8 ,
 3.48,4.42,4.13,4.38,4.2 ,4.1 ,3.79,3.5 ,3.54,4.29,4.3 ,4.35,3.89,3.91,
 3.42,3.82,3.59,3.78,3.89,4.42,4.11,4.02,4.75] 
var v_ave_L = [4.74,5.99,6.58,5.64,5.21,4.75,4.17,5.46,4.54,4.7 ,4.93,4.72,4.29,4.73,
 4.47,4.67,4.1 ,4.21,4.66,4.48,4.85,4.17,4.02,4.47,3.9 ,4.14,4.46,5.14,
 4.16,3.9 ,4.39,4.27,4.24,4.23,4.06,4.02,4.5 ,3.86,3.75,4.06,3.45,3.91,
 3.58,4.56,4.26,4.51,4.32,4.22,3.9 ,3.61,3.65,4.42,4.43,4.49,4.01,4.03,
 3.52,3.94,3.7 ,3.89,4.01,4.56,4.23,4.15,4.9 ] 
var h_m = [1950.,1972.,1993.,2008.]

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