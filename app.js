const slides = document.querySelectorAll('.slide')

for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveCalsses()
        slide.classList.add('active')
    })
}

function clearActiveCalsses() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}