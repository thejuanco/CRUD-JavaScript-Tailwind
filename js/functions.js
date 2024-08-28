import { alert } from "./alerts.js";

let objUser = {
  id: Date.now(),
  name: "",
  email: "",
}

const users = [];
let editando = false
//Almacena el id del usuario a editar
let userToIdEdit = null

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

  if(editando){
    console.log("Se esta editando")
  } else {
    users.push(Object.assign({}, objUser));
    document.querySelector('#formulario').reset()
  }

  addToHMTL()
  restarObject()
}

function restarObject(){
  objUser = {
    id: Date.now(),
    name: "",
    email: "",
  }
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

      tButtonEdit.onclick = () => editUser(user)

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

function editUser(objUser){
  const name_user = document.querySelector("#username");
  const email_user = document.querySelector("#useremail");

  name_user.value = objUser.name
  email_user.value = objUser.email

  editando = true
  userToIdEdit = objUser.id
}