var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var boundings = canvas.getBoundingClientRect();
var colors = document.getElementsByClassName('colors')[0];
var clearButton = document.getElementById('clear');
var saveButton = document.getElementById('save');
var mouseX = 0;
var mouseY = 0;
var isDrawing = false;
function setMouseCoordinates(event) {
    mouseX = event.clientX - boundings.left;
    mouseY = event.clientY - boundings.top;
}

colors.addEventListener('click', function(event) {
    context.strokeStyle = event.target.value;
});

canvas.addEventListener('mousedown', function(event) {
    var thickness = document.getElementById('thickness')
    setMouseCoordinates(event);
    isDrawing = true;
    context.lineWidth = thickness.value
    context.beginPath();
    context.moveTo(mouseX, mouseY);
});

canvas.addEventListener('mousemove', function(event) {
    setMouseCoordinates(event);
    if(isDrawing){
    context.lineTo(mouseX, mouseY);
    context.stroke();
    }
});

canvas.addEventListener('mouseup', function(event) {
    setMouseCoordinates(event);
    isDrawing = false;
});

clearButton.addEventListener('click', function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
});

saveButton.addEventListener('click', function() {
    var canvasDataURL = canvas.toDataURL();
    var a = document.createElement('a');
    a.href = canvasDataURL;
    a.download ='img';
    a.click();
});
