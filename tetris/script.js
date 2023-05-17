"use strict";
const canvas = document.getElementById("tetris");
const context = canvas.getContext("2d");
context.scale(20, 20);

function arenaSweep() {
    let rowCount = 1;
    outer: for (let y = arena.length - 1; y > 0; --y) {
        for (let x = 0; x < arena[y].length; ++x) {
        if (arena[y][x] === 0) {
            continue outer;
        }
        }
    
        const row = arena.splice(y, 1)[0].fill(0);
        arena.unshift(row);
        ++y;
        
        player.score += rowCount * 10;
        breaklinesound();
        rowCount *= 2;
    }
    }

function collide(arena, player) {
    const [m, o] = [player.matrix, player.pos];
    for (let y = 0; y < m.length; ++y) {
    for (let x = 0; x < m[y].length; ++x) {
        if (m[y][x] !== 0 &&
            (arena[y + o.y] &&
            arena[y + o.y][x + o.x]) !== 0) {
        spacebarsound();
        return true;
        }
    }
    }
    return false;
}

function createMatrix(w, h) {
    const matrix = [];
    while (h--) {
    matrix.push(new Array(w).fill(0));
    }
    return matrix;
}

function createPiece(type) {
    if (type === "T") {
    return [
        [0, 0, 0],
        [1, 1, 1],
        [0, 1, 0],
    ];
    } else if (type === "O") {
    return [
        [2, 2],
        [2, 2],
    ];
    } else if (type === "L") {
    return [
        [0, 3, 0],
        [0, 3, 0],
        [0, 3, 3],
    ];
    } else if (type === "J") {
    return [
        [0, 4, 0],
        [0, 4, 0],
        [4, 4, 0],
    ];
    } else if (type === "I") {
    return [
        [0, 5, 0, 0],
        [0, 5, 0, 0],
        [0, 5, 0, 0],
        [0, 5, 0, 0],
    ];
    } else if (type === "S") {
    return [
        [0, 6, 6],
        [6, 6, 0],
        [0, 0, 0],
    ];
    } else if (type === "Z") {
    return [
        [7, 7, 0],
        [0, 7, 7],
        [0, 0, 0],
    ];
    }
}

function draw() {
    context.fillStyle = "#000";
    context.fillRect(0, 0, canvas.width, canvas.height);
    drawMatrix(arena, { x: 0, y: 0 });
    drawMatrix(player.matrix, player.pos);
}

function drawMatrix(matrix, offset) {
    matrix.forEach((row, y) => {
    row.forEach((value, x) => {
        if (value !== 0) {
        context.fillStyle = colors[value];
        context.fillRect(x + offset.x,
            y + offset.y,
            1, 1);
        }
    });
    });
}

function merge(arena, player) {
    player.matrix.forEach((row, y) => {
    row.forEach((value, x) => {
        if (value !== 0) {
        arena[y + player.pos.y][x + player.pos.x] = value;
        }
    });
    });
}

function playerDrop() {
    player.pos.y++;
    if (collide(arena, player)) {
    player.pos.y--;
    merge(arena, player);
    playerReset();
    arenaSweep();
    updateScore();
    }
    dropCounter = 0;
}

function playerMove(dir) {
    player.pos.x += dir;
    if (collide(arena, player)) {
    player.pos.x -= dir;
    }
}

function playerReset() {
    const pieces = "ILJOTSZ";
    player.matrix = createPiece(pieces[pieces.length * Math.random() | 0]);
    player.pos.y = 0;
    player.pos.x = (arena[0].length / 2 | 0) -
    (player.matrix[0].length / 2 | 0);
    if (collide(arena, player)) { // if collide after reset
    gameovermodal(player.score); // show game over modal and stop the game
    arena.forEach(row => row.fill(0)); // reset arena
    player.score = 0; // reset score
    updateScore(); // update score
    }

}

function gameovermodal(score){
    gameoversound()
    // 점수 표시
    document.getElementById("finalScore").innerText = "Result : " + score;
    // 테트리스 멈추기
    document.getElementById("tetris").remove();
    spacebarsound = function(){};
    breaklinesound = function(){};
    gameoversound = function(){};
    rotatesound = function(){};
    updateScore = function(){};
    playerReset = function(){};
    document.getElementById("score").style.display = "none";
    // 모달 띄우기
    var modal = document.getElementById("myModal");
    var btn = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
    btn.onclick = function() {
        location.reload();
    }
}

function playerRotate(dir) {
    const pos = player.pos.x;
    let offset = 1;
    rotate(player.matrix, dir);
    while (collide(arena, player)) {
    player.pos.x += offset;
    offset = -(offset + (offset > 0 ? 1 : -1));
    if (offset > player.matrix[0].length) {
        rotate(player.matrix, -dir);
        player.pos.x = pos;
        return;
    }
    }
}

function rotate(matrix, dir) {
    rotatesound();
    for (let y = 0; y < matrix.length; ++y) {
    for (let x = 0; x < y; ++x) {
        [
        matrix[x][y],
        matrix[y][x],
        ] = [
        matrix[y][x],
        matrix[x][y],
        ];
    }
    }
    if (dir > 0) {
    matrix.forEach(row => row.reverse());
    } else {
    matrix.reverse();
    }
}

let dropCounter = 0;
let dropInterval = 1000;

let lastTime = 0;
function update(time = 0) {
    const deltaTime = time - lastTime;
    lastTime = time;
    dropCounter += deltaTime;
    if (dropCounter > dropInterval) {
    playerDrop();
    }
    draw();
    requestAnimationFrame(update);
}

function updateScore() {
    document.getElementById("score").innerText = player.score;
}

document.addEventListener("keydown", event => {
    if (event.keyCode === 37) { // 왼쪽 방향키
    playerMove(-1);
    } else if (event.keyCode === 39) { // 오른쪽 방향키
    playerMove(1);
    } else if (event.keyCode === 40) { // 아래쪽 방향키
    playerDrop();
    } else if (event.keyCode === 81) { // Q키
    playerRotate(-1);
    } else if (event.keyCode === 87) { // W키
    playerRotate(1);
    } else if (event.keyCode === 38) { // 위쪽 방향키
    playerRotate(1);
    }
    // 스페이스바를 누르면 한번에 내려가기
    else if (event.keyCode === 32) {
    while (!collide(arena, player)) {
        player.pos.y++;
    }
    player.pos.y--;
    merge(arena, player);
    playerReset();
    arenaSweep();
    updateScore();
    }

});

function spacebarsound()
{
    // spacebar sound
    var audio = new Audio('asset/space.mp3');
    audio.play();
}

function breaklinesound()
{
    // break line sound
    var audio = new Audio('asset/line.mp3');
    audio.play();

}
function rotatesound()
{
    // rotate sound
    var audio = new Audio('asset/rotate.mp3');
    audio.play();
}

function gameoversound()
{
    // game over sound
    var audio = new Audio('asset/gameover.mp3');
    audio.play();
}

const colors = [
    null,
    "#FF0D72",
    "#0DC2FF",
    "#0DFF72",
    "#F538FF",
    "#FF8E0D",
    "#FFE138",
    "#3877FF",
];

const arena = createMatrix(12, 20);

const player = {
    pos: { x: 0, y: 0 },
    matrix: null,
    score: 0,
};

playerReset();
updateScore();
update();

