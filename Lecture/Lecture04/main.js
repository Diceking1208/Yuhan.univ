var canvas = document.getElementById("GameScreenCanvas");
var ctx = canvas.getContext("2d");

var studentID = 2023269;

function drawNum(num) {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Convert number to string
    var numStr = num.toString();

    // Set font properties
    ctx.font = "30px Arial";
    ctx.fillStyle = "blue";
    ctx.textAlign = "center";

    // Draw the number in the middle of the canvas
    ctx.fillText(numStr, canvas.width / 2, canvas.height / 2);
}

// Draw the line
ctx.beginPath();
ctx.moveTo(50, canvas.height / 2);
ctx.lineTo(canvas.width - 50, canvas.height / 2);
ctx.strokeStyle = "Blue";
ctx.lineWidth = 3;
ctx.stroke();
ctx.closePath();

// Call the function to draw the student ID
drawNum(studentID);
