//Image Slider
const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

// initializeSlider();
document.addEventListener("DOMContentLoaded", initializeSlider);//show image only after all DOM content loads

function initializeSlider(){
//to show the slides
    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
    }
}

function loopSlide(index){

    //loop
    if(index >= slides.length){
        slideIndex = 0;//if the loop runs out
    }
    else if(index < 0){
        slideIndex = slides.length - 1;//if we want to go to previous but at the first slide itself
    }

    slides.forEach(slide =>{
        slide.classList.remove("displaySlide");//hide previous
    });
    slides[slideIndex].classList.add("displaySlide");//show new
}

function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    loopSlide(slideIndex);
}

function nextSlide(){
    slideIndex++;
    loopSlide(slideIndex);
}