const playBoard = document.querySelector(".play-board");
const scoreElement = document.querySelector(".score");
const highScore = document.querySelector(".high-score");
const controls = document.querySelectorAll(".controls button");


let gameOver = false;
let foodX, foodY;
let snakeX = 5; 
let snakeY = 5;
let velocityX = 0, velocityY = 0;
let snakeBody = [];
let score = 0;
let setIntervalId;

// Game Functions

let highScoreValue = localStorage.getItem("high-score") || 0;
highScore.innerText = `High Score = ${highScoreValue}`;

const updateFoodPosition = () => {
    foodX = Math.floor(Math.random() * 30)+1;
    foodY = Math.floor(Math.random() * 30)+1;
}

const handleGameOver = () => {
    clearInterval(setIntervalId);
    // alert("Game Over");
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Game Over !',
    }).then(function () {
        location.reload();
    });    

    
}

const changeDirection = (event) => {

    if (event.key === "ArrowUp" && velocityY !== 1)
    {
        velocityX = 0;
        velocityY = -1;
    }
    else if (event.key === "ArrowDown" && velocityY !== -1)
    {
        velocityX = 0;
        velocityY = 1;
    }
    else if (event.key === "ArrowLeft" && velocityX !== 1)
    {
        velocityX = -1;
        velocityY = 0;
    }
    else if (event.key === "ArrowRight" && velocityX !== -1)
    {
        velocityX = 1;
        velocityY = 0;
    }

}

function up()
{
    if (velocityY !== 1)
    {
        velocityX = 0;
        velocityY = -1;
    }
}

function down() {
    if (velocityY !== -1) {
        velocityX = 0;
        velocityY = 1;
    }
}

function left() {
    if (velocityX !== 1) {
        velocityX = -1;
        velocityY = 0;
    }
}

function right() {
    if (velocityX !== -1) {
        velocityX = 1;
        velocityY = 0;
    }
}

// ESC누르면 멈추기
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        clearInterval(setIntervalId);
        Swal.fire({
            icon: 'info',
            title: 'Pause',
            text: 'Press OK to continue',
        }).then(function () {
            setIntervalId = setInterval(initGame, 100);
        });
    }
});


controls.forEach(button => button.addEventListener("click", changeDirection({key : button.dataset.key})));

const initGame = () => {
    if (gameOver) return handleGameOver();
    let html = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;


    if (snakeX === foodX && snakeY === foodY)
    {
        updateFoodPosition();
        snakeBody.push([foodY,foodX]);
        score++;
        highScoreValue = score >= highScoreValue ? score : highScoreValue;

        localStorage.setItem("high-score", highScoreValue);
        scoreElement.innerText = `Score = ${score}`;
        highScore.innerText = `High Score = ${highScoreValue}`;
    }

    snakeX += velocityX;
    snakeY += velocityY;

    for (let i = snakeBody.length -1; i > 0 ; i--)
    {
        snakeBody[i] = snakeBody[i-1];
    }

    snakeBody[0] = [snakeX,snakeY];

    if (snakeX < 1 || snakeX > 30 || snakeY < 1 || snakeY > 30)
    {
        return gameOver = true;
    }

    for(let i = 0; i< snakeBody.length; i++)
    {
        html += `<div class="head" style="grid-area: ${snakeBody[i][1]} / ${snakeBody[i][0]}"></div>`;
        if (i !==0 && snakeBody[0][1] === snakeBody[i][1] && snakeBody[0][0] === snakeBody[i][0])
        {
            return gameOver = true;
        }
    }
    playBoard.innerHTML = html;

}
// 터치 이벤트 처리
playBoard.addEventListener("touchstart", function (event) {
    touchStartX = event.touches[0].clientX;
    touchStartY = event.touches[0].clientY;
});

playBoard.addEventListener("touchend", function (event) {
    var touchEndX = event.changedTouches[0].clientX;
    var touchEndY = event.changedTouches[0].clientY;

    var deltaX = touchEndX - touchStartX;
    var deltaY = touchEndY - touchStartY;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX > 0) {
            right();
        } else {
            left();
        }
    } else {
        if (deltaY > 0) {
            down();
        } else {
            up();
        }
    }
});
updateFoodPosition();
setIntervalId = setInterval(initGame, 100);
document.addEventListener("keyup", changeDirection);

