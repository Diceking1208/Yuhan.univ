var canvas = document.getElementById("Midterm Game");
var ctx = canvas.getContext("2d");

var colors = ["red"]; 
var colorw = ["yellow"];

class Heart {
    constructor(colorIndex, size, positionX, positionY) {
        this.color = colors[colorIndex];
        this.size = size;
        this.positionX = positionX;
        this.positionY = positionY;
        this.angle = 0; // 회전 각도
        this.speed = Math.PI / 100; // 회전 속도
    }

    draw() {
        ctx.save(); // 현재 상태를 저장
    
        ctx.translate(this.positionX , this.positionY); // 위치 설정
        
        ctx.rotate(this.angle); // 회전 설정
        ctx.scale(this.size, this.size); // 크기 설정
    
        ctx.beginPath(); // 새로운 경로 시작
    
        // 상단 왼쪽 부분의 곡선
        ctx.moveTo(0, 0.35);
        ctx.bezierCurveTo(-0.4, -0.3, -1, -0.5, -1, -1);
        // 하단 왼쪽 부분의 곡선
        ctx.bezierCurveTo(-1, -1.5, 0, -1.5, 0, -1);
        // 하단 오른쪽 부분의 곡선
        ctx.bezierCurveTo(0, -1.5, 1, -1.5, 1, -1);
        // 상단 오른쪽 부분의 곡선
        ctx.bezierCurveTo(1, -0.5, 0.4, -0.3, 0, 0.35);
    
        ctx.closePath(); // 경로 닫기
        ctx.strokeStyle = 'black'; // 보더 색상 설정
        ctx.lineWidth = 0.1; // 보더 두께 설정
        ctx.stroke(); // 보더 그리기
    
        ctx.fillStyle = this.color; // 색상 설정
        ctx.fill(); // 채우기
    
        ctx.restore(); // 이전 상태로 되돌리기
    }
    
    update() {
        this.angle += this.speed; // 회전 각도 업데이트
    }

    // 하트 이동 메서드 추가
    move(direction) {
        switch (direction) {
            case 'ArrowUp':
                this.positionY -= 5; // 위로 이동
                break;
            case 'ArrowDown':
                this.positionY += 5; // 아래로 이동
                break;
            case 'ArrowLeft':
                this.positionX -= 5; // 왼쪽으로 이동
                break;
            case 'ArrowRight':
                this.positionX += 5; // 오른쪽으로 이동
                break;
        }
    }
}

class Star {
    constructor(colorIndex, size, positionX, positionY) {
        this.color = colorw[colorIndex];
        this.size = size;
        this.positionX = positionX;
        this.positionY = positionY;
    }

    draw1() {
        ctx.save(); // 현재 상태를 저장

        ctx.translate(this.positionX, this.positionY); // 위치 설정
        ctx.scale(this.size, this.size); // 크기 설정

        ctx.beginPath(); // 새로운 경로 시작

        // 별 모양의 각 점을 연결
        ctx.moveTo(0, -1);
        ctx.lineTo(0.47, -0.3);
        ctx.lineTo(1, -0.3);
        ctx.lineTo(0.6, 0.2);
        ctx.lineTo(0.8, 0.8);
        ctx.lineTo(0, 0.5);
        ctx.lineTo(-0.8, 0.8);
        ctx.lineTo(-0.6, 0.2);
        ctx.lineTo(-1, -0.3);
        ctx.lineTo(-0.47, -0.3);

        ctx.closePath(); // 경로 닫기
        
        ctx.strokeStyle = 'black'; // 보더 색상 설정
        ctx.lineWidth = 0.1; // 보더 두께 설정
        ctx.stroke(); // 보더 그리기

        ctx.fillStyle = this.color; // 색상 설정
        ctx.fill(); // 채우기
        
        ctx.restore(); // 이전 상태로 되돌리기
    }
}

var heart = new Heart(0, 50, canvas.width / 2, canvas.height / 2); // 하트 생성


var star = new Star(0, 50, Math.random() * 600, Math.random() * 800); // 별 생성

// 카메라 객체 정의
class Camera {
    constructor() {
        this.positionX = canvas.width / 2; // 초기 x 좌표
        this.positionY = canvas.height / 2; // 초기 y 좌표
    }

    // 카메라 이동 메서드
    moveCamera(x, y) {
        // 하트의 위치에 따라 카메라 위치 업데이트
        this.positionX = x;
        this.positionY = y;
    }
}

// 카메라 객체 생성
var camera = new Camera();

// 하트와 별을 그리는 함수들에 카메라 위치 반영
function renderHeart() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // 이전 프레임 지우기

    ctx.save(); // 현재 상태 저장
    ctx.translate(canvas.width / 2 - camera.positionX, canvas.height / 2 - camera.positionY); // 카메라 위치 반영
    heart.draw();
    ctx.restore(); // 이전 상태 복원

    heart.update(); // 회전 갱신
    requestAnimationFrame(renderHeart);
}

function renderStar() {
    ctx.save(); // 현재 상태 저장
    ctx.translate(canvas.width / 2 - camera.positionX, canvas.height / 2 - camera.positionY); // 카메라 위치 반영
    star.draw1();
    ctx.restore(); // 이전 상태 복원

    requestAnimationFrame(renderStar);
}

document.addEventListener('keydown', function(event) {
    switch (event.key) {
        case 'ArrowUp':
        case 'ArrowDown':
        case 'ArrowLeft':
        case 'ArrowRight':
            heart.move(event.key); // 하트 이동
            camera.moveCamera(heart.positionX, heart.positionY); // 카메라 이동
            break;
    }
});


// 초기 렌더링 호출
renderHeart();
renderStar();
