//currentTarget
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const destroy = document.querySelector("[data-destroy]");
const create = document.querySelector("[data-create]");
const inpute = document.querySelector("input");
const boxes = document.querySelector("#boxes");
inpute.addEventListener("blur", show);

let count = 0;
function show(event) {
  count = event.currentTarget.value;
}

create.addEventListener("click", () => createBoxes(count));

function createBoxes(amount) {
  destroyBoxes();
  let array = [];

  for (let i = 0; i < amount; i++) {
    array.push(document.createElement("div"));
    array[i].textContent = i + 1;
    array[i].style.backgroundColor = getRandomHexColor();
    array[i].style.width = `${(i + 1) * 30}px`;
    array[i].style.height = `${(i + 1) * 30}px`;
  }
  boxes.append(...array);
}

destroy.addEventListener("click", () => destroyBoxes());
function destroyBoxes() {
  while (boxes.children.length) {
    boxes.children[0].parentNode.firstChild.remove();
  }
}
