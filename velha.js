
var jogador, vencedor = null

var vencedorSelecionado= document.getElementById('vencedor-selecionado')

var jogadorSelecionado = document.getElementById('jogador-selecionado')

var quadrados = document.getElementsByClassName('quadrado')

mudarJogador('X')

function escolherQuadrado(id){
    if(vencedor!==null){
        return
    }
    var quadrado= document.getElementById(id)

    if(quadrado.innerHTML!=='-'){
        return
    }

    quadrado.innerHTML=jogador
    quadrado.style.color='#000'

    if(jogador==='X'){
        jogador="O"
    }else{
        jogador="X"
    }
    mudarJogador(jogador)
    checaVencedor()
}


function mudarJogador(valor){
    jogador = valor
    jogadorSelecionado.innerHTML=jogador
}

function checaVencedor(){
    var quadrado1 = document.getElementById('1')

    var quadrado2 = document.getElementById('2')

    var quadrado3 = document.getElementById('3')

    var quadrado4 = document.getElementById('4')

    var quadrado5 = document.getElementById('5')

    var quadrado6 = document.getElementById('6')

    var quadrado7 = document.getElementById('7')

    var quadrado8 = document.getElementById('8')

    var quadrado9 = document.getElementById('9')


    if(checaSequencia(quadrado1,quadrado2,quadrado3)){
        mudarCorQuadrado(quadrado1,quadrado2,quadrado3)
        mudarvencedor(quadrado1)
        return
        
    }
    if(checaSequencia(quadrado4,quadrado5,quadrado6)){
        mudarCorQuadrado(quadrado4,quadrado5,quadrado6)
        mudarvencedor(quadrado4)
        return
        
    }
    if(checaSequencia(quadrado7,quadrado8,quadrado9)){
        mudarCorQuadrado(quadrado7,quadrado8,quadrado9)
        mudarvencedor(quadrado7)
        return
        
    }
    if(checaSequencia(quadrado1,quadrado4,quadrado7)){
        mudarCorQuadrado(quadrado1,quadrado4,quadrado7)
        mudarvencedor(quadrado1)
        return
        
    }
    if(checaSequencia(quadrado2,quadrado5,quadrado8)){
        mudarCorQuadrado(quadrado2,quadrado5,quadrado8)
        mudarvencedor(quadrado2)
        return
    }
    if(checaSequencia(quadrado3,quadrado6,quadrado9)){
        mudarCorQuadrado(quadrado3,quadrado6,quadrado9)
        mudarvencedor(quadrado3)
        return
    }
    if(checaSequencia(quadrado1,quadrado5,quadrado9)){
        mudarCorQuadrado(quadrado1,quadrado5,quadrado9)
        mudarvencedor(quadrado1)
        return
    }
    if(checaSequencia(quadrado3,quadrado5,quadrado7)){
        mudarCorQuadrado(quadrado3,quadrado5,quadrado7)
        mudarvencedor(quadrado3)
        
    }


}
function mudarvencedor(quadrado){
    vencedor= quadrado.innerHTML
    vencedorSelecionado.innerHTML=vencedor

}


function mudarCorQuadrado(quadrado1,quadrado2,quadrado3){
    quadrado1.style.background='#0f0'
    quadrado2.style.background='#0f0'
    quadrado3.style.background='#0f0'
}



function checaSequencia(quadrado1,quadrado2,quadrado3){
 var eIgual = false

 if(quadrado1.innerHTML!=='-' && quadrado1.innerHTML===quadrado2.innerHTML && quadrado2.innerHTML===quadrado3.innerHTML){
     eIgual=true
 }
 return eIgual
}

function reiniciar(){
    vencedor=null
    vencedorSelecionado.innerHTML=''

    for(var i=1;1<=9;i++){
        var quadrado =document.getElementById(i)
        quadrado.style.background='#555555'
        quadrado.style.color='#555555'
        quadrado.innerHTML='-'
    }
    mudarJogador('X')
}