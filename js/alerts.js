export const alert = message => {
    const form = document.querySelector("#alertDiv");
    const alertExists = document.querySelector(".alert")

    if(!alertExists){
        const divMessage = document.createElement('div')
        divMessage.classList.add('p-2', 'rounded-md', 'border', 'border-red-400', 'w-80', 'alert')
        
        const messageText = document.createElement('p')
        messageText.classList.add('font-semibold', 'text-red-500', 'text-center')
        messageText.textContent = message

        divMessage.appendChild(messageText)
        form.appendChild(divMessage)

        setTimeout(() => {
            divMessage.remove()
        }, 3000)
    }
}