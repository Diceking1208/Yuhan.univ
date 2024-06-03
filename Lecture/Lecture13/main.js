var canvas = document.getElementById("Midterm Game");
var ctx = canvas.getContext("2d");

var centerX = canvas.width / 2;
var centerY = canvas.height / 2;

ctx.beginPath();
ctx.fillStyle = "red";
ctx.moveTo(centerX, centerY);
ctx.lineTo(centerX + 100, centerY);
ctx.lineTo(centerX, centerY+100);
ctx.lineTo(centerX-100,centerY);
ctx.lineTo(centerX,centerY);
ctx.fill();
ctx.stroke();