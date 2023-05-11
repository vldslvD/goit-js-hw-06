const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;
  if (email === "" || password === "") {
    alert("All fields are required")
  }
  else {
    const user = { email, password };
    console.log(user);
    formEl.reset();
  }
}
