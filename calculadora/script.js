let campoNumerosDigitados = document.getElementById('txt-numeros-digitados')
let campoResultado = document.getElementById('txt-resultado')

//identificar algum clique ----
const botoes = document.querySelectorAll('.botao-numero, .botao-operador')
let numerosDigitados = []

botoes.forEach(button => {
    button.addEventListener('click', function(event) {
        const valorBotao = event.target.textContent
        numerosDigitados.push(valorBotao)
        campoNumerosDigitados.innerText = numerosDigitados.join('')
    })
})

//calcular e imprimir o resultado ----
const botaoIgual = document.getElementById('btn-igual')
botaoIgual.addEventListener('click', function() {
    const operacao = numerosDigitados.join('')
    const resultado = calcularOperacao(operacao)
    campoResultado.innerText = resultado
})

function calcularOperacao(operacao) {
    const resultado = eval(operacao)
    return resultado
}

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