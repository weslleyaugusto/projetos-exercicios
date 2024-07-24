const result = document.querySelector('#result')
const expression = []

function insert(text) {
    if(result.innerHTML === 'Use numeros') result.innerHTML = ''
    result.innerHTML += text
}

function back() {
    let expression = result.innerHTML
    result.innerHTML = expression.substring(0, expression.length - 1)
}

function clear() {
    result.innerHTML = ''
}

function calculate() {
    const resultHtml = result.innerHTML
    result.innerHTML = ''
    if (resultHtml) result.innerHTML = eval(resultHtml)
    else result.innerHTML = 'Use numeros'
}

//Eventos
document.querySelector('#clear').addEventListener('click', () => clear())
document.querySelector('#delete').addEventListener('click', () => back())
document.querySelector('#equal').addEventListener('click', () => calculate())