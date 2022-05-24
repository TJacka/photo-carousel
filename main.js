const slides = document.getElementsByClassName('carousel-item');
let slidePosition = 0;
const totalSlides = slides.length;

document.getElementById('carousel-button-next').addEventListener('click', moveToNextSlide);
document.getElementById('carousel-button-prev').addEventListener('click', moveToPrevSlide);
document.querySelector(".slide-title").innerText = "City of Clouds"
document.querySelector(".pos1").style.color = "silver";

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
        document.querySelector(".pos1").style.color = "silver";
        document.querySelector(".pos2").style.color = "white";
        document.querySelector(".pos3").style.color = "white";
    } else if (slidePosition === 1) {
        document.querySelector(".slide-title").innerText = "City of Bridges";
        document.querySelector(".pos1").style.color = "white";
        document.querySelector(".pos2").style.color = "silver";
        document.querySelector(".pos3").style.color = "white";
    } else if (slidePosition === 2) {
        document.querySelector(".slide-title").innerText = "City of Lights";
        document.querySelector(".pos1").style.color = "white";
        document.querySelector(".pos2").style.color = "white";
        document.querySelector(".pos3").style.color = "silver";
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
    if (slidePosition === 0) {
        document.querySelector(".slide-title").innerText = "City of Clouds";
    } else if (slidePosition === 1) {
        document.querySelector(".slide-title").innerText = "City of Bridges";
    } else if (slidePosition === 2) {
        document.querySelector(".slide-title").innerText = "City of Lights";
    }

    if (slidePosition === 0) {
        document.querySelector(".slide-title").innerText = "City of Clouds";
        document.querySelector(".pos1").style.color = "silver";
        document.querySelector(".pos2").style.color = "white";
        document.querySelector(".pos3").style.color = "white";
    } else if (slidePosition === 1) {
        document.querySelector(".slide-title").innerText = "City of Bridges";
        document.querySelector(".pos1").style.color = "white";
        document.querySelector(".pos2").style.color = "silver";
        document.querySelector(".pos3").style.color = "white";
    } else if (slidePosition === 2) {
        document.querySelector(".slide-title").innerText = "City of Lights";
        document.querySelector(".pos1").style.color = "white";
        document.querySelector(".pos2").style.color = "white";
        document.querySelector(".pos3").style.color = "silver";
    }
}

setInterval(function() {
    moveToNextSlide()
  }, 3000);

  