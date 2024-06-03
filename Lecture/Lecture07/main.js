var canvas = document.getElementById("Midterm Game");
var ctx = canvas.getContext("2d");


class Hexagon
{
    constructor(posX, posY, rot, rotSpeed, size, color, moveDirX, moveDirY, speed)
    {
        this.position_X = posX;
        this.position_Y = posY;
        this.rotation = rot;
        this.rotation_Speed = rotSpeed;
        this.color = color;
        this.size = size;

        this.moveDirectionX = moveDirX;
        this.moveDirectionY = moveDirY;
        this.moveSpeed = speed;
    }

    update()
    {

        this.position_X += (this.moveDirectionX * this.moveSpeed);
        this.position_Y += (this.moveDirectionY * this.moveSpeed);

        this.rotation += this.rotation_Speed;

    }

    draw()
    {
        ctx.beginPath();
    
        for(var i=this.rotation;i<=360+this.rotation;i+=72)
        {
            ctx.lineTo((Math.cos(Math.PI/180*i)) * this.size + this.position_X, (Math.sin(Math.PI/180*i)) * this.size + this.position_Y);
        }

        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.stroke();

        ctx.closePath();

    }
}

class Moster
{
    constructor(posX, posY, rot, rotSpeed, size, color, moveDirX, moveDirY, speed)
    {
        this.position_X = posX;
        this.position_Y = posY;
        this.rotation = rot;
        this.rotation_Speed = rotSpeed;
        this.color = color;
        this.size = size;

        this.moveDirectionX = moveDirX;
        this.moveDirectionY = moveDirY;
        this.moveSpeed = speed;
    }

    update()
    {

        this.position_X += (this.moveDirectionX * this.moveSpeed);
        this.position_Y += (this.moveDirectionY * this.moveSpeed);

        this.rotation += this.rotation_Speed;
    }

    draw()
    {
        ctx.beginPath();
    
        for (var i = 0; i <= 360; i += 10) 
        {
            ctx.lineTo
            (
                Math.cos((Math.PI / 180) * i) * this.size + this.position_X ,  
                Math.sin((Math.PI / 180) * i) * this.size + this.position_Y
            );
        }

        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.stroke();

        ctx.closePath();

    }
}

var a = new Hexagon(0.0, 0.0, -90.0, 2.0, 30.0, "green", 1.0, 1.0, 0.0);
var b = new Moster(100, 0, -90.0, 2.0, 10.0, "red", 1.0, 1.0, 0.0);

function draw()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    a.update();

    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    
    a.draw();
    b.draw();

    ctx.restore();

    requestAnimationFrame(draw);
}

draw();