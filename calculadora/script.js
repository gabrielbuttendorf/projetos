let campoResultado = document.getElementById('txt-resultado')

let tamanhoJanela = window.innerWidth
const botoes = document.querySelectorAll('.botao-numero, .botao-operador')
let numerosDigitados = []
let operadores = ['+', '-', '*', '/', '%']
let qtdOperador = 0
let classeUltimoBotao = null
let digitouOperador = false

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
    diminuirFonte()
})

//BOTÃO LIMPAR | AC
const botaoAc = document.getElementById('btn-ac')
botaoAc.addEventListener('click', function() {
    digitouOperador = false
    campoResultado.style.fontSize = '1.8em'
    campoResultado.innerText = 0
    numerosDigitados = []
})

//BOTÃO APAGAR
const botaoApagar = document.getElementById('btn-apagar')
botaoApagar.addEventListener('click', function() {
    let valorUltimoBotao = numerosDigitados[numerosDigitados.length-1]

    if (operadores.includes(valorUltimoBotao)) {
        return
    } else {
        numerosDigitados.pop()
        if (numerosDigitados.length > 0) {
            campoResultado.innerText = numerosDigitados.join('')
        } else {
            campoResultado.innerText = 0
        }
    }
})

function usuarioClicou(event) {
    const valorBotao = event.target.value
    const idBotao = event.target.id
    const classeBotao = event.target.className
    let porcentagemCalculada = false

    // diminuirFonte()

    if (classeBotao == 'botao-operador') {
        digitouOperador = true
    }

    if (numerosDigitados.length >= 15) {
        campoResultado.style.fontSize = '1.4em'
    }

    if (numerosDigitados.length >= 9 && digitouOperador == false || numerosDigitados.length >= 19 && digitouOperador == true) {
        alert('Tamanho máximo: 9 caracteres')
    } else {
        //IMPEDE QUE SEJAM DIGITADOS DOIS OPERADORES SEGUIDAMENTE
        if (classeBotao == 'botao-operador' && classeUltimoBotao == 'botao-operador') {
            numerosDigitados.pop()
        } else {
    
            //VERIFICA SE O USUÁRIO QUER CALCULAR UMA PORCENTAGEM
            if (idBotao == 'btn-porcento' && qtdOperador > 0 && operadores.includes(valorBotao)) {
                porcentagemCalculada = true
                calcularResultado(porcentagemCalculada)
                classeUltimoBotao = ''
            }
    
            if (classeBotao == 'botao-operador' && valorBotao != '%') {
                qtdOperador++
            }
        }
    
        //CÁLCULO AUTOMÁTICO AO CLICAR PELA SEGUNDA VEZ EM ALGUM OPERADOR
        if(qtdOperador >= 2) {
            let resultado = calcularResultado()
            numerosDigitados = []
            numerosDigitados.push(resultado)
            campoResultado.style.fontSize = '1.8em'
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

        diminuirFonte()

        if (porcentagemCalculada == true) {
            classeUltimoBotao = ''
        } else {
            classeUltimoBotao = classeBotao
        }
    
        //EVITAR ERRO AO DIGITAR ALGUM OPERADOR ANTES DE UM NÚMERO
        if (
            classeBotao == 'botao-operador' && operadores.includes(numerosDigitados[0])) {
            numerosDigitados = []
            qtdOperador = 0
        }
    }
}

function calcularResultado(porcentagem) {
    digitouOperador = false

    let operacao = numerosDigitados.join('')
    let calculoPorcentagem

    if (porcentagem == true) {
        //partes[1] - valor que quer operar
        //partes[3] - sinal da operação principal
        //partes[4] - valor da porcentagem
        const partes = operacao.match(/(\d+(\.\d+)?)([+\-*/])?(\d+(\.\d+)?)/)

        if (partes[3] == '*' || partes[3] == '/') {
            calculoPorcentagem = eval(`${parseFloat(partes[1])}${partes[3]}${(partes[4] / 100)}`)
            calculoPorcentagem = arredondarDifPequena(calculoPorcentagem)
        } else {
            calculoPorcentagem = eval(`${parseFloat(partes[1])}${partes[3]}${parseFloat(partes[1] * (partes[4] / 100))}`)
        }
        
        numerosDigitados = []
        numerosDigitados.push(calculoPorcentagem)
        campoResultado.style.fontSize = '1.8em'
    } else {
        try {
            let resultadoOperacao = eval(operacao)

            if (isNaN(resultadoOperacao)) {
                resultadoOperacao = 0
            } else if (resultadoOperacao == 0) {
                numerosDigitados = []
            }

            campoResultado.style.fontSize = '1.8em'
            campoResultado.innerText = resultadoOperacao
            return resultadoOperacao
        } catch (error) {
            campoResultado.innerText = 0
            numerosDigitados = []
            campoResultado.style.fontSize = '1.8em'
        }
    }
}

//EVITAR CÁLCULOS DO JS QUE RETORNAM DECIMAL E NA CALCULADORA REAL RETORNAM INTEIRO
function arredondarDifPequena(numero) {
    if (Math.abs(numero - Math.round(numero)) < 0.0000000000001) {
        numero = Math.round(numero)
    }

    return numero
}

function diminuirFonte() {
    if (tamanhoJanela < 480) {
        if (numerosDigitados.toString().length > 16) {
            campoResultado.style.fontSize = '1.2em'
        } else if (numerosDigitados.toString().length > 20) {
            campoResultado.style.fontSize = '1em'
        }
    } else {
        if (numerosDigitados.toString().length > 16) {
            campoResultado.style.fontSize = '1.4em'
        } else if (numerosDigitados.toString().length > 20) {
            campoResultado.style.fontSize = '1.2em'
        }
    }
}

//BOTÃO DE TROCAR TEMA
const botaoTema = document.getElementById('checkbox-tema')
botaoTema.addEventListener('change', function() {
    if (botaoTema.checked == true) {
        document.documentElement.classList.toggle('dark-mode')     
    } else {
        document.documentElement.classList.toggle('dark-mode')
    }
})

window.addEventListener('resize', function() {
    tamanhoJanela = this.window.innerWidth
})
