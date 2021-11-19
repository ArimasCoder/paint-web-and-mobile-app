var mouseEvent="empty";


var last_x,last_y;


canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

color = "black";
width_of_line = 2;

canvas.addEventListener("mousedown", my_mousedown);

 function my_mousedown(e)
 {
     mouseEvent="mouseDown";
 }

 canvas.addEventListener("mouseleave", my_mouseleave);

 function my_mouseleave(e)
 {
     mouseEvent="mouseleave";
 }

 canvas.addEventListener("mouseup", my_mouseup);

 function my_mouseup(e)
 {
     mouseEvent="mouseup";
 }

 canvas.addEventListener("mousemove", my_mousemove);

 function my_mousemove(e)
 {
    current_x=e.clientX-canvas.offsetLeft;
    current_y=e.clientY-canvas.offsetTop;

    if (mouseEvent=="mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;

        ctx.moveTo(lastx,lasty);

        ctx.lineTo(current_x,current_y);
        ctx.stroke();
    }
    lastx=current_x;
    lasty=current_y;
}


var width=screen.width;
new_width=screen.width-70;
new_height=screen.height-300;

if(width<992)
{
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").width=new_height;
    document.body.style.overflow="hidden";
}

canvas.addEventListener("touchstart",my_touchstart);

function my_touchstart(e)
{
    last_x=e.touches[0].clientX-canvas.offsetLeft;
    last_y=e.touches[0].clientY-canvas.offsetTop;
} 

canvas.addEventListener("touchmove",my_touchmove);

function my_touchmove(e)
{
    current_x=e.touches[0].clientX-canvas.offsetLeft;
    current_y=e.touches[0].clientY-canvas.offsetTop;
    
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_of_line;

    ctx.moveTo(last_x,last_y);

    ctx.lineTo(current_x,current_y);
    ctx.stroke();

    last_x=current_x;
    last_y=current_y;
}