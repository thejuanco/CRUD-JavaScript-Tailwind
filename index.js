document.addEventListener('DOMContentLoaded', function(){
    //Selectores 
    const form = document.querySelector('formulario')
    const name = document.querySelector('#username')
    const email = document.querySelector('#useremail')

    //Eventlisteners
    listeners()
    function listeners(){
        // form.addEventListener('submit', addUser)
        name.addEventListener('change', validate)
        email.addEventListener('change', validate)
    }

    function validate(){
        console.log('Validando')
    }
})