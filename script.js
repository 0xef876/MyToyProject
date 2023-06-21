function goToWordle() {
    window.location.href = "wordle/index.html";
}

function goToPhoto() {
    window.location.href = "photo_toy/index.html";
}

function goToCoin() {
    window.location.href = "rotatecoin/index.html";
}

function goToMusic() {
    window.location.href = "music/index.html";
}

function goToLogin(){
    window.location.href = "login/index.html";
}
function goToTetris() {
    window.location.href = "tetris/index.html";
}
function goToLivePrice()
{
    window.location.href = "coin/index.html";
}
function goToSnake()
{
    window.location.href = "snake/index.html";
}
function goToSwipe() {
    window.location.href = "swipe_brick/index.html";
}
function goToCommingSoon()
{
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Comming Soon !',
    })
}

function updateTime() {
    var now = new Date();
    var timeElem = document.getElementById('time');
    timeElem.innerHTML = now.toLocaleTimeString();
}

// Update time every second
setInterval(updateTime, 1000);