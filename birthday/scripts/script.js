const sliders = document.querySelectorAll('.carrossel');
sliders.forEach((slider, index) => {
  const carrosselImg = slider.querySelectorAll('.carrossel-imagem');
  const tamanhoImg = carrosselImg[0].clientWidth;
  const totalImg = carrosselImg.length;

  slider.style.width = `${tamanhoImg * totalImg}px`;

  const isSliderOdd = index % 2 === 1;

  const sliderDirection = isSliderOdd
    ? [`translateX(${(-tamanhoImg * totalImg) / 2}px)`, 'translateX(0)']
    : ['translateX(0)', `translateX(${(-tamanhoImg * totalImg) / 2}px)`];

  slider.animate(
    [{ transform: sliderDirection[0] }, { transform: sliderDirection[1] }],
    {
      duration: 3000,
      easing: 'linear',
      iterations: Infinity,
    }
  );

  const sliderContainer = document.querySelectorAll('.carrossel-container');

  if (isSliderOdd) {
    sliderContainer[index].classList.add('bordas');
  }
});
