//Canvas Element 불러오기
var canvas = document.getElementById("GameScreenCanvas");
var ctx = canvas.getContext("2d");

var colors = ["#C7C5FF", "black", "blue", "magenta", "pink", "cyan", "orange"]; 

class circle{
    constructor(colorIndex, radius, positionX, positionY){
        this.color = colors[colorIndex];
        this.radius = radius;
        this.positionX = positionX;
        this.positionY = positionY;
    }
    draw(){
        ctx.save();
        ctx.beginPath();

        ctx.translate(this.positionX,this.positionY);
        ctx.scale(this.radius,this.radius);

        for(var i=0;i<360;i++){
            ctx.lineTo(Math.cos(Math.PI/180*i), Math.sin(Math.PI/180*i));
        }
        
        ctx.fillStyle = this.color;
        ctx.fill();
        
        ctx.closePath();        
        ctx.restore();
    }
}


function render(){
    var Circle = new circle(Math.round(Math.random()*6), Math.random()*100, Math.random()*500, Math.random()*500);
    Circle.draw();
    requestAnimationFrame(render);
}

render();