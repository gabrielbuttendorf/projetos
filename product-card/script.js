// SLIDERS
let currentSlideIphone = 0
let currentSlideMac = 0

function showSlide(slides, n) {
  slides.forEach(slide => slide.classList.remove('active'))
  slides[n].classList.add('active')
}

//IPHONE
const iphoneSlides = document.querySelectorAll('.card-iphone .slide')

function nextSlideIphone() {
  currentSlideIphone = (currentSlideIphone + 1) % iphoneSlides.length
  showSlide(iphoneSlides, currentSlideIphone)
}

function prevSlideIphone() {
  currentSlideIphone = (currentSlideIphone - 1 + iphoneSlides.length) % iphoneSlides.length
  showSlide(iphoneSlides, currentSlideIphone)
}

//MACBOOK
const macSlides = document.querySelectorAll('.card-mac .slide')

function nextSlideMac() {
  currentSlideMac = (currentSlideMac + 1) % macSlides.length
  showSlide(macSlides, currentSlideMac)
}

function prevSlideMac() {
  currentSlideMac = (currentSlideMac - 1 + macSlides.length) % macSlides.length
  showSlide(macSlides, currentSlideMac)
}

showSlide(iphoneSlides, currentSlideIphone)
showSlide(macSlides, currentSlideMac)
// FIM SLIDERS

// CHOOSE COLOR
const iphoneColorList = ['natural', 'white', 'blue', 'black']
const iphoneColors = document.querySelectorAll('.iphone.choose-color input')
const slideImage = document.querySelectorAll('.slide img')

let iphoneColorSelected = 0

iphoneColors.forEach((colorInput, index) => {
  colorInput.addEventListener('change', () => {
    iphoneColorSelected = iphoneColorList[index]

    //TROCA DE CORES + TRANSIÇÃO SUAVE
    slideImage.forEach(imgElement => {
      imgElement.style.opacity = 0
    })

    setTimeout(() => {
      slideImage.forEach((imgElement, index) => {
        imgElement.src = `assets/iphone-${iphoneColorSelected}/image-0${index+1}.png`
        imgElement.style.opacity = ''
      })
    }, 80)
    //FIM TROCA DE CORES + TRANSIÇÃO SUAVE

  })
})
// FIM CHOOSE COLOR

