let buttons = document.querySelectorAll('#color-container li')
let iphoneImg = document.querySelector('#product-container img')

buttons.forEach((btn) => {
    btn.addEventListener('click' , (e) => {
        buttons.forEach((btn) => {
            btn.querySelector('.color').classList.remove('selected')
            console.log(btn)
        })
        let button = e.target

        button.querySelector('.color').classList.add('selected')

        let id = btn.getAttribute('id')

        iphoneImg.src = `imagens/iphone_${id}.jpg`

        iphoneImg.classList.add('change')

        setTimeout(() => {
            iphoneImg.classList.remove('change')
        },200)

    })
})

/*
let buttons = document.querySelectorAll('#color-container li')
let iphoneImg = document.querySelector('#product-container img')

buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {

        buttons.forEach((btn) => {
            btn.querySelector('.color').classList.remove('selected')
        })
        let button = e.target//dentro do elemento li, é nescessário fazer uma configuração nos seus elementos filhos  de pointer events none para que ele só dispare o evento após clicar no li
        console.log(button)

        let id = btn.getAttribute('id')

        button.querySelector('.color').classList.add('selected')

        iphoneImg.src = `imagens/iphone_${id}.jpg`

        iphoneImg.classList.add('change')

        setTimeout(() => {
            iphoneImg.classList.remove('change')
        }, 200)
    })
})
*/