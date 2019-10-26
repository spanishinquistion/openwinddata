// Wind Average plot for site 00011 
var chart_name = 'hi_res_wind_speed_annual_history'
// DATA
var year  = [1992.,1993.,1994.,1995.,1996.,1997.,1998.,1999.,2000.,2001.,2002.,2003.,
 2004.,2005.,2006.,2007.,2008.,2009.,2010.,2011.,2012.,2013.,2014.,2015.,
 2016.,2017.,2018.] 
var v_ave_hm = [2.65,2.2 ,3.13,2.6 ,2.3 ,2.16,2.7 ,2.51,2.24,2.76,2.67,2.61,2.88,2.59,
 2.76,2.97,2.88,2.73,2.73,2.56,2.82,2.73,2.54,2.81,2.68,2.66,2.64] 
var v_ave_S = [3.14,2.61,3.72,3.09,2.73,2.57,3.21,2.97,2.66,3.27,3.17,3.09,3.42,3.08,
 3.28,3.52,3.42,3.24,3.24,3.04,3.35,3.24,3.01,3.33,3.19,3.16,3.13] 
var v_ave_M = [3.69,3.06,4.36,3.62,3.2 ,3.01,3.77,3.49,3.12,3.84,3.71,3.63,4.01,3.61,
 3.85,4.13,4.01,3.8 ,3.8 ,3.57,3.92,3.8 ,3.53,3.91,3.74,3.71,3.68] 
var v_ave_L = [3.8 ,3.15,4.49,3.73,3.29,3.1 ,3.88,3.59,3.21,3.96,3.83,3.74,4.13,3.72,
 3.97,4.26,4.13,3.91,3.92,3.67,4.04,3.92,3.64,4.03,3.85,3.82,3.79] 
// HIRES DATA
var n = null 
var hi_res_year  = [1992.,1993.,1994.,1995.,1996.,1997.,1998.,1999.,2000.,2001.,2002.,2003.,
 2004.,2005.,2006.,2007.,2008.,2009.,2010.,2011.,2012.,2013.,2014.,2015.,
 2016.,2017.,2018.] 
var hi_res_v_ave_hm = [2.65,2.2 ,3.13,2.6 ,2.3 ,2.16,2.7 ,2.51,2.24,2.76,2.67,2.61,2.88,2.59,
 2.76,2.97,2.88,2.73,2.73,2.56,2.82,2.73,2.54,2.81,2.68,2.66,2.64] 
var hi_res_v_ave_S = [3.14,2.61,3.72,3.09,2.73,2.57,3.21,2.97,2.66,3.27,3.17,3.09,3.42,3.08,
 3.28,3.52,3.42,3.24,3.24,3.04,3.35,3.24,3.01,3.33,3.19,3.16,3.13] 
var hi_res_v_ave_M = [3.69,3.06,4.36,3.62,3.2 ,3.01,3.77,3.49,3.12,3.84,3.71,3.63,4.01,3.61,
 3.85,4.13,4.01,3.8 ,3.8 ,3.57,3.92,3.8 ,3.53,3.91,3.74,3.71,3.68] 
var hi_res_v_ave_L = [3.8 ,3.15,4.49,3.73,3.29,3.1 ,3.88,3.59,3.21,3.96,3.83,3.74,4.13,3.72,
 3.97,4.26,4.13,3.91,3.92,3.67,4.04,3.92,3.64,4.03,3.85,3.82,3.79] 
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
//Template
//Template

var ctx = document.getElementById(chart_name).getContext('2d');

var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: year,
    datasets: [{ 
        data: v_ave_hm,
        label: legend_5,
        borderColor: color_1,
        fill: false,
        borderDash: line_style_2,
        lineCap: 'round',
        pointStyle: 'line',
        borderWidth: border_width_1,
      }, 
      { 
       data: v_ave_S,
        label: legend_5,
        borderColor: color_2,
        backgroundColor: color_2,
        fill: false,
        borderDash: line_style_2,
        lineCap: 'round',
        pointStyle: 'line',
        borderWidth: border_width_1,
      },
      { 
       data: v_ave_M,
        label: legend_5,
        borderColor: color_3,
        borderDash: line_style_2,
        backgroundColor: color_3,
        fill: false,
        lineCap: 'round',
        pointStyle: 'line',
        borderWidth: border_width_1,
      },
      { 
       data: v_ave_L,
        label: legend_5,
        borderColor: color_4,
        backgroundColor: color_4,
        fill: false,
        borderDash: line_style_2,
        lineCap: 'round',
        pointStyle: 'line',
        borderWidth: border_width_1,
      },
      { 
       data: hi_res_v_ave_hm,
        label: legend_1,
        borderColor: color_1,
        backgroundColor: color_1,
        fill: false,
        borderDash: line_style_1,
        lineCap: 'round',
        pointStyle: 'line',
        borderWidth: border_width_2,
      },
      { 
       data: hi_res_v_ave_S,
        label: legend_2,
        borderColor: color_2,
        backgroundColor: color_2,
        fill: false,
        borderDash: line_style_1,
        lineCap: 'round',
        pointStyle: 'line',
        borderWidth: border_width_2,
      },
      { 
       data: hi_res_v_ave_M,
        label: legend_3,
        borderColor: color_3,
        backgroundColor: color_3,
        fill: false,
        borderDash: line_style_1,
        lineCap: 'round',
        pointStyle: 'line',
        borderWidth: border_width_2,
      },
      { 
       data: hi_res_v_ave_L,
        label: legend_4,
        borderColor: color_4,
        backgroundColor: color_4,
        fill: false,
        borderDash: line_style_1,
        lineCap: 'round',
        pointStyle: 'line',
        borderWidth: border_width_2,
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
          return !item.text.includes(legend_5);
        }
      }
    }
  }
});