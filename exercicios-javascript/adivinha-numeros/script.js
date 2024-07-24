const button = document.querySelector('button')
const res = document.querySelector('#res')
let aNumber = Math.floor(Math.random() * (100 - 1) +  1)

button.addEventListener('click', e => {
    e.preventDefault()

    const iNumber = document.querySelector('input')
    if(iNumber.value < 1 || iNumber.value > 100){
        res.innerHTML = 'Digite um número entre 1 e 100.'
    }else{
        res.innerHTML = ''
        let numberinput = Number(iNumber.value)

        if(numberinput < aNumber) res.innerHTML = 'O número que você digitou é menor'
        else if(numberinput > aNumber) res.innerHTML = 'O número que você digitou é maior'
        else res.innerHTML = 'Parabéns! Você acertou o número.'
    }
})