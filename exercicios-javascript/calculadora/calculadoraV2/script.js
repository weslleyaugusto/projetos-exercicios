//Seleção de elementos
const one = document.querySelector('#one')
const two = document.querySelector('#two')
const three = document.querySelector('#three')
const four = document.querySelector('#four')
const five = document.querySelector('#five')
const six = document.querySelector('#six')
const seven = document.querySelector('#seven')
const eight = document.querySelector('#eight')
const nine = document.querySelector('#nine')
const zero = document.querySelector('#zero')
const percent = document.querySelector('#percent')
const division = document.querySelector('#division')
const multiplication = document.querySelector('#multiplication')
const subtract = document.querySelector('#subtract')
const add = document.querySelector('#add')
const point = document.querySelector('#point')
const equal = document.querySelector('#equal')
const result = document.querySelector('#result')
const deleteBtn = document.querySelector('#delete')
const clear = document.querySelector('#clear')

//Funções
function insert(element) {
    if (result.innerHTML === 'Nenhum número...') {
        result.innerHTML = ''
        result.style.fontSize = '40px'
    }

    if (element.innerHTML === 'X') result.innerHTML += '*'
    else result.innerHTML += element.innerHTML
}

function insertKey(key) {
    if (key === '1') result.innerHTML += key
    if (key === '2') result.innerHTML += key
    if (key === '3') result.innerHTML += key
    if (key === '4') result.innerHTML += key
    if (key === '5') result.innerHTML += key
    if (key === '6') result.innerHTML += key
    if (key === '7') result.innerHTML += key
    if (key === '8') result.innerHTML += key
    if (key === '9') result.innerHTML += key
    if (key === '0') result.innerHTML += key
    if (key === '*') result.innerHTML += key
    if (key === '-') result.innerHTML += key
    if (key === '+') result.innerHTML += key
    if (key === '/') result.innerHTML += key
    if (key === '.') result.innerHTML += key
    }

function deleteNumber() {
    let expression = result.innerHTML
    result.innerHTML = expression.substring(0, expression.length - 1)
}

function calculate() {
    if (result.innerHTML == '') {
        result.innerHTML = 'Nenhum número...'
        result.style.fontSize = '24px'
    }
    else {
        result.innerHTML = eval(result.innerHTML)
    }
}

//Eventos
document.querySelectorAll('#buttons-container button').forEach(e => {
    if (
        e.innerHTML == '%'
        || e.innerHTML == '/'
        || e.innerHTML == 'X'
        || e.innerHTML == '-'
        || e.innerHTML == '+'
        || e.innerHTML == '1'
        || e.innerHTML == '2'
        || e.innerHTML == '3'
        || e.innerHTML == '4'
        || e.innerHTML == '5'
        || e.innerHTML == '6'
        || e.innerHTML == '7'
        || e.innerHTML == '8'
        || e.innerHTML == '9'
        || e.innerHTML == '0'
        || e.innerHTML == '.'
    ) {
        e.addEventListener('click', () => insert(e))
    }
})

deleteBtn.addEventListener('click', () => deleteNumber())
equal.addEventListener('click', () => calculate())
clear.addEventListener('click', () => result.innerHTML = '')

document.addEventListener('keydown', e => {
    console.log(e.key)
    if (e.key === 'Backspace') deleteNumber()
    if (e.key === 'Enter') calculate()
    insertKey(`${e.key}`)
    if(e.key === 'c') result.innerHTML = ''
        console.log(e.key)
})