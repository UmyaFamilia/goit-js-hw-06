const span = document.getElementById("value");

const decrement = document.querySelector('button[data-action="decrement"]');

const increment = document.querySelector('button[data-action="increment"]');

decrement.addEventListener("click", () => {
  span.textContent--;
});

increment.addEventListener("click", () => {
  span.textContent++;
});
