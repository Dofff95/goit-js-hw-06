const registrationForm = document.querySelector(".login-form");
const input = document.querySelector("input");

registrationForm.addEventListener("submit", call);

function call(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const login = form.elements.email.value;
  const password = form.elements.password.value;
  if (login === "" || password === "") {
    return alert("Всі поля повинні бути заповнені!");
  }
}
