$(document).ready(function() {
  let $slides = $(".slide");
  let slidesIndex = $slides.length - 1;
  
  let initialNumberOfSlides = localStorage.getItem("numberOfSlides") > 0 ? localStorage.getItem("numberOfSlides") : 3;
  const $prevButton = $(".slider__button--prev");
  const $nextButton = $(".slider__button--next");
  const $addButton = $(".button--add");
  const $resetButton = $(".button--reset");

  const $navButton = $(".button--nav");
  const $nav = $("nav");
  const $sliderWrapper = $(".slider__wrapper");

  const $body = $("body");
  const keyCodeRight = 39;
  const keyCodeLeft = 37;
  const keyCodeEsc = 27;

  const $btnToggle = $(".btn-toggle");
  const darkMode = localStorage.getItem("darkmode");
  const localStorageSlideIndex = Number(localStorage.getItem("slideIndex"));

  let i = 0;

  onPageLoad();

  $resetButton.click(() => {
    resetSlides();
  });

  $navButton.click((e) => {
    toggleNavigation();
  })

  $btnToggle.click(() => {
    toggleDarkMode();
  });

  $addButton.click(() => {
   addNewSlide();
  });

  function onPageLoad(){
    for (let j = 0; j < initialNumberOfSlides; j++){
      createNewSlide();
      $($slides[0]).fadeIn();
    }
    
    if (localStorageSlideIndex) {
      $($slides[localStorageSlideIndex]).fadeIn();
      i = localStorageSlideIndex;
    } else if (localStorageSlideIndex > $slides.length) {
      i = 0;
    }
  
    if (darkMode == "true") {
      $body.addClass("dark");
    }
  }

  function resetSlides() {
    $slides.remove();
    $slides = $(".slide");
    slidesIndex = $slides.length -1;
    initialNumberOfSlides = 3;
    i = 0;
    localStorage.setItem("numberOfSlides", 3);
    for (let j = 0; j < initialNumberOfSlides; j++) {
      createNewSlide();
    }

    $($slides[0]).fadeIn();
    showMessage();
  }

  function addNewSlide(){
    createNewSlide();
    showMessage();
    initialNumberOfSlides++
    localStorage.setItem("numberOfSlides", initialNumberOfSlides);
  }

  function toggleDarkMode(){
    if ($body.hasClass("dark")) {
      $body.removeClass("dark")
      localStorage.setItem("darkmode", false);
    } else {
      $body.addClass("dark")
      localStorage.setItem("darkmode", true);
    }
  }

  function toggleNavigation() {
    $nav.toggleClass("open");
    if ($nav.hasClass("open")) {
      $navButton.find("span").text("close")
    } else {
      $navButton.find("span").text("menu")
    }
  }

  function createNewSlide(){
    const bgColors = ["#ee6352ff", "#08b2e3ff", "#57a773ff"];
    const slide = `
      <div class="slide" style="background-color: ${bgColors[Math.floor(Math.random() * bgColors.length)]}">
        <h2>${slidesIndex + 2}</h2>
      </div>
    `
    $sliderWrapper.append(slide);
    $slides = $(".slide");
    slidesIndex++
  }

  function showMessage(){
    let hasMessage = $(".message");
    if (hasMessage.length > 0) {
      hasMessage.text(`You now have ${slidesIndex + 1} slides`);
      $body.append(hasMessage);
      hasMessage.fadeIn();
    } else {
      const message = `<div class="message"> You now have ${slidesIndex + 1} slides </div>`;
      $body.append(message);
      hasMessage.fadeIn();
    }

    setTimeout(() => {
      let hasMessage = $(".message");
      hasMessage.fadeOut();
    }, 5000);
  }

  function onButtonPrev(){
    if (i > 0) {
      $($slides[i]).fadeOut();
      $($slides[i - 1]).fadeIn();
      i--;
      localStorage.setItem("slideIndex", i);
    } else {
      $($slides[0]).fadeOut();
      $($slides[slidesIndex]).fadeIn();
      i = slidesIndex;
      localStorage.setItem("slideIndex", i);
    }
  }

  function onButtonNext(){
    if (i < slidesIndex) {
      $($slides[i]).fadeOut();
      $($slides[i+1]).fadeIn();
      i++  
      localStorage.setItem("slideIndex", i);
    } else if (i === slidesIndex) {
      $($slides[0]).fadeIn();
      $($slides[slidesIndex]).fadeOut();
      i = 0;
      localStorage.setItem("slideIndex", i);
    }
  }

  $prevButton.click(() => {
    onButtonPrev();
  });

  $nextButton.click(() => {
    onButtonNext();
  });

  $body.keydown((e) => {
    if (e.keyCode == keyCodeLeft) {
      onButtonPrev();
    } else if (e.keyCode == keyCodeRight) {
    onButtonNext();
   } else if (e.keyCode == keyCodeEsc) {
     toggleNavigation();
   }
  });
});