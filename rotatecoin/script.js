const coin = document.querySelector('.coin');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  let intervalId;
  let flipCount = 0;
  let count = Math.floor(Math.random() * 11) + 5;
  
  intervalId = setInterval(() => {
    coin.classList.toggle('flip');
    flipCount++;
    if (flipCount === count) {
      clearInterval(intervalId);
      if (count % 2 === 0) {

        const result = '뒷면';
        alert(result);

      }
      else{
        const result = '앞면';
        alert(result);
      }
      coin.classList.remove('flip');
    }
  }, 500);
});


$('#flip').on('click', function(event) {
  $(this).toggleClass('start-fun');
  var $page = $('.page');
  $page.toggleClass('color-bg-start')
    .toggleClass('bg-animate-color');

  //change text when when button is clicked

  $(this).hasClass('start-fun') ?
    $(this).text('stop the fun') :
    $(this).text('start the fun');

});