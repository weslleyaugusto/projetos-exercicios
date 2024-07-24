function contar(){
    var inicio = Number(document.getElementById('iinicio').value)
    var fim  = Number(document.getElementById('ifim').value)
    var passo = Number(document.getElementById('ipasso').value)
    var res = document.getElementById('res')
    if(inicio <= 0){//verifica se as variáveis estão vazias
        res.innerHTML = 'Digite dados válidos no campo de inicio!'
    }
    else if(fim <= 0){
        res.innerHTML = 'Digite dados válidos  no campo de fim!'
    }
    else if(passo <= 0){
        res.innerHTML = 'Digite dados válidos no campo de passo!'
        res.innerHTML += ''
    }
    else{
        res.innerHTML = '<p>Contando:</p>'
        if(inicio < fim){//contagem crescente
            for(var c = inicio;c <= fim;c += passo){//verifica se c é menor ou igual à fim, se for, ele executa o bloco de codigo e soma o valor de c com o valor do passo
            res.innerHTML += `&#x1F449;${c}`
        }
        }
        else{//contagem regressiva
            for(var c = inicio; c >= fim; c -= passo){//verifica se c é maior ou igual a fim, se for, ele executa o codigo e subtrai o valor de c pelo valor de passo
                res.innerHTML +=`&#x1F449;${c}`
            }
        }
        res.innerHTML += '&#x1F3C1;'
    }
}