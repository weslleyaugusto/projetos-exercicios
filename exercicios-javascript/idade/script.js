function checar(){
    var anon = document.getElementById('iano')
    anon = Number(anon.value)
    var res  = document.getElementById('res')
    var ano_atual = new Date()
    ano_atual = ano_atual.getFullYear()
    var centrar = document.getElementById('centrar')
    centrar.sty
    
    if(anon == 0 || anon > ano_atual){//verifica o ano e diz se é invalido, caso não, o programa segue normalmente
        alert('Digite uma data válida!')
    }else{
        var img = document.createElement('img')//cria um elemento html e atribui ele a uma variável
        img.setAttribute('id' , 'foto')//adiciona o atributo id e define o valor dele
        var sexo = document.getElementsByName('sexo')
        var idade = ano_atual - anon

        if(sexo[0].checked){

            res.innerHTML = `<p>voce é homem e tem ${idade} anos</p>`
            if(idade < 10  && idade > 0){
                //crianca
                img.setAttribute('src','imagens/bebe-menino.png')//adiciona o atributo src no elemento e define seu valor
            }else if( idade < 21){
                //jovem
                img.setAttribute('src' , 'imagens/jovem-homem.png')
            }else if(idade < 45){
                //adulto
                img.setAttribute('src' , 'imagens/homem-adulto.png')
            }else{
                //idoso
                img.setAttribute('src' , 'imagens/homem-idoso.png')
            }

        }else if(sexo[1].checked){

            res.innerHTML = `<p>voce é mulher e tem ${idade} anos</p>`
            if(idade < 10){
                //crianca
                img.setAttribute('src' , 'imagens/bebe-menina.png')//adiciona o atributo src no elemento e define o seu valor
            }else if(idade < 21){
                //jovem
                img.setAttribute('src' , 'imagens/mulher-jovem.png')
            }else if(idade < 45){
                //adulto
                img.setAttribute('src' , 'imagens/mulher-adulta.png')
            }else{
                //idoso
                img.setAttribute('src' , 'imagens/mulher-idosa.png')
            }

        }else{

            alert('Marque uma das opções abaixo!')  

        }

        res.style.textAlign = 'center'
        res.appendChild(img)//adiciona o elemento  img ao documento abaixo do elemento com o id res que está armazenado na variável
        }
}