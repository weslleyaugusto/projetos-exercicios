var res = document.getElementById('res')
var n = document.getElementById('inum')
var sel = document.getElementById('isel')
var valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }
    else{
        return false
    }
}

function inLista(n , l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }
    else{
        return false
    }
}

function adicionar(){
    if(inLista(n.value , valores)){
        alert(`O numero ${n.value} já está na lista.`)
    }
    else if(!isNumero(n.value)){
        alert('Digite um valor entre 1 e 100.')
    }
    else{
        res.innerHTML = ''
        valores.push(Number(n.value))
        let opt = document.createElement('option')
        opt.text = `Valor ${n.value} adicionado.`
        opt.value = 'v' + n
        sel.appendChild(opt)
    }

    n.focus()
    n.value = ''

}

function finalizar(){
    if(valores == 0){
        alert('Adicione um valor antes de finalizar.')
    }
    else{
        let soma = 0
        let media = 0

        for(let pos in valores){
            soma += valores[pos]
            media = soma / valores.length
        }

        valores.sort()
        res.innerHTML = `<p>Ao todo temos ${valores.length} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${valores[valores.length - 1]}`
        res.innerHTML += `<p>O menor valor informado foi ${valores[0]}`
        res.innerHTML += `<p>A soma desses números é ${soma}`
        res.innerHTML += `<p>A média desses números é ${media}`

    }
}

function limpar(){
    sel.innerHTML = ''
    res.innerHTML = ''
}