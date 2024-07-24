class boxShadowGenerator {
    constructor(horizontal, horizontalRef, vertical, verticalRef, blurInput, blurRef, spread, spreadRef, previewBox, rule, webkitRule, mozRule, color, colorRef, opacity, opacityRef, inset) {
        this.horizontal = horizontal
        this.horizontalRef = horizontalRef
        this.vertical = vertical
        this.verticalRef = verticalRef
        this.blurInput = blurInput
        this.blurRef = blurRef
        this.spread = spread
        this.spreadRef = spreadRef
        this.previewBox = previewBox
        this.rule = rule
        this.webkitRule = webkitRule
        this.mozRule = mozRule
        this.color = color
        this.colorRef = colorRef
        this.opacity = opacity
        this.opacityRef = opacityRef
        this.inset = inset
    }
    updateValue() {
        this.horizontalRef.value = this.horizontal.value
        this.verticalRef.value = this.vertical.value
        this.blurRef.value = this.blurInput.value
        this.spreadRef.value = this.spread.value
        this.colorRef.value = this.color.value
        this.opacityRef.value = this.opacity.value

        this.apllyRule()
        this.showRule()
    }
    apllyRule() {
        const rgbValue = this.toRgba(this.colorRef.value) + ', ' + this.opacityRef.value
        console.log(rgbValue)

        this.previewBox.style.boxShadow = `${this.inset.checked === true ? 'inset' : ''} ${this.horizontalRef.value}px ${this.verticalRef.value}px ${this.blurRef.value}px ${this.spreadRef.value}px rgba(${rgbValue})`

        this.currentRule = this.previewBox.style.boxShadow
    }
    showRule() {
        rule.innerHTML = this.currentRule + ';'
        webkitRule.innerHTML = this.currentRule + ';'
        mozRule.innerHTML = this.currentRule + ';'
    }
    toRgba(hex) {
        return `${('0x' + hex[1] + hex[2]) | 0}, ${('0x' + hex[3] + hex[4]) | 0}, ${('0x' + hex[5] + hex[6]) | 0}`
    }
}

//Seleção de elementos
const horizontal = document.querySelector('#horizontal')
const horizontalRef = document.querySelector('#horizontal-value')
const vertical = document.querySelector('#vertical')
const verticalRef = document.querySelector('#vertical-value')
const blurInput = document.querySelector('#blur')
const blurRef = document.querySelector('#blur-value')
const spread = document.querySelector('#spread')
const spreadRef = document.querySelector('#spread-value')

const color = document.querySelector('#color')
const colorRef = document.querySelector('#color-value')
const opacity = document.querySelector('#opacity')
const opacityRef = document.querySelector('#opacity-value')
const inset = document.querySelector('#inset-shadow')

const previewBox = document.querySelector('#box')

const rule = document.querySelector('#rule span')
const webkitRule = document.querySelector('#webkit-rule span')
const mozRule = document.querySelector('#moz-rule span')

const boxShadow = new boxShadowGenerator(horizontal, horizontalRef, vertical, verticalRef, blurInput, blurRef, spread, spreadRef, previewBox, rule, webkitRule, mozRule, color, colorRef, opacity, opacityRef, inset)
console.log(boxShadow)

//Eventos
document.querySelectorAll('input[type="range').forEach(Input => {
    Input.addEventListener('input', () => {
        boxShadow.updateValue()
    })
})

color.addEventListener('input', () => {
    boxShadow.updateValue()
})

inset.addEventListener('change', e => {
    boxShadow.updateValue()
})

const rulesArea = document.querySelector('#rules-area')
const copyInstructions = document.querySelector('#copy-rules')

rulesArea.addEventListener('click', () => {
    const rules = rulesArea.innerText.replace(/^\s*\n/gm, '')

    copyInstructions.innerText = 'Copiado com sucesso!'
    navigator.clipboard.writeText(rules).then(() => setTimeout(() => copyInstructions.innerText = 'Clique no quadro para copiar as regras.', 1000))

})

//Inicialização
boxShadow.updateValue()