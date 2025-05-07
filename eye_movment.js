var mouse_x = 0;
var mouse_y = 0;
var offset_x = 0;
var offset_y = 0;

function update_mouse(event){
    mouse_x = event.clientX;
    mouse_y = event.clientY;
    document.getElementById("pupil").setAttribute("cx", Math.min(Math.max((mouse_x / window.innerWidth * 100) - offset_x, 0 + 20), 100 - 20));
    document.getElementById("pupil").setAttribute("cy", Math.min(Math.max((mouse_y / window.innerHeight * 100) - offset_y, 0 + 20), 100 - 20));
}