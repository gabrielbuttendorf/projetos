setTimeout(FuncaoPrincipal, 1000)

function FuncaoPrincipal() {
    VermelhoVeiculos()
    PiscarPedestre()
    setTimeout(PiscarPedestre, 1500)
    setTimeout(PiscarPedestre, 3000)
    setTimeout(PiscarPedestre, 4500)

    setTimeout(VermelhoPedestres, 6000)
    setTimeout(VermelhoVeiculosDesligar, 6500)
    setTimeout(VerdeVeiculos, 6500)

    setTimeout(VerdeVeiculosDesligar, 10000)
    setTimeout(AmareloVeiculos, 10000)

    setTimeout(AmareloVeiculosDesligar, 14000)
    setTimeout(VermelhoVeiculos, 14000)
    setTimeout(VermelhoPedestresDesligar, 14000)
    setTimeout(VerdePedestres, 14000)

    setTimeout(VerdePedestresDesligar, 18000)
}

setInterval(FuncaoPrincipal, 19000)

function PiscarPedestre() {
    VermelhoPedestres()
    setTimeout(VermelhoPedestresDesligar, 900)
}

// ---------------------------------------------------
function VermelhoVeiculos() {
    var semaforo = document.getElementById('vermelho-veiculo')
    semaforo.style.backgroundColor = '#f10000'
}
function VermelhoVeiculosDesligar() {
    var semaforo = document.getElementById('vermelho-veiculo')
    semaforo.style.backgroundColor = '#f100003a'
}
// ---------------------------------------------------
function AmareloVeiculos() {
    var semaforo = document.getElementById('amarelo-veiculo')
    semaforo.style.backgroundColor = '#ffd000'
}
function AmareloVeiculosDesligar() {
    var semaforo = document.getElementById('amarelo-veiculo')
    semaforo.style.backgroundColor = '#ffd0003a' 
}
// ---------------------------------------------------
function VerdeVeiculos() {
    var semaforo = document.getElementById('verde-veiculo')
    semaforo.style.backgroundColor = '#158000' 
}
function VerdeVeiculosDesligar() {
    var semaforo = document.getElementById('verde-veiculo')
    semaforo.style.backgroundColor = '#1580003a' 
}
// ---------------------------------------------------
function VermelhoPedestres() {
    var semaforo = document.getElementById('vermelho-pedestre')
    semaforo.style.backgroundColor = '#f10000' 
}
function VermelhoPedestresDesligar() {
    var semaforo = document.getElementById('vermelho-pedestre')
    semaforo.style.backgroundColor = '#f100003a' 
}
// ---------------------------------------------------
function VerdePedestres() {
    var semaforo = document.getElementById('verde-pedestre')
    semaforo.style.backgroundColor = '#158000' 
}
function VerdePedestresDesligar() {
    var semaforo = document.getElementById('verde-pedestre')
    semaforo.style.backgroundColor = '#1580003a' 
}