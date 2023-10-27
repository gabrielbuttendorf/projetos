let campoResultado = document.getElementById('txt-resultado')

//identificar algum clique ----
const botoes = document.querySelectorAll('.botao-numero, .botao-operador')
let numerosDigitados = []
// let operadores = ['+', '-', '*', '/', '%']
let ultimaPosicao = 0
let qtdOperador = 0
let ultimoBotao = null


botoes.forEach(button => {
    button.addEventListener('click', function(event) {
        const valorBotao = event.target.textContent
        const classeBotao = event.target.className
        console.log(numerosDigitados)
        if (classeBotao == 'botao-operador' && ultimoBotao == 'botao-operador') {
            numerosDigitados.splice(1)
        } else {
            if(classeBotao == 'botao-operador' && valorBotao != '%') {
                qtdOperador++
            }
        }

        if(qtdOperador >= 2) {
            //se digitar operador antes de algum número da erro (não está dando mais)
            //passar o resultado da porcentagem pra cá
            let resultado = calcularResultado()
            numerosDigitados = []
            numerosDigitados.push(resultado)
            numerosDigitados.push(valorBotao)
            qtdOperador = 1
            campoResultado.innerText = numerosDigitados.join('')
        } else {
            numerosDigitados.push(valorBotao)
            campoResultado.innerText = numerosDigitados.join('')
        }
        ultimoBotao = classeBotao
    })
})

function calcularResultado() {
    let operacao = numerosDigitados.join('')
    let resultadoOperacao = eval(operacao)
    campoResultado.innerText = resultadoOperacao
    return resultadoOperacao
}

//botao igual (=) ----
const botaoIgual = document.getElementById('btn-igual')
botaoIgual.addEventListener('click', function() {
    calcularResultado()
})

//botao de limpar (Ac) ----
const botaoAc = document.getElementById('btn-ac')
botaoAc.addEventListener('click', function() {
    campoResultado.innerText = '-'
    numerosDigitados = []
})

//botao de apagar ----
const botaoApagar = document.getElementById('btn-apagar')
botaoApagar.addEventListener('click', function() {
    numerosDigitados.pop()
    campoResultado.innerText = numerosDigitados.join('')
})

// ------------- não finalizado  -------------
const botaoPorcento = document.getElementById('btn-porcento')
botaoPorcento.addEventListener('click', function() {
    const operacao = numerosDigitados.join('')
    const partes = operacao.match(/(\d+(\.\d+)?)([+\-*/])?(\d+(\.\d+)?)/)
    //console.log(partes)
    let teste = `${parseFloat(partes[1])}${partes[3]}${parseFloat(partes[1] * (partes[4] / 100))}`
    teste = eval(teste)
    numerosDigitados = []
    numerosDigitados.push(teste)
    campoResultado.innerText = teste
    
    //partes[1] - valor que quer operar
    //partes[3] - sinal da operação principal
    //partes[4] - valor da porcentagem
})