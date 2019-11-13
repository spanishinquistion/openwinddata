// Wind Average plot for site 00003 
var chart_name = 'hi_res_wind_speed_annual_history'
// DATA
var year  = [1993.,1994.,1995.,1996.,1997.,1998.,1999.,2000.,2001.,2002.,2003.,2004.,
 2005.,2006.,2007.,2008.,2009.,2010.,2011.] 
var v_ave_hm = [2.98,3.24,2.3 ,2.73,2.73,3.31,3.36,3.38,3.08,3.1 ,2.71,2.98,2.81,2.93,
 3.04,3.46,3.2 ,3.14,3.71] 
var v_ave_S = [3.25,3.53,2.51,2.97,2.98,3.62,3.66,3.69,3.36,3.38,2.95,3.25,3.06,3.2 ,
 3.32,3.77,3.49,3.42,4.05] 
var v_ave_M = [3.81,4.14,2.94,3.49,3.49,4.24,4.29,4.33,3.95,3.97,3.46,3.81,3.59,3.75,
 3.89,4.42,4.1 ,4.01,4.75] 
var v_ave_L = [3.92,4.27,3.03,3.59,3.6 ,4.37,4.42,4.46,4.06,4.09,3.57,3.93,3.7 ,3.86,
 4.  ,4.55,4.22,4.14,4.89] 
// HIRES DATA
var n = null 
var hi_res_year  = [1993.,1994.,1995.,1996.,1997.,1998.,1999.,2000.,2001.,2002.,2003.,2004.,
 2005.,2006.,2007.,2008.,2009.,2010.,2011.] 
var hi_res_v_ave_hm = [2.98,3.24,2.3 ,2.73,2.73,3.31,3.36,3.38,3.08,3.1 ,2.71,2.98,2.81,2.93,
 3.04,3.46,3.2 ,3.14,3.71] 
var hi_res_v_ave_S = [3.25,3.53,2.51,2.97,2.98,3.62,3.66,3.69,3.36,3.38,2.95,3.25,3.06,3.2 ,
 3.32,3.77,3.49,3.42,4.05] 
var hi_res_v_ave_M = [3.81,4.14,2.94,3.49,3.49,4.24,4.29,4.33,3.95,3.97,3.46,3.81,3.59,3.75,
 3.89,4.42,4.1 ,4.01,4.75] 
var hi_res_v_ave_L = [3.92,4.27,3.03,3.59,3.6 ,4.37,4.42,4.46,4.06,4.09,3.57,3.93,3.7 ,3.86,
 4.  ,4.55,4.22,4.14,4.89] 
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