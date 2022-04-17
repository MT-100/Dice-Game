// ----------------------------------DICE LEFT---------------------------
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var PlayerOneImages = "images/dice" + randomNumber1 + ".png";
document.querySelector('.img1').setAttribute('src', PlayerOneImages);

// ----------------------------------DICE RIGHT---------------------------
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var PlayerTwoImages = "images/dice" + randomNumber2 + ".png";
document.querySelector('.img2').setAttribute('src', PlayerTwoImages);

if(PlayerOneImages > PlayerTwoImages) {
  document.querySelector('h1').innerHTML = 'Player 1 Wins';
} else if (PlayerOneImages < PlayerTwoImages) {
  document.querySelector('h1').innerHTML = 'Player 2 Wins';
} else {
  document.querySelector('h1').innerHTML = 'Roll Again';
}
