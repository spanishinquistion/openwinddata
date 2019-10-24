// Annual Wind Rose Data
var chart_name = 'wind_rose'
var color_1 = 'black' 
var color_3 = 'Red' 
var grid_line_width_1 = 4
var grid_line_width_2 = 4
var font_1 = '18px sans-serif' 
var font_2 = '18px sans-serif' 
var wind_dir = ['23.0', '9.0', '4.0', '1.0', '1.0', '1.0', '1.0', '3.0', '21.0', '18.0', '11.0', '2.0', '1.0', '1.0', '1.0', '3.0'] 
var wind_dir = [wind_dir[0],wind_dir[1],wind_dir[2],wind_dir[3],wind_dir[4],wind_dir[5],wind_dir[6],wind_dir[7],wind_dir[8],wind_dir[9],wind_dir[10],wind_dir[11],wind_dir[12],wind_dir[13],wind_dir[14],wind_dir[15]];
var max_percent_plot = 23.38713925574745 
// Data above, Template Below
var strokeStylecolor = 'rgba(0,0,0,0.2)'
var windRosecolor = 'rgba(100, 149, 237, 1)';
var rad_angle_1 = -135
var rad_delta_angle = 90
var gap = 5;

    var arrayLength = wind_dir.length;
    for (var i = 0; i < arrayLength; i++) {
        wind_dir[i] = map_range(wind_dir[i], 0, max_percent_plot, 0, 1); /* remap to 0 1 */
        console.log(wind_dir[i]);
    }
var delta_w = 360/arrayLength
window.addEventListener('load', eventWindowLoaded, false);

function map_range(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}

function eventWindowLoaded () {
  canvasApp(); 
}
function canvasSupport (e) {
  
    return !!e.getContext;

}
function canvasApp () {
  var myCanvas = document.getElementById('wind_direction');

  if (!canvasSupport(myCanvas)) {
    return; 
  }
  
  var ctx = myCanvas.getContext('2d');
  
  function getRads(degrees) {
    return (Math.PI * degrees) / 180;
  }
  
  function drawScreen () {
   
   var arc = {
      x: myCanvas.width / 2,
      y: myCanvas.height / 2,
      r: 180
    },
        w = myCanvas.width,
        h = myCanvas.height;
    
    ctx.save();
 
    ctx.restore();
    ctx.strokeStyle = strokeStylecolor;

    ctx.lineWidth = grid_line_width_2;
    ctx.beginPath();
    ctx.moveTo(30, h / 2 - 0.5);
    ctx.lineTo(w - 20,h / 2 - 0.5);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(w / 2 - 0.5, 20);
    ctx.lineTo(w / 2 - 0.5, h - 20);
    ctx.stroke();
    
    // Radial lines 
    var i;
    for(i = 0; i < 4 ; i++){
        ctx.beginPath();
        ctx.arc(arc.x, arc.y, arc.r,getRads(rad_angle_1+rad_delta_angle*i), getRads(rad_angle_1+rad_delta_angle*i), false);
        ctx.lineTo(arc.x, arc.y);
        ctx.stroke();
    }
     
    ctx.fillStyle = color_3; // rose section color

    // Wind Rose Wedgies
    var i;
    for(i = 0; i < arrayLength ; i++){
        var angle_1 = -90 - delta_w/2 + gap/2 + delta_w*i
        var angle_2 = -90 + delta_w/2 - gap/2 + delta_w*i
        ctx.beginPath();
        ctx.moveTo(w/2 + 0, h/2);
        ctx.arc(arc.x, arc.y, arc.r * wind_dir[i], getRads(angle_1), getRads(angle_2), false);
        ctx.fillStyle = windRosecolor;
        ctx.fill();
    }
    
    ctx.strokeStyle = '#666';
    ctx.fillStyle = color_1;
    
      // compass and grid section lines

    ctx.restore();
    ctx.strokeStyle = strokeStylecolor;
    ctx.lineWidth = grid_line_width_1;
 
    //ctx.beginPath();
    //ctx.moveTo(30, h / 2 - 0.5);
    //ctx.lineTo(w - 20,h / 2 - 0.5);
    //ctx.stroke();
    
   // ctx.beginPath();
    //ctx.moveTo(w / 2 - 0.5, 20);
    //ctx.lineTo(w / 2 - 0.5, h - 20);
    //ctx.stroke();
    
    //text labels
    ctx.textAlign = "center";
    ctx.font = font_2;
    //ctx.fillText ("0", w/2, h/2-10);
    var i;
    for(i = 1; i < 6 ; i++){
        var rr = i*.2
            ctx.beginPath();
        ctx.arc(arc.x, arc.y, arc.r*rr, getRads(0), getRads(360), false);
        ctx.closePath();
        ctx.stroke();
        var percent_val = Math.round(max_percent_plot/5*i).toFixed(1)
        ctx.fillText (percent_val+'%', w/2, h/2-10-arc.r*rr);
    }

    ctx.font = font_1;
    ctx.fillText ("N", w/2,12);
    ctx.fillText ("NE", w*.82,h*.18);
    ctx.fillText ("S", w/2,h-2);
    ctx.fillText ("NW", w*.18,h*.18);
    ctx.fillText ("SW", w*.18,h*.82);
    ctx.fillText ("SE", w*.82,h*.82);
    ctx.textAlign = "right";
    ctx.fillText ("E", w,h/2+4);
    ctx.textAlign = "left";
    ctx.fillText ("W", 4,h/2+4);

    }
  
  drawScreen();
  
}