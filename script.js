const logo = document.querySelector('.logo');
const counter = document.querySelector('.counter');
let count = 0;

let dx = 5; // horizontal speed
let dy = 5; // vertical speed

function updateCounter() {
  count++;
  counter.innerText = count;
}

function checkCollision() {
  const rect = logo.getBoundingClientRect();
  
  if (rect.left <= 0 || rect.right >= window.innerWidth) {
    dx = -dx;
    updateCounter();
  }
  
  if (rect.top <= 0 || rect.bottom >= window.innerHeight) {
    dy = -dy;
    updateCounter();
  }
}

function moveLogo() {
  const rect = logo.getBoundingClientRect();
  
  logo.style.left = rect.left + dx + 'px';
  logo.style.top = rect.top + dy + 'px';
  
  checkCollision();
}

setInterval(moveLogo, 10);
