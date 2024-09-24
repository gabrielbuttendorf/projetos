const carrosselImg = document.querySelectorAll('.carrossel-imagem');
const tamanhoImg = carrosselImg[0].clientWidth;
const totalImg = carrosselImg.length;

const carrossel = document.querySelector('.carrossel');
carrossel.style.width = `${tamanhoImg * totalImg}px`;

carrossel.animate(
  [
    { transform: 'translateX(0)' },
    { transform: `translateX(${(-tamanhoImg * totalImg) / 2}px)` },
  ],
  {
    duration: 3000,
    easing: 'linear',
    iterations: Infinity
  }
);
