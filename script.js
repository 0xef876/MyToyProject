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