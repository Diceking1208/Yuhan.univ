var canvas = document.getElementById("GameScreenCanvas");
var ctx = canvas.getContext("2d");


draw();

var a =0;

function draw()
{
    a += Math.PI /100;
    ctx.save();
    ctx.fillStyle= "purple";
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.clearRect(-canvas.width/2,-canvas.height/2,canvas.width, canvas.height);
    ctx.rotate(a);   
    ctx.fillRect(0,0,100,100);
    ctx.restore();

    ctx.save();
    ctx.fillStyle= "green";
    ctx.translate(100,100);
    ctx.rotate(a);   
    ctx.fillRect(0,0,100,100);
    ctx.restore();

    requestAnimationFrame(draw);
}