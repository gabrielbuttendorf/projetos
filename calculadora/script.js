let campoResultado = document.getElementById('txt-resultado')

const botoes = document.querySelectorAll('.botao-numero, .botao-operador')
let numerosDigitados = []
let operadores = ['+', '-', '*', '/', '%']
let qtdOperador = 0
let ultimoBotao = null

botoes.forEach(button => {
    button.addEventListener('click', function(event) {
        usuarioClicou(event)
    })
})

//BOTÃO IGUAL | =
const botaoIgual = document.getElementById('btn-igual')
botaoIgual.addEventListener('click', function() {
    numerosDigitados[0] = calcularResultado()
    numerosDigitados.splice(1)
    qtdOperador = 0
})

//BOTÃO LIMPAR | AC
const botaoAc = document.getElementById('btn-ac')
botaoAc.addEventListener('click', function() {
    campoResultado.innerText = 0
    numerosDigitados = []
})

//BOTÃO APAGAR
const botaoApagar = document.getElementById('btn-apagar')
botaoApagar.addEventListener('click', function() {
    numerosDigitados.pop()
    if(numerosDigitados.length > 0) {
        campoResultado.innerText = numerosDigitados.join('')
    } else {
        campoResultado.innerText = 0
    }
})

function calcularResultado(porcentagem) {
    let operacao = numerosDigitados.join('')
    if (porcentagem == true) {
        //partes[1] - valor que quer operar
        //partes[3] - sinal da operação principal
        //partes[4] - valor da porcentagem
        const partes = operacao.match(/(\d+(\.\d+)?)([+\-*/])?(\d+(\.\d+)?)/)
        let calculoPorcentagem = eval(`${parseFloat(partes[1])}${partes[3]}${parseFloat(partes[1] * (partes[4] / 100))}`)
        numerosDigitados = []
        numerosDigitados.push(calculoPorcentagem)
    } else {
        try {
            let resultadoOperacao = eval(operacao)
            if (isNaN(resultadoOperacao)) {
                resultadoOperacao = 0
            }
            campoResultado.innerText = resultadoOperacao
            return resultadoOperacao
        } catch (error) {
            campoResultado.innerText = 0
            numerosDigitados = []
        }
    }
}

function usuarioClicou(event) {
    const valorBotao = event.target.textContent
    const idBotao = event.target.id
    const classeBotao = event.target.className
    let porcentagemCalculada = false
    
    //IMPEDE QUE SEJAM DIGITADOS DOIS OPERADORES SEGUIDAMENTE
    if (classeBotao == 'botao-operador' && ultimoBotao == 'botao-operador') {
        numerosDigitados.splice(1)
    } else {

        //VERIFICA SE O USUÁRIO QUER CALCULAR UMA PORCENTAGEM
        if (idBotao == 'btn-porcento' && qtdOperador > 0 && operadores.includes(valorBotao)) {
            porcentagemCalculada = true
            calcularResultado(porcentagemCalculada)
        }

        if(classeBotao == 'botao-operador' && valorBotao != '%') {
            qtdOperador++
        }
    }

    //CÁLCULO AUTOMÁTICO AO CLICAR PELA SEGUNDA VEZ EM ALGUM OPERADOR
    if(qtdOperador >= 2) {
        let resultado = calcularResultado()
        numerosDigitados = []
        numerosDigitados.push(resultado)
        if (porcentagemCalculada == false) {
            numerosDigitados.push(valorBotao)
        }
        qtdOperador = 1
        campoResultado.innerText = numerosDigitados.join('')
    } else {
        if (porcentagemCalculada == false) {
            numerosDigitados.push(valorBotao)
        }
        campoResultado.innerText = numerosDigitados.join('')
    }
    ultimoBotao = classeBotao

    //EVITAR ERRO AO DIGITAR ALGUM OPERADOR ANTES DE UM NÚMERO
    if(
        classeBotao == 'botao-operador' && operadores.includes(numerosDigitados[0])) {
        numerosDigitados = []
        qtdOperador = 0
    }
}