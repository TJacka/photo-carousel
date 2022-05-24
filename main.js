const slides = document.getElementsByClassName('carousel-item');
let slidePosition = 0;
const totalSlides = slides.length;

document.getElementById('carousel-button-next').addEventListener('click', moveToNextSlide);
document.getElementById('carousel-button-prev').addEventListener('click', moveToPrevSlide);

function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove('carousel-item-visible');
        slide.classList.add('carousel-item-hidden');
    }
}



function moveToNextSlide() {
    hideAllSlides();
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    slides[slidePosition].classList.add("carousel-item-visible");
    
    if (slidePosition === 0) {
        document.querySelector(".slide-title").innerText = "City of Clouds";
    } else if (slidePosition === 1) {
        document.querySelector(".slide-title").innerText = "City of Bridges";
    } else if (slidePosition === 2) {
        document.querySelector(".slide-title").innerText = "City of Lights";
    }
}

function moveToPrevSlide() {
    hideAllSlides();
    
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
    slides[slidePosition].classList.add("carousel-item-visible");
}

setInterval(function() {
    moveToNextSlide()
  }, 3000);

  