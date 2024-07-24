var hora = new Date()
hora = hora.getHours()
var horario = document.getElementById('horario')

var foto = document.getElementById('foto')
var corpo = document.getElementsByTagName('body')[0]
var rodape = document.getElementById('rodape')
var img = document.getElementById('img')
    if( hora == 1){//verifica a hora
        horario.innerHTML = `Agora são extamente ${hora} hora. `//exibe a hora do sistema
        horario.innerHTML += 'Boa madrugada!'//exibe a mensagem no elemento com com id horario que está armazenado dentro da variável horario
        corpo.style.backgroundColor = '#180E16'//muda a cor do body
        rodape.style.color = 'white'//muda a cor da letra do rodape
        img.src = 'imagens/noite.jpg'//carrega a imagem no elemento img que está armazenado dentro da variável
    }
    else if(hora > 1 && hora < 5 ){
        horario.innerHTML = `Agora são extamente ${hora} horas. `
        horario.innerHTML += 'Boa madrugada!'
        corpo.style.backgroundColor = '#180E16'
        rodape.style.color = 'white'
        img.src = 'imagens/noite.jpg'
    }
    else if(hora < 12 && hora > 5){
        horario.innerHTML = `Agora são extamente ${hora} horas. `
        horario.innerHTML += 'Bom dia!'
        corpo.style.backgroundColor = '#e2cd9f'
        img.src = 'imagens/manha.jpg'
        
    }
    else if(hora < 18){
        horario.innerHTML = `Agora são extamente ${hora} horas. `
        horario.innerHTML += 'Boa tarde!'
        corpo.style.backgroundColor = '#D7653F'
        img.src = 'imagens/tarde.jpg'
    }
    else if(hora  < 25){
        horario.innerHTML = `Agora são extamente ${hora} horas. `
        horario.innerHTML += 'Boa noite!'
        corpo.style.backgroundColor = '#180E16'
        rodape.style.color = 'white'
        img.src = 'imagens/noite.jpg'
    }else if(hora >=25 || hora < 0){
        horario.innerHTML = 'Hora invalida!'
        corpo.style.backgroundColor = 'rgb(89, 34, 239)'
    }