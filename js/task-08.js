//currentTarget
const form = document.querySelector(".login-form");

form.addEventListener("submit", send);

function send(evnt) {
  evnt.preventDefault();
  evnt.currentTarget.elements;
  const info = {
    email: "",
    password: "",
  };
  const { email, password } = evnt.currentTarget.elements;
  if (email.value.length == 0 || password.value.length == 0) {
    alert("заповніть всі форми!");
  } else {
    info.email = email.value;
    info.password = password.value;
    console.log(info);
    evnt.currentTarget.reset();
  }
}
