//currentTarget
const size = document.getElementById("font-size-control");
size.addEventListener("input", slice);
function slice(evnt) {
  document.getElementById("text").style.fontSize =
    evnt.currentTarget.value + "px";
}
