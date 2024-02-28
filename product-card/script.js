// SLIDERS
let currentSlideIphone = 0
let currentSlideMac = 0

function showSlide(slides, bullets, n) {

  slides.forEach(slide => slide.classList.remove('active'))
  bullets.forEach(bullet => bullet.classList.remove('active'))

  slides[n].classList.add('active')
  bullets[n].classList.add('active')
}

//IPHONE
const iphoneSlides = document.querySelectorAll('.card-iphone .slide')
const iphoneBullets = document.querySelectorAll('.card-iphone #bullets label')

function nextSlideIphone() {
  currentSlideIphone = (currentSlideIphone + 1) % iphoneSlides.length
  showSlide(iphoneSlides, iphoneBullets, currentSlideIphone)
}

function prevSlideIphone() {
  currentSlideIphone = (currentSlideIphone - 1 + iphoneSlides.length) % iphoneSlides.length
  showSlide(iphoneSlides, iphoneBullets, currentSlideIphone)
}

//MACBOOK
const macSlides = document.querySelectorAll('.card-mac .slide')
const macBullets = document.querySelectorAll('.card-mac #bullets label')

function nextSlideMac() {
  currentSlideMac = (currentSlideMac + 1) % macSlides.length
  showSlide(macSlides, macBullets, currentSlideMac)
}

function prevSlideMac() {
  currentSlideMac = (currentSlideMac - 1 + macSlides.length) % macSlides.length
  showSlide(macSlides, macBullets, currentSlideMac)
}

showSlide(iphoneSlides, iphoneBullets, currentSlideIphone)
showSlide(macSlides, macBullets, currentSlideMac)
// FIM SLIDERS

// CHOICE COLOR
const iphoneColorList = ['natural', 'white', 'blue', 'black']
const iphoneColors = document.querySelectorAll('.iphone.choose-color input')
const iphoneSlideImage = document.querySelectorAll('.card-iphone .slide img')
handleColorChange(iphoneColorList, iphoneColors, iphoneSlideImage, 'iphone')

const macColorList = ['silver', 'grey', 'midnight']
const macColors = document.querySelectorAll('.mac.choose-color input')
const macSlideImage = document.querySelectorAll('.card-mac .slide img')
handleColorChange(macColorList, macColors, macSlideImage, 'mac')

function handleColorChange(colorList, colors, slideImage, device) {
  colors.forEach((colorInput, index) => {
    colorInput.addEventListener('change', () => {
      const colorSelected = colorList[index]

      //TROCA DE CORES + TRANSIÇÃO SUAVE
      slideImage.forEach((imgElement) => {
        imgElement.style.opacity = 0
      })

      setTimeout(() => {
        slideImage.forEach((imgElement, index) => {
          imgElement.src = `assets/${device}-${colorSelected}/image-0${index+1}.png`
          imgElement.style.opacity = ''
        })
      }, 80)
      //FIM TROCA DE CORES + TRANSIÇÃO SUAVE

    })
  })
}
// FIM CHOICE COLOR