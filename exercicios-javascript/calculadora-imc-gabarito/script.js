// IMC DATA
const data = [
    {
        min: 0,
        max: 18.4,
        classification: "Menor que 18,5",
        info: "Magreza",
        obesity: "0",
    },
    {
        min: 18.5,
        max: 24.9,
        classification: "Entre 18,5 e 24,9",
        info: "Normal",
        obesity: "0",
    },
    {
        min: 25,
        max: 29.9,
        classification: "Entre 25,0 e 29,9",
        info: "Sobrepeso",
        obesity: "I",
    },
    {
        min: 30,
        max: 39.9,
        classification: "Entre 30,0 e 39,9",
        info: "Obesidade",
        obesity: "II",
    },
    {
        min: 40,
        max: 99,
        classification: "Maior que 40,0",
        info: "Obesidade grave",
        obesity: "III",
    },
];
//seleção de elementos
let imctable = document.querySelector('#imc-table')

let weightInput = document.querySelector('#weight')
let heightInput = document.querySelector('#height')

let calcButton = document.querySelector('#calc-btn')
let clearButton = document.querySelector('#clear-btn')
const backButton = document.querySelector('#back-btn')

let calcContainer = document.querySelector('#calc-container')
let resultContainer = document.querySelector('#result-container')

let error = document.querySelector('#error')

let imcNumber = document.querySelector('#imc-number span')
let imcInfo = document.querySelector('#imc-info span')

//Criação da tabela
function createTable() {
    data.forEach(item => {
        let div = document.createElement('div')
        div.setAttribute('class', 'table-data')

        let classification = document.createElement('p')
        classification.innerHTML = item.classification

        let info = document.createElement('p')
        info.innerHTML = item.info

        let obesity = document.createElement('p')
        obesity.innerHTML = item.obesity

        div.appendChild(classification)
        div.appendChild(info)
        div.appendChild(obesity)

        imctable.appendChild(div)
    })
}

function clearInputs() {

    weightInput.value = ''
    heightInput.value = ''
}

function calcImc(weight, height) {
    const imc = (weight / height ** 2).toFixed(1)

    return imc
}

createTable()

calcButton.addEventListener('click', e => {
    e.preventDefault()



    if (weightInput.value == 0 || heightInput.value == 0) {
        error.style.display = 'block'
        error.innerHTML = 'Preencha os campos acima.'
    }
    else {
        error.innerHTML = ''
        error.style.display = 'none'

        let weight = Number(weightInput.value)
        let height = Number(heightInput.value)

        const imc = calcImc(weight, height)

        let info
        data.forEach(item => {
            if (imc >= item.min && imc <= item.max) {
                info = item.info
                console.log(info)
                if (info == undefined) {
                    console.log(info)
                    error.innerHTML = 'Os valores fornecidos não são possiveis'
                    error.style.display = 'block'
                }
                else {
                    imcNumber.innerHTML = imc
                    imcInfo.innerHTML = info

                    console.log(info)

                    switch (info) {
                        case 'Magreza':
                            imcInfo.classList.add('low')
                            imcNumber.classList.add('low')
                            break
                        case 'Normal':
                            imcInfo.classList.add('good')
                            imcNumber.classList.add('good')
                            break
                        case 'Sobrepeso':
                            imcInfo.classList.add('medium')
                            imcNumber.classList.add('medium')
                            break
                        case 'Obesidade':
                            imcInfo.classList.add('high')
                            imcNumber.classList.add('high')
                            break
                        case 'Obesidade grave':
                            imcInfo.classList.add('very-high')
                            imcNumber.classList.add('very-high')
                            break
                    }

                    calcContainer.classList.add('hide')
                    resultContainer.classList.remove('hide')
                }
            } else {
                error.innerHTML = 'Os valores fornecidos não são possiveis'
                error.style.display = 'block'
            }
        })
    }

})

