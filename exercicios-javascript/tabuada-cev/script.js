function contar(){
    var res= document.getElementById('seltab')
    var n = document.getElementById('inumero')
    var div = document.getElementById('ires')
    alert(typeof(n))
    if(n.length == 0){
        alert('digite um numero')
    }else{
        res.innerHTML = ''
        n = Number(n.value)
        var  contador = 1
        while(contador <= 10){
            var item = document.createElement('option')
            item.text= `${contador} x ${n} = ${contador * n}`
            item.value = `tab${contador}`
            res.appendChild(item)
            contador++
        }
    }
}
