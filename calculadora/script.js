let campoNumerosDigitados = document.getElementById('txt-numeros-digitados')
let campoResultado = document.getElementById('txt-resultado')

//identificar algum clique ----
const botoes = document.querySelectorAll('.botao-numero, .botao-operador')
const numerosDigitados = []

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

//botao de limpar ----
const botaoAc = document.getElementById('btn-ac')
botaoAc