let iphoneImg = document.querySelector('#product-container img')
console.log(iphoneImg)

let green = document.querySelector('#green')
let silver = document.querySelector('#silver')
let golden = document.querySelector('#golden')
let grafite = document.querySelector('#grafite')
let blue = document.querySelector('#blue')

green.addEventListener('click', () => {
    try {
        let selected = document.querySelector('.selected')
        selected.classList.remove('selected')
    } finally {
        let colorGreen = document.querySelector('#green .color')
        colorGreen.classList.add('selected')

        iphoneImg.src = 'imagens/iphone_green.jpg'
    }
})

silver.addEventListener('click', () => {
    try {
        let selected = document.querySelector('.selected')
        selected.classList.remove('selected')
    } finally {
        let colorSilver = document.querySelector('#silver .color')
        colorSilver.classList.add('selected')
        iphoneImg.src = 'imagens/iphone_silver.jpg'
    }
})

golden.addEventListener('click', () => {
    try {
        let selected = document.querySelector('.selected')
        selected.classList.remove('selected')
    } finally {
        let colorGolden = document.querySelector('#golden .color')
        colorGolden.classList.add('selected')

        iphoneImg.src = 'imagens/iphone_golden.jpg'
    }
})

grafite.addEventListener('click', () => {
    try {
        let selected = document.querySelector('.selected')
        selected.classList.remove('selected')
    } finally {
        let colorGrafite = document.querySelector('#grafite .color')
        colorGrafite.classList.add('selected')

        iphoneImg.src = 'imagens/iphone_grafite.jpg'
    }
})

blue.addEventListener('click', () => {
    try {
        let selected = document.querySelector('.selected')
        selected.classList.remove('selected')
    } finally {
        let colorBlue = document.querySelector('#blue .color')
        colorBlue.classList.add('selected')

        iphoneImg.src = 'imagens/iphone_blue.jpg'
    }
})