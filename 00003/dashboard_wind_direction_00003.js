// Annual Wind Rose Data
var chart_name = 'wind_rose'
var wind_dir = [ 6.5 , 4.88, 4.08, 4.23, 5.39, 2.08, 1.9 , 2.49, 9.04,13.22,16.21,10.61,
  9.62, 3.44, 2.92, 3.39] 
var max_percent_plot = 16.21 
var month = 0 
var line_width = 4 
var plot_center_x = 250 
var plot_center_y = 250 
var rose_radius = 200 
var font_size = 18 
var line_color = 'lightGray'
var windRosecolor = 'Red'

 
// Plot Variables
//var windRosecolor = 'rgba(300, 149, 237, 1)';

// Template below

//var rose_radius = plot_center_x *.75
var radial_lines = 5
var font_1 = font_size + 'px arial'
var map_dir = ['E','SE','S','SW','W','NW','N','NE']
var map_dir_delta_x = [font_size/4,0,-font_size/4,0,-font_size,0,-font_size/4,0]
var map_dir_delta_y = [font_size/4,0,font_size,0,font_size/4,0,-font_size/2,0]
var gap = 5;
var arrayLength = wind_dir.length
var percent_val = Math.ceil(max_percent_plot/5)*5
var delta_w = 360/arrayLength

// Plot 
var ctx = document.getElementById(chart_name).getContext("2d");

// Circular Lines
ctx.beginPath();
for(i = 0; i < radial_lines+1 ; i++){
ctx.arc(plot_center_x,plot_center_y,rose_radius/(radial_lines+1)*i,0, 2*Math.PI);
}
ctx.lineWidth = line_width;
ctx.strokeStyle = line_color;
ctx.stroke();

//Radial Lines
ctx.font = font_1
ctx.beginPath();
angle = 0
for(i = 0; i < 8 ; i++){
    rl = rose_radius
    if ( i % 2 != 0) {
        rl = rl*radial_lines/(radial_lines+1)
    }
    angle = i*45* Math.PI/180
    x2 = plot_center_x + rl * Math.cos(angle)
    y2 = plot_center_y + rl * Math.sin(angle )
    ctx.moveTo( plot_center_x, plot_center_y)
    ctx.lineTo(x2,y2);
    if ( i % 2 == 0) {
        ctx.fillText(map_dir[i], x2+map_dir_delta_x[i] , y2+map_dir_delta_y[i])
    }
}
ctx.stroke();

// Wedges   
var i
    for(i = 0; i < arrayLength ; i++){
    var r = wind_dir[i]/max_percent_plot*rose_radius*radial_lines/(radial_lines+1)
    var angle_1 = Math.PI/180*( -90 - delta_w/2 + gap/2 + delta_w*i )
    var angle_2 = Math.PI/180*( -90 + delta_w/2 - gap/2 + delta_w*i )
    ctx.beginPath();
    ctx.moveTo(plot_center_x + 0, plot_center_y);
    ctx.arc(plot_center_x, plot_center_y, r, angle_1, angle_2);
    ctx.closePath();
    ctx.fillStyle = windRosecolor;
    ctx.fill();
}
ctx.beginPath();
var i
    for(i = 1; i < radial_lines+1 ; i++){
ctx.fillStyle = "black"
ctx.fillText ( percent_val*i/(radial_lines)+'%' ,plot_center_x-12, plot_center_y - rose_radius * i/(radial_lines+1))
ctx.strokeStyle = line_color;
ctx.stroke();
}

