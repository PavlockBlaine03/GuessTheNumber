const check = document.getElementById('check');
const guess = new URLSearchParams(window.location.search);
const num = guess.get('guess');
//const randomNum = Math.floor(Math.random() * 4) + 1;

if(num === '5'){
  check.innerHTML = 'You guessed correctly!';
} else {
  check.innerHTML = 'Try again...';
}