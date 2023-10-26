let campoNumerosDigitados = document.getElementById('txt-numeros-digitados')
let campoResultado = document.getElementById('txt-resultado')

//identificar algum clique ----
const botoes = document.querySelectorAll('.botao-numero, .botao-operador')
let numerosDigitados = []
let qtdOperador = 0

botoes.forEach(button => {
    button.addEventListener('click', function(event) {
        const valorBotao = event.target.textContent
        const classeBotao = event.target.className
        
        if(classeBotao == 'botao-operador' && valorBotao != '%') {
            qtdOperador++
        }
        if(qtdOperador >= 2) {
            //arrumar erro de não poder digitar operador 2 vezes seguidas
            //arumar erro de porcentagem só funciona com adição
            let resultado = calcularResultado()
            numerosDigitados = []
            numerosDigitados.push(resultado)
            numerosDigitados.push(valorBotao)
            qtdOperador = 1
            campoNumerosDigitados.innerText = numerosDigitados.join('')
            console.log(numerosDigitados)
        } else {
            numerosDigitados.push(valorBotao)
            campoNumerosDigitados.innerText = numerosDigitados.join('')
        }
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
    campoNumerosDigitados.innerText = '-'
    campoResultado.innerText = '-'
    numerosDigitados = []
})

//botao de apagar ----
const botaoApagar = document.getElementById('btn-apagar')
botaoApagar.addEventListener('click', function() {
    numerosDigitados.pop()
    campoNumerosDigitados.innerText = '-'
    campoNumerosDigitados.innerText = numerosDigitados.join('')
})

// ------------- não finalizado  -------------
const botaoPorcento = document.getElementById('btn-porcento')
botaoPorcento.addEventListener('click', function() {
    const operacao = numerosDigitados.join('')
    const partes = operacao.match(/(\d+(\.\d+)?)([+\-*/])?(\d+(\.\d+)?)/)
    console.log(partes)
    campoResultado.innerText = parseFloat(partes[1]) + parseFloat(partes[1] * (partes[4] / 100))
    //partes[1] - valor que quer operar
    //partes[3] - sinal da operação principal
    //partes[4] - valor da porcentagem
})