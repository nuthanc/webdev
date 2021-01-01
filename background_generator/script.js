// function changeBackground(t) {
//   console.log(t.value);
// }

const firstColor = document.querySelector('.color1');
const secondColor = document.querySelector('.color2');
const body = document.querySelector('body');

function addGradient() {
  body.style.backgroundImage = `linear-gradient(to right, ${firstColor.value}, ${secondColor.value})`;
}

firstColor.addEventListener('input', addGradient);
secondColor.addEventListener('input', addGradient);
