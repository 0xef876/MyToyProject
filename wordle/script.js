var answer_list = ['apple', 'green', 'black', 'about', 'earth', 'shark', 'stack', 'queue', 'guest', 'admin', 'lemon', 'mango', 'onion', 'party', 'rocky', 'chair', 'dance', 'elbow', 'faith', 'glass', 'hotel', 'igloo', 'jeans', 'knife', 'laugh', 'money', 'night', 'opera', 'pizza', 'queen', 'river', 'smile', 'table', 'uncle', 'voice', 'water', 'xerox', 'yacht', 'zebra', 'alien', 'blissful', 'candy', 'dream', 'eager', 'fancy', 'gummy', 'happy', 'ivory', 'jolly', 'karma', 'lemon', 'mango', 'novel', 'onion', 'party', 'quirky', 'river', 'salsa', 'tango', 'umbra', 'vixen', 'waltz', 'xylan', 'yahoo', 'zonal', 'amber', 'brief', 'coral', 'daisy', 'elite', 'flake', 'gleam', 'happy', 'ivory', 'jelly', 'karma', 'lemon', 'mango', 'novel', 'onion', 'party', 'quick', 'rocky', 'salsa', 'tango', 'umbra', 'voice', 'witty', 'xylem', 'yield', 'zesty', 'album', 'bronze', 'carve', 'drape', 'erupt', 'fairy', 'glare', 'heart', 'image', 'jazzy', 'kayak', 'light', 'mural', 'night', 'oasis', 'plush', 'quirky', 'relax', 'salsa', 'tempo', 'unity', 'venom'];
let count = 0;

function choose(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
}
var answer = choose(answer_list);

function moveToNext(input, nextInputId) {
  if (input.value.length == 1) {
    document.getElementById(nextInputId).focus();
  }
}
document.getElementById("submit").addEventListener('click',
    function check() {
        count += 1;
        var input = document.querySelectorAll('.input');
        let check = 0;
        for (let i = 0; i < 5; i++) {
            if (input[i].value == '') {
                input[i].style.backgroundColor = "lightgray";
            }
            else if (input[i].value == answer[i]) {
                input[i].style.backgroundColor = "green"
                check++;
            }
            else if (answer.includes(input[i].value)) {
                input[i].style.backgroundColor = "Yellow"
            }
            else {
                input[i].style.backgroundColor = "lightgray"
            }
            console.log(check);
            if (check == 5) {
                return alert("Success");
            }
            else {
                input[i].classList.remove("input");
            }
        }

        var template = 
        `
<form onsubmit="document.getElementById('submit-btn').click(); return false;" align='center'>
    <div>
    <input class="input" type="text" onkeyup="moveToNext(this, 'input${count}2')">
    <input id="input${count}2" class="input" type="text" onkeyup="moveToNext(this, 'input${count}3')">
    <input id="input${count}3" class="input" type="text" onkeyup="moveToNext(this, 'input${count}4')">
    <input id="input${count}4" class="input" type="text" onkeyup="moveToNext(this, 'input${count}5')">
    <input id="input${count}5" class="input" type="text" onkeyup="moveToNext(this, 'submit-btn')">
    <button type="submit" id="submit-btn" style="display:none;"></button>
    </div>
</form>
        `
        document.querySelector('form').insertAdjacentHTML('beforeend', template);
    });
document.getElementById("submit-btn").addEventListener('click',
    function check() {
        count += 1;
        var input = document.querySelectorAll('.input');
        let check = 0;
        for (let i = 0; i < 5; i++) {
            if (input[i].value == '') {
                input[i].style.backgroundColor = "lightgray";
            }
            else if (input[i].value == answer[i]) {
                input[i].style.backgroundColor = "green"
                check++;
            }
            else if (answer.includes(input[i].value)) {
                input[i].style.backgroundColor = "Yellow"
            }
            else {
                input[i].style.backgroundColor = "lightgray"
            }
            console.log(check);
            if (check == 5) {
                return alert("Success");
            }
            else {
                input[i].classList.remove("input");
            }
        }

var template = 
        `
<form onsubmit="document.getElementById('submit-btn').click(); return false;" align='center'>
    <div>
    <input class="input" type="text" onkeyup="moveToNext(this, 'input${count}2')">
    <input id="input${count}2" class="input" type="text" onkeyup="moveToNext(this, 'input${count}3')">
    <input id="input${count}3" class="input" type="text" onkeyup="moveToNext(this, 'input${count}4')">
    <input id="input${count}4" class="input" type="text" onkeyup="moveToNext(this, 'input${count}5')">
    <input id="input${count}5" class="input" type="text" onkeyup="moveToNext(this, 'submit-btn')">
    <button type="submit" id="submit-btn" style="display:none;"></button>
    </div>
</form>
        `
        document.querySelector('form').insertAdjacentHTML('beforeend', template);
    });

// modal 만들기
document.getElementById('rule').addEventListener('click', function () {
    document.querySelector('.modal').style.display = 'flex';
}


)
document.querySelector('.close').addEventListener('click', function () {
    document.querySelector('.modal').style.display = 'none';
}

)

