const registration = {
  registrationForm: document.querySelector(".login-form"),
  input: document.querySelector("input"),

  init: function () {
    this.registrationForm.addEventListener("submit", this.loginForm);
  },

  loginForm: function (event) {
    event.preventDefault();
    const form = event.currentTarget;
    const login = form.elements.email.value;
    const password = form.elements.password.value;

    if (login === "" || password === "") {
      return alert("Всі поля повинні бути заповнені!");
    } else {
      console.log(`Email: ${login} Password: ${password}`);
    }
  },
};
