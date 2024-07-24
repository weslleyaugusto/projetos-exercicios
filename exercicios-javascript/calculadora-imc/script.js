let weight = document.querySelector('#weight')
let height = document.querySelector('#height')

let erro = document.createElement('div')

let calcButton = document.querySelector('button')

let form = document.querySelector('form')

let buttonsContainer = document.querySelector('#buttons-container')

let resultsContainer = document.querySelector('#results-container')

let formContainer = document.querySelector('#form-container')

let intensityNumber = document.querySelector('#intensity-number')
let intensityClass = document.querySelector('#intensity-class')

calcButton.addEventListener('click', (e) => {
    e.preventDefault()

    if (weight.value == 0 || height.value == 0) {
        erro.innerHTML = 'Preencha os campos acima para calcular.'
        erro.setAttribute('id', 'error')

        form.insertBefore(erro, buttonsContainer)
    } else {
        if (erro) {
            erro.innerHTML = ''
            erro.style.display = 'none'
            erro.style.fontSize = '12px'
        }
        let weightValue = Number(weight.value)
        let heightValue = Number(height.value)

        let imc = weightValue / heightValue ** 2
        imc = imc.toFixed(2)

        formContainer.style.display = 'none'

        resultsContainer.style.display = 'block'
        intensityNumber.innerHTML = imc

        if (imc < 18.5) {
            intensityNumber.style.color = 'red'
            intensityClass.innerHTML = 'Magreza'
            intensityClass.style.color = 'red'
        } else if (imc >= 18, 5 && imc <= 24.9) {
            intensityNumber.style.color = 'green'
            intensityClass.style.color = 'green'
            intensityClass.innerHTML = 'Normal'
        } else if (imc >= 25 && imc <= 29.9) {
            intensityNumber.style.color = 'yellow'
            intensityClass.innerHTML = 'Sobrepeso'
            intensityClass.style.color = 'yellow'
        } else if (imc >= 30 && imc <= 39.9) {
            intensityNumber.style.color = 'orange'
            intensityClass.innerHTML = 'Obesidade'
            intensityClass.style.color = 'orange'
        } else {
            intensityNumber.style.color = 'red'
            intensityClass.style.color = 'red'
            intensityClass.innerHTML = 'Obesidade grave'
        }

    }
})

let backButton = document.querySelector('#back')

backButton.addEventListener('click', () => {
    formContainer.style.display = 'block'
    resultsContainer.style.display = 'none'
    weight.value = ''
    height.value = ''
})

/*
if (imc < 18.5) {
            intensityNumber.style.color = 'red'
            intensityClass.innerHTML = 'Magreza'
            intensityClass.style.color = 'red'
        } else if (imc >= 18, 5 && imc <= 24.9) {
            intensityNumber.style.color = 'green'
            intensityClass.style.color = 'green'
            intensityClass.innerHTML = 'Normal'
        } else if (imc >= 25 && imc <= 29.9) {
            intensityNumber.style.color = 'yellow'
            intensityClass.innerHTML = 'Sobrepeso'
            intensityClass.style.color = 'yellow'
        } else if (imc >= 30 && imc <= 39.9) {
            intensityNumber.style.color = 'orange'
            intensityClass.innerHTML = 'Obesidade'
            intensityClass.style.color = 'orange'
        } else {
            intensityNumber.style.color = 'red'
            intensityClass.style.color = 'red'
            intensityClass.innerHTML = 'Obesidade grave'
        }*/