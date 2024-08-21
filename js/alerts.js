const form = document.querySelector("#alertDiv");

export const alert = message => {
    const divMessage = document.createElement('div')
    divMessage.classList.add('p-2', 'rounded-md', 'border', 'border-red-400', 'w-80')
    
    const messageText = document.createElement('p')
    messageText.classList.add('font-semibold', 'text-red-500', 'text-center')
    messageText.textContent = message

    divMessage.appendChild(messageText)
    form.appendChild(divMessage)
}