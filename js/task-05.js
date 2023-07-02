const inpute = document.querySelector("#name-input");
const span = document.querySelector("#name-output");
inpute.addEventListener("input", () => {
  span.textContent = inpute.value;
  if (span.textContent === "") {
    span.textContent = "Anonymous";
  }
});
