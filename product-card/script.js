// SLIDER
let currentSlide = 0
const slides = document.querySelectorAll('.slide')

function showSlide(n) {
  slides.forEach(slide => slide.classList.remove('active'))
  slides[n].classList.add('active')
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length
  showSlide(currentSlide)
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length
  showSlide(currentSlide)
}

showSlide(currentSlide)
// FIM SLIDER

// CHOOSE COLOR
const iphoneColorList = ['natural', 'white', 'blue', 'black']
const iphoneColors = document.querySelectorAll('.iphone.choose-color input')
const slideImage = document.querySelectorAll('.slide img')

let iphoneColorSelected = 0

iphoneColors.forEach((colorInput, index) => {
  colorInput.addEventListener('change', () => {
    iphoneColorSelected = iphoneColorList[index]

    slideImage.forEach((imgElement, index) => {
      imgElement.src = `assets/iphone-${iphoneColorSelected}/image-0${index+1}.png`
    })
  })
})
// FIM CHOOSE COLOR

