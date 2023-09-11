const registrationForm = document.querySelector(".login-form");
registrationForm.addEventListener("submit", loginForm);

function loginForm(event) {
  event.preventDefault();
  const login = registrationForm.elements.email.value;
  const password = registrationForm.elements.password.value;
  if (login === "" || password === "") {
    alert("Всі поля повинні бути заповнені!");
  } else {
    let obj = {
      email: login,
      password: password,
    };
    console.log(obj);
    registrationForm.reset();
  }
}
