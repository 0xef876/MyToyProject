var answer_list = ['apple', 'green', 'black', 'about', 'earth', 'shark', 'stack', 'queue', 'guest', 'admin', 'lemon', 'mango', 'onion', 'party', 'rocky', 'chair', 'dance', 'elbow', 'faith', 'glass', 'hotel', 'igloo', 'jeans', 'knife', 'laugh', 'money', 'night', 'opera', 'pizza', 'queen', 'river', 'smile', 'table', 'uncle', 'voice', 'water', 'xerox', 'yacht', 'zebra', 'alien', 'blissful', 'candy', 'dream', 'eager', 'fancy', 'gummy', 'happy', 'ivory', 'jolly', 'karma', 'lemon', 'mango', 'novel', 'onion', 'party', 'quirky', 'river', 'salsa', 'tango', 'umbra', 'vixen', 'waltz', 'xylan', 'yahoo', 'zonal', 'amber', 'brief', 'coral', 'daisy', 'elite', 'flake', 'gleam', 'happy', 'ivory', 'jelly', 'karma', 'lemon', 'mango', 'novel', 'onion', 'party', 'quick', 'rocky', 'salsa', 'tango', 'umbra', 'voice', 'witty', 'xylem', 'yield', 'zesty', 'album', 'bronze', 'carve', 'drape', 'erupt', 'fairy', 'glare', 'heart', 'image', 'jazzy', 'kayak', 'light', 'mural', 'night', 'oasis', 'plush', 'quirky', 'relax', 'salsa', 'tempo', 'unity', 'venom'];

function choose(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
}
var answer = choose(answer_list);
document.querySelector('button').addEventListener('click',
    function check() {
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

        var template = `<div  align = 'center'>
    <input class="input">
    <input class="input">
    <input class="input">
    <input class="input">
    <input class="input">
    </div>`
        document.querySelector('div').insertAdjacentHTML('beforeend', template);
    });