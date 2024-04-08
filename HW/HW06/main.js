var canvas = document.getElementById("GameScreenCanvas");
var ctx = canvas.getContext("2d");



class circle{
    constructor(col, radius, positionX, positionY)
    {
        this.color = col;
        this.radius = radius;
        this.positionX = positionX;
        this.positionY = positionY;
    }
    draw(){
        ctx.beginPath();

        for(var i=0; i<=360; i++)
        {
            ctx.lineTo(Math.cos(Math.PI/180*i),Math.sin(Math.PI/180*i));
        }

        ctx.translate(this.positionX,this.positionY);
        ctx.scale(this.radius,this.radius);
    
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
        
    }

}
function draw(){
    var Circle = new circle("red",Math.random()*100, Math.random()*500, Math.random()*500);
    Circle.draw();

    requestAnimationFrame(draw);
}

draw();