//seleção de elementos
const generatePasswordBtn = document.querySelector('#generate-password')
const passwordContainer = document.querySelector('#password-container')

//novas funcionalidades
const lenghtInput = document.querySelector('#lenght')
const lettersInput = document.querySelector('#letters')
const numbersInput = document.querySelector('#numbers')
const symbolsInput = document.querySelector('#symbols')
const passwordIOptionsContainer = document.querySelector('#password-options')
const createPasswordBtn = document.querySelector('#create-password')
const copyPasswordBtn = document.querySelector('#copy-password')

//funções
const getLetterLowerCase = function () {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

const getLetterUpperCase = function () {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

const getNumber = function () {
    return Math.floor(Math.random() * 10).toString()
}

const getSymbols = function () {
    const symbols = '!@#$%¨&*()_-+=[]{}^~`´ç.:;,/?°"<>'
    return symbols[Math.floor(Math.random() * symbols.length)]
}

const generatePassword = function (getLetterLowerCase, getLetterUpperCase, getNumber, getSymbols) {
    let password = ''

    //segunda versão
    const passwordLenght = Number(lenghtInput.value)
    console.log(typeof passwordLenght)

    const generators = []

    if (lettersInput.checked) {
        generators.push(getLetterLowerCase, getLetterUpperCase)
    }
    if (numbersInput.checked) {
        generators.push(getNumber)
    }
    if (symbolsInput.checked) {
        generators.push(getSymbols)
    }
    if (generators.length === 0) return
    else {
        for (i = 0; i < passwordLenght; i += generators.length) {
            generators.forEach(func => {
                const randomValue = generators[Math.floor(Math.random() * generators.length)]()

                password += randomValue
            })
        }

        password = password.slice(0, passwordLenght)
        document.querySelector('#password-container h3').innerHTML = password

        passwordContainer.style.display = 'block'
    }

}
//eventos
generatePasswordBtn.addEventListener('click', e => {
    passwordIOptionsContainer.classList.toggle('hide')
})

//novas funcionalidadedes
createPasswordBtn.addEventListener('click', e => {
    generatePassword(getLetterLowerCase, getLetterUpperCase, getNumber, getSymbols)
}
)

copyPasswordBtn.addEventListener('click', e => {
    e.preventDefault()

    const password = passwordContainer.querySelector('h3').innerText

    navigator.clipboard.writeText(password).then(v => {
        copyPasswordBtn.innerText = 'Sennha copiada com sucesso!'
    })

    setTimeout(() => copyPasswordBtn.innerText = 'Copiar', 1000)
})