//currentTarget
const inpute = document.getElementById("validation-input");
inpute.addEventListener("blur", borderColor);
function borderColor(event) {
  if (event.currentTarget.value.length == event.currentTarget.dataset.length) {
    event.currentTarget.classList.add("valid");
    event.currentTarget.classList.replace("invalid", "valid");
  } else {
    event.currentTarget.classList.add("invalid");
    event.currentTarget.classList.replace("valid", "invalid");
  }
}
