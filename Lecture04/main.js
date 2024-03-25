var canvas = document.getElementById("GameScreenCanvas");
var ctx = canvas.getContext("2d");

var studentID = 202327069;

function drawNum(num)
{

}

ctx.beginPath()
ctx.moveTo(50,canvas.height/2);
ctx.lineTo(canvas.width -50, canvas.height/2);
ctx.strokeStyle = "Blue"
ctx.lineeWidth = 3;
ctx.stroke();
ctx.closePath();

drawNum(studentID);




