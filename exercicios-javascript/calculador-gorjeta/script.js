//Seleção de elementos
const countLabel = document.querySelector('#count-label')
const count = document.querySelector('#count')
const tipReference = document.querySelector('#reference')
const tipRange = document.querySelector('#tip')
const tipCount = document.querySelector('#tip-count span')
const totalCount = document.querySelector('#total-count span')

//Funções
function calculate(value) {
    const tip = Number(count.value * value / 100)
    tipCount.innerHTML = tip.toFixed(2)
    totalCount.innerHTML = (tip + Number(count.value)).toFixed(2)
}

tipRange.addEventListener('input', () => {
    tipReference.value = tipRange.value + '%'
    calculate(tipRange.value)
})
tipReference.addEventListener('input', () => {
    tipRange.value = tipReference.value.replace('%', '')
    calculate(tipReference.value.replace('%', ''))
})

count.addEventListener('input', () => calculate(Number(tipRange.value)))