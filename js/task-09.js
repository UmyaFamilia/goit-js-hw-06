function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const color = document.querySelector(".color");
const button = document.querySelector(".change-color");
button.addEventListener("click", click);
function click() {
  color.textContent = document.querySelector("body").style.backgroundColor =
    getRandomHexColor();
}
