let urlInput = document.querySelector('#url')
let qrContainer = document.querySelector('#code-container')
let button = document.querySelector('input[type="submit"')
let error = document.querySelector("#error")
let img = document.querySelector('img')
let container = document.querySelector('.container')

function gerarQrCode(){
    if(urlInput.value == ''){
        error.innerHTML = 'Preencha o campo acima'
    }else{
        error.innerHTML = ''
        let urlInputText = String(urlInput.value)
        button.value = 'Gerando código...'
        img.addEventListener('load', (e) => {
            container.classList.add('active')
            button.value = 'Código gerado!'
        })
        img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${urlInputText}`
    }
}

button.addEventListener('click',(e) => {
    e.preventDefault()

    gerarQrCode()
})

urlInput.addEventListener('keydown', (e) => {
    if(e.code === 'Enter'){
        gerarQrCode()
    }
})

urlInput.addEventListener('keydown', (e) => {
    if(e.code === 'Enter')return
    else{
        container.classList.remove('active')
        img.src  = ''
        button.value = 'Gerar QR code'
    }
})