function addUserCallback() {
  const form = document.querySelector("#formulario");
  form.addEventListener("submit", addUser);
}

function addUser(e) {
  e.preventDefault();

  const name_user = document.querySelector("#username").value;
  const email_user = document.querySelector("#useremail").value;

  if (name_user.trim() === "" && email_user.trim() === "") {
    console.log("Todos los campos son obligatorios");
    return;
  }
}

document.addEventListener("DOMContentLoaded", addUserCallback);
