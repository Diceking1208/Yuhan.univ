var canvas = document.getElementById("Midterm Game");
var ctx = canvas.getContext("2d");

// 게임시작
document.getElementById('start-button').addEventListener('click', function() 
{
    setTimeout(draw, 1000);

    var button = document.getElementById('start-button');
    button.remove();
    var h1Element = document.querySelector('#title');
    h1Element.style.display = 'none';
});

var canvasCenterX = canvas.width / 2;
var canvasCenterY = canvas.height / 2;

class Hexagon //플레이어
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
        for (var i = this.rotation; i <= 360 + this.rotation; i += 72) 
        {
            ctx.lineTo((Math.cos(Math.PI / 180 * i)) * this.size + this.position_X, (Math.sin(Math.PI / 180 * i)) * this.size + this.position_Y);
        }
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }
}

class Monster //몬스터
{
    constructor(posX, posY, rot, rotSpeed, size, color, moveDirX, moveDirY, speed) 
    {
        this.position_X = posX;
        this.position_Y = posY;
        this.rotation = rot;
        this.rotation_Speed = rotSpeed;
        this.color = colors[color];
        this.size = size;

        this.moveDirectionX = moveDirX;
        this.moveDirectionY = moveDirY;
        this.moveSpeed = speed;
    }

    update(hexagon) 
    {
        let deltaX = hexagon.position_X - this.position_X;
        let deltaY = hexagon.position_Y - this.position_Y;

        let distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        let directionX = deltaX / distance;
        let directionY = deltaY / distance;

        //이동
        this.moveDirectionX = directionX;
        this.moveDirectionY = directionY;

        //이동속도
        this.moveSpeed = 1.0;

        //이동방향
        this.position_X += this.moveDirectionX * this.moveSpeed;
        this.position_Y += this.moveDirectionY * this.moveSpeed;

        //회전
        this.rotation = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
    }

    draw() 
    {
        ctx.beginPath();
        for (var i = 0; i <= 360; i += 10) 
        {
            ctx.lineTo
            (
                Math.cos((Math.PI / 180) * i) * this.size + this.position_X,
                Math.sin((Math.PI / 180) * i) * this.size + this.position_Y
            );
        }
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }
}

var colors = ["#C7C5FF", "black", "blue", "magenta", "pink", "cyan", "orange"]; 

var a = new Hexagon(canvasCenterX, canvasCenterY, -90.0, 2.0, 30.0, "green", 1.0, 1.0, 0.0);
var monsters = [];

// 오른쪽 방향 몬스터 생성
for (var i = 0; i < 5; i++) 
{
    monsters.push(new Monster(canvasCenterX + 500, Math.random() * canvas.height, -90.0, 2.0, 10.0, Math.round(Math.random() * 6), 1.0, 1.0, 0.0));
}

// 왼쪽 방향 몬스터 생성
for (var i = 0; i < 5; i++) 
{
    monsters.push(new Monster(canvasCenterX - 500, Math.random() * canvas.height, -90.0, 2.0, 10.0, Math.round(Math.random() * 6), -1.0, 1.0, 0.0));
}

// 위쪽 방향 몬스터 생성
for (var i = 0; i < 5; i++) 
{
    monsters.push(new Monster(Math.random() * canvas.width, canvasCenterY - 500, -90.0, 2.0, 10.0, Math.round(Math.random() * 6), 1.0, -1.0, 0.0));
}

// 아래쪽 방향 몬스터 생성
for (var i = 0; i < 5; i++) 
{
    monsters.push(new Monster(Math.random() * canvas.width, canvasCenterY + 500, -90.0, 2.0, 10.0, Math.round(Math.random() * 6), 1.0, 1.0, 0.0));
}

function draw() 
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    a.update();
    for (var i = 0; i < monsters.length; i++) 
    {
        monsters[i].update(a);
    }

    ctx.save();
    ctx.translate(canvasCenterX - a.position_X, canvasCenterY - a.position_Y);
    
    a.draw();
    for (var i = 0; i < monsters.length; i++) 
    {
        monsters[i].draw();
    }

    ctx.restore();

    requestAnimationFrame(draw);
}

function GetKey(event) 
{
    if (event.key ==='ArrowRight') 
    {
        a.position_X += 5;
    }
    if (event.key ==='ArrowLeft')
    {
        a.position_X -= 5;
    }
    if (event.key ==='ArrowUp')
    {
        a.position_Y -= 5;
    }
    if (event.key ==='ArrowDown') 
    {
        a.position_Y += 5;
    }
}

document.addEventListener('keydown', GetKey);

