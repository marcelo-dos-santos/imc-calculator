import { Modal } from './modal.js'
import { calculateIMC, notANumber } from './utils.js'

// Variáveis
const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")


form.onsubmit = function(event) {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height)

    if(weightOrHeightIsNotANumber) {
        AlertError.open()
        return;
    }

    AlertError.close()

    const result = calculateIMC(weight, height)
    displayResultMessage(result)

}

function displayResultMessage(result) {
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText = message
    Modal.open()
}


const AlertError = {
    element: document.querySelector('.alert-error'),
    open() {
        AlertError.element.classList.add('open')
    },
    close() {
        AlertError.element.classList.remove('open')
    }
}

inputWeight.oninput = () => AlertError.close()
inputHeight.oninpút = () => AlertError.close()