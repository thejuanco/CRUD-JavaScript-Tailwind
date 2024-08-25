const objUser = {
  id: Date.now(),
  name: "",
  email: "",
}

const users = [];

import { alert } from "./alerts.js";

export function addUserCallback() {
  const form = document.querySelector("#formulario");
  form.addEventListener("submit", addUser);
}

function addUser(e) {
  e.preventDefault();

  const name_user = document.querySelector("#username").value;
  const email_user = document.querySelector("#useremail").value;

  if (name_user.trim() === "" && email_user.trim() === "") {
    alert("Todos los campos son obligatorios");
    return;
  }

  objUser.name = name_user;
  objUser.email = email_user;

  users.push(Object.assign({}, objUser));
  addToHMTL()
  document.querySelector('#formulario').reset()
  console.log(users)
}

function addToHMTL() {
  cleanHTML()

  if(users.length > 0){
    users.forEach(user => {
      const tBody = document.createElement('tr')
      tBody.classList.add('bg-white', 'border-b', 'hover:bg-gray-50')

      const tName = document.createElement('th')
      tName.classList.add('px-6', 'py-4', 'font-medium', 'text-gray-900', 'whitespace-nowrap')
      // tName.setAttribute('scope', 'row')
      tName.textContent = user.name

      const tEmail = document.createElement('td')
      tEmail.classList.add('px-6', 'py-4')
      tEmail.textContent = user.email

      const tdButton = document.createElement('td')
      tdButton.classList.add('px-6', 'py-4', 'text-right', 'space-between')

      const tButtonEdit = document.createElement('button')
      tButtonEdit.classList.add('font-medium', 'text-blue-600', 'hover:underline', 'mt-3', 'mr-8')
      tButtonEdit.textContent = 'Editar'

      const tButtonDelete = document.createElement('button')
      tButtonDelete.classList.add('font-medium', 'text-red-600', 'hover:underline', 'mt-3', 'ml-10')
      tButtonDelete.textContent = 'Eliminar'

      //Añadirlos al body
      tBody.appendChild(tName)
      tBody.appendChild(tEmail)
      tBody.appendChild(tButtonEdit)
      tBody.appendChild(tButtonDelete)

      document.getElementById("users").appendChild(tBody)
    })
  }
}

function cleanHTML(){
  const users = document.getElementById("users")
  while(users.firstChild){
    users.removeChild(users.firstChild)
  }
}