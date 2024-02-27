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

// CHOOSE COLOR - IPHONE
const iphoneColorList = ['natural', 'white', 'blue', 'black']
const iphoneColors = document.querySelectorAll('.iphone.choose-color input')
const iphoneSlideImage = document.querySelectorAll('.card-iphone .slide img')

let iphoneColorSelected = 0

iphoneColors.forEach((colorInput, index) => {
  colorInput.addEventListener('change', () => {
    iphoneColorSelected = iphoneColorList[index]

    //TROCA DE CORES + TRANSIÇÃO SUAVE
    iphoneSlideImage.forEach(imgElement => {
      imgElement.style.opacity = 0
    })

    setTimeout(() => {
      iphoneSlideImage.forEach((imgElement, index) => {
        imgElement.src = `assets/iphone-${iphoneColorSelected}/image-0${index+1}.png`
        imgElement.style.opacity = ''
      })
    }, 80)
    //FIM TROCA DE CORES + TRANSIÇÃO SUAVE

  })
})
// FIM CHOOSE COLOR - IPHONE

// CHOOSE COLOR - MACBOOK
const macColorList = ['silver', 'grey', 'midnight']
const macColors = document.querySelectorAll('.mac.choose-color input')
const macSlideImage = document.querySelectorAll('.card-mac .slide img')

let macColorSelected = 0

macColors.forEach((colorInput, index) => {
  colorInput.addEventListener('change', () => {
    macColorSelected = macColorList[index]

    //TROCA DE CORES + TRANSIÇÃO SUAVE
    macSlideImage.forEach((imgElement) => {
      imgElement.style.opacity = 0
    })

    setTimeout(() => {
      macSlideImage.forEach((imgElement, index) => {
        imgElement.src = `assets/mac-${macColorSelected}/image-0${index+1}.png`
        imgElement.style.opacity = ''
      })
    }, 80)
    //FIM TROCA DE CORES + TRANSIÇÃO SUAVE
  })
})
// FIM CHOOSE COLOR - MACBOOK

