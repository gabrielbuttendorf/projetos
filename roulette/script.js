const wheel = document.querySelector('.wheel')
let value = Math.ceil(Math.random() * 3600)

// function spinWheel() {
//   wheel.style.transform = 'rotate(' + value + 'deg)'
//   value += Math.ceil(Math.random() * 3600)
// }

// ---------------------------------------------------- //

let chances = 1

if (localStorage.getItem('chances')) {
  chances = parseInt(localStorage.getItem('chances'))
}

function spinWheel() {
  if (chances > 0) {
    wheel.style.transform = 'rotate(' + 2852 + 'deg)'
    
    chances -= 1
    localStorage.setItem('chances', chances)
  } else {
    alert('Suas chances acabaram.')
  }
}

