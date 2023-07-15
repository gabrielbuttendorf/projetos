//name and description
const heroes = [
    {name: 'ciclope', description: 'Líder dos X-Men, Ciclope possui a habilidade de emitir poderosos feixes de energia óptica de seus olhos, capazes de causar destruição massiva.'},
    {name: 'jean grey', description: 'Uma das mutantes mais poderosas, Jean Grey tem o poder da telepatia e telecinese, além de se tornar a entidade cósmica conhecida como Fênix.'},
    {name: 'spyke', description: 'Com a habilidade de gerar espinhos ósseos que se projetam de seu corpo, Spyke é capaz de usá-los tanto como armas ofensivas quanto para se locomover rapidamente, tornando-se uma adição ágil e versátil para a equipe dos X-Men.'},
    {name: 'tempestade', description: 'Possuindo controle sobre os elementos naturais, Tempestade pode manipular o clima e criar tempestades devastadoras, tornando-se uma força imprevisível e poderosa a ser enfrentada.'},
    {name: 'rogue', description: 'Rogue tem o poder de absorver a energia vital e habilidades de outros seres humanos através do toque. No entanto, essa habilidade vem com o custo de privar as pessoas de suas memórias e vitalidade.'},
    {name: 'wolverine', description: 'Conhecido por sua capacidade de regeneração e garras retráteis de adamantium, Wolverine é um combatente feroz e duradouro, com habilidades de rastreamento aguçadas e um passado misterioso.'},
    {name: 'noturno', description: 'Noturno possui habilidades sobrenaturais que o tornam um ágil acrobata. Ele é capaz de teleportar-se instantaneamente para diferentes locais, surpreendendo seus inimigos com ataques rápidos e precisos.'},
    {name: 'magneto', description: 'Magneto é mestre do magnetismo, podendo controlar metais e campos magnéticos. Com suas habilidades, ele se torna um formidável adversário e líder para a Irmandade dos Mutantes.'},
]

let cards = document.getElementsByClassName('card-wrapper')
let hero = document.getElementById('hero')
let heroName = document.getElementById('hero-name')
let heroDescription = document.getElementById('hero-description')

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('mouseenter', function() {
        showHero(this, i)
    })
}

function showHero(element, index) {
    heroName.innerText = heroes[index].name
    heroDescription.innerText = heroes[index].description
    hero.src = `images/heroes-img/${heroes[index].name.replace(' ', '-')}-png.png`
}
