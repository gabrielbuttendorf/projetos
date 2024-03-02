// SLIDERS
let currentSlideIphone = 0
let currentSlideMac = 0

function showSlide(slides, bullets, n) {

  slides.forEach(slide => slide.classList.remove('active'))
  bullets.forEach(bullet => bullet.classList.remove('active'))

  slides[n].classList.add('active')
  bullets[n].classList.add('active')
}

// IPHONE
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

// MACBOOK
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

      // TROCA DE CORES + TRANSIÇÃO SUAVE
      slideImage.forEach((imgElement) => {
        imgElement.style.opacity = 0
      })

      setTimeout(() => {
        slideImage.forEach((imgElement, index) => {
          imgElement.src = `assets/${device}-${colorSelected}/image-0${index+1}.png`
          imgElement.style.opacity = ''
        })
      }, 80)
      // FIM TROCA DE CORES + TRANSIÇÃO SUAVE

    })
  })
}
// FIM CHOICE COLOR

// CUSTOM ALERT ON CLICK 'ADICIONAR AO CARRINHO'
function showAddCartAlert() {
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Produto adicionado ao carrinho!",
    showConfirmButton: false,
    timer: 2000
  });
}
// FIM CUSTOM ALERT ON CLICK 'ADICIONAR AO CARRINHO'

// PRELOAD IMAGES ANTI-DELAY
const imagesPreload = [
  'assets/iphone-natural/image-01.png',
  'assets/iphone-natural/image-02.png',
  'assets/iphone-natural/image-03.png',
  'assets/iphone-natural/image-04.png',

  'assets/iphone-white/image-01.png',
  'assets/iphone-white/image-02.png',
  'assets/iphone-white/image-03.png',
  'assets/iphone-white/image-04.png',
  
  'assets/iphone-blue/image-01.png',
  'assets/iphone-blue/image-02.png',
  'assets/iphone-blue/image-03.png',
  'assets/iphone-blue/image-04.png',

  'assets/iphone-black/image-01.png',
  'assets/iphone-black/image-02.png',
  'assets/iphone-black/image-03.png',
  'assets/iphone-black/image-04.png',
  
  'assets/mac-silver/image-01.png',
  'assets/mac-silver/image-02.png',
  
  'assets/mac-grey/image-01.png',
  'assets/mac-grey/image-02.png',

  'assets/mac-midnight/image-01.png',
  'assets/mac-midnight/image-02.png'
]

function preloadImages() {
  for (let i = 0; i < imagesPreload.length; i++) {
    const img = new Image()
    img.src = imagesPreload[i]
  }
}

window.addEventListener('load', preloadImages)
// FIM PRELOAD IMAGES ANTI-DELAY

// MORE DETAILS
const elementsCard = document.querySelectorAll('.card')
const main = document.querySelector('main')

function showMoreDetails(device) {
  const elementMoreDetails = document.querySelector(`.${device}.more-details`)

  main.addEventListener('click', function(event) {
    if (!elementMoreDetails.contains(event.target) && !event.target.classList.contains('btn-more-details')) {
      closeMoreDetails(device)
    }
  })

  elementsCard.forEach((element) => {
    element.classList.add('more-details-active')
  })

  document.body.classList.add('more-details-active')
  elementMoreDetails.classList.add('active')
}

function closeMoreDetails(device) {
  const elementMoreDetails = document.querySelector(`.${device}.more-details`)

  elementsCard.forEach((element) => {
    element.classList.remove('more-details-active')
  })

  document.body.classList.remove('more-details-active')
  elementMoreDetails.classList.remove('active')
}

/*
let elementMoreDetails
const elementsCard = document.querySelectorAll('.card')
const main = document.querySelector('main')

const ielementMoreDetails = document.querySelector(`.iphone.more-details`)
const melementMoreDetails = document.querySelector(`.mac.more-details`)
const mbtnMoreDetails = document.querySelector(`.card-mac .btn-more-details`)
const ibtnMoreDetails = document.querySelector(`.card-iphone .btn-more-details`)

function showMoreDetails(device) {
  if (device == 'iphone') {
    elementMoreDetails = ielementMoreDetails
  } else {
    elementMoreDetails = melementMoreDetails
  }

  main.addEventListener('click', function(event) {
    if (!elementMoreDetails.contains(event.target) && !ibtnMoreDetails.contains(event.target) && !mbtnMoreDetails.contains(event.target)) {
      closeMoreDetails(device)
    }
  })

  elementsCard.forEach((element) => {
    element.classList.add('more-details-active')
  })

  document.body.classList.add('more-details-active')
  elementMoreDetails.classList.add('active')
}

function closeMoreDetails(device) {
  const elementMoreDetails = document.querySelector(`.${device}.more-details`)

  elementsCard.forEach((element) => {
    element.classList.remove('more-details-active')
  })

  document.body.classList.remove('more-details-active')
  elementMoreDetails.classList.remove('active')
}
*/
// FIM MORE DETAILS
