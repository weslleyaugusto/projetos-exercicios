let calcButton = document.querySelector('input[type="submit"')

let resultArray = []

function calcular() {
    let tableNumber = document.querySelector('#table')
    let multiplyNumber = document.querySelector('#multiplication')

    let error = document.querySelector('#error')

    if (tableNumber.value == 0 || multiplyNumber.value == 0) {
        error.innerHTML = 'Preencha os campos acima.'
    } else {
        error.innerHTML = ''

        let tableOf = document.querySelector('#table-number')

        let multiplicationResults = document.querySelector('#multiplication-results')

        resultArray = []
        tableNumber = Number(tableNumber.value)
        multiplyNumber = Number(multiplyNumber.value)

        multiplicationResults.innerHTML = ''

        for (let i = 0; i <= multiplyNumber; i++) {

            resultArray.push(tableNumber * i)

            let divRow = document.createElement('div')
            divRow.setAttribute('class', 'row')
            divRow.innerHTML = `${tableNumber} x ${i} = ${resultArray[i]}`
            multiplicationResults.appendChild(divRow)
        }
        tableOf.innerHTML = tableNumber
        console.log(resultArray)
    }

}
calcButton.addEventListener('click', (e) => {
    e.preventDefault()
    calcular()
})
/*
let calcButton = document.querySelector('input[type="submit"')

let resultArray = []

function calcular() {
    let tableNumber = document.querySelector('#table')
    let multiplyNumber = document.querySelector('#multiplication')

    let tableOf = document.querySelector('#table-number')

    let multiplicationResults = document.querySelector('#multiplication-results')

    resultArray = []
    tableNumber = Number(tableNumber.value)
    multiplyNumber = Number(multiplyNumber.value)

    multiplicationResults.innerHTML = ''

    for (let i = 0; i <= multiplyNumber; i++) {

        resultArray.push(tableNumber * i)

        let divRow = document.createElement('div')
        divRow.setAttribute('class', 'row')
        divRow.innerHTML = `${tableNumber} x ${i} = ${resultArray[i]}`
        multiplicationResults.appendChild(divRow)
    }
    tableOf.innerHTML = tableNumber
    console.log(resultArray)
}
calcButton.addEventListener('click', (e) => {
    e.preventDefault()
    calcular()
})
*/