backButton.addEventListener('click', () => {

    calcContainer.classList.remove('hide')
    resultContainer.classList.add('hide')

    imcInfo.removeAttribute('class')
    imcNumber.removeAttribute('class')

    clearInputs()
})
clearButton.addEventListener('click', (e) => {
    e.preventDefault()

    clearInputs()
})

/*
// IMC DATA
const data = [
    {
        min: 0,
        max: 18.4,
        classification: "Menor que 18,5",
        info: "Magreza",
        obesity: "0",
    },
    {
        min: 18.5,
        max: 24.9,
        classification: "Entre 18,5 e 24,9",
        info: "Normal",
        obesity: "0",
    },
    {
        min: 25,
        max: 29.9,
        classification: "Entre 25,0 e 29,9",
        info: "Sobrepeso",
        obesity: "I",
    },
    {
        min: 30,
        max: 39.9,
        classification: "Entre 30,0 e 39,9",
        info: "Obesidade",
        obesity: "II",
    },
    {
        min: 40,
        max: 99,
        classification: "Maior que 40,0",
        info: "Obesidade grave",
        obesity: "III",
    },
];
//seleção de elementos
let imctable = document.querySelector('#imc-table')

let weightInput = document.querySelector('#weight')
let heightInput = document.querySelector('#height')

let calcButton = document.querySelector('#calc-btn')
let clearButton = document.querySelector('#clear-btn')
const backButton = document.querySelector('#back-btn')

let calcContainer = document.querySelector('#calc-container')
let resultContainer = document.querySelector('#result-container')

let error = document.querySelector('#error')
error.innerHTML = 'Preencha os campos acima.'

let imcNumber = document.querySelector('#imc-number span')
let imcInfo = document.querySelector('#imc-info span')

//Criação da tabela
function createTable() {
    data.forEach(item => {
        let div = document.createElement('div')
        div.setAttribute('class', 'table-data')

        let classification = document.createElement('p')
        classification.innerHTML = item.classification

        let info = document.createElement('p')
        info.innerHTML = item.info

        let obesity = document.createElement('p')
        obesity.innerHTML = item.obesity

        div.appendChild(classification)
        div.appendChild(info)
        div.appendChild(obesity)

        imctable.appendChild(div)
    })
}

function clearInputs() {

    weightInput.value = ''
    heightInput.value = ''
}

function calcImc(weight, height) {
    const imc = (weight / height ** 2).toFixed(1)

    return imc
}

createTable()

calcButton.addEventListener('click', e => {
    e.preventDefault()

    if (weightInput.value == 0 || heightInput.value == 0){
        error.style.display = 'block'
}
let weight = Number(weightInput.value)
let height = Number(heightInput.value)

if (!weight || !height) return

const imc = calcImc(weight, height)

let info
data.forEach(item => {
    if (imc >= item.min && imc <= item.max) {
        info = item.info
    }
    console.log(info)
    if (!info) return
    imcNumber.innerHTML = imc
    imcInfo.innerHTML = info

    switch (info) {
        case 'Magreza':
            imcInfo.classList.add('low')
            imcNumber.classList.add('low')
            break
        case 'Normal':
            imcInfo.classList.add('good')
            imcNumber.classList.add('good')
            break
        case 'Sobrepeso':
            imcInfo.classList.add('medium')
            imcNumber.classList.add('medium')
            break
        case 'Obesidade':
            imcInfo.classList.add('high')
            imcNumber.classList.add('high')
            break
        case 'Obesidade grave':
            imcInfo.classList.add('very-high')
            imcNumber.classList.add('very-high')
            break
    }
})

calcContainer.classList.add('hide')
resultContainer.classList.remove('hide')
})

backButton.addEventListener('click', () => {

    calcContainer.classList.remove('hide')
    resultContainer.classList.add('hide')

    imcInfo.removeAttribute('class')
    imcNumber.removeAttribute('class')

    clearInputs()
})
clearButton.addEventListener('click', (e) => {
    e.preventDefault()

    clearInputs()
})
    */