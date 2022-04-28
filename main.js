$(document).ready(function () {
  let $slides = $(".slide");
  let slidesIndex = $slides.length - 1;
  const $prevButton = $(".slider__button--prev");
  const $nextButton = $(".slider__button--next");
  const keyCodeRight = 39;
  const keyCodeLeft = 37;
  const keyCodeEscape = 27;
  const localStorageIndex = Number(localStorage.getItem("numberOfSlide"));
  const darkMode = localStorage.getItem("darkmode");
  const $btnToggle = $(".btn-toggle");
  const $addButton = $(".button--add");
  let i = 0;

  if (localStorageIndex) {
    $($slides[localStorageIndex]).fadeIn();
    i = localStorageIndex;
  }

  if (darkMode === "true") {
    $("body").addClass("dark");
  }

  $addButton.click(() => {
    const $sliderWrapper = $(".slider_wrapper");
    const $slide = `
    <div class ="slide"> <h2> 4 </h2> </div>
    `
    $sliderWrapper.append($slide);
    $slides = $(".slide");
    slidesIndex++
  });

  $btnToggle.click(() => {
    if ($("body").hasClass("dark")) {
      $("body").removeClass("dark");
      localStorage.setItem("darkmode", false);
    } else {
      $("body").addClass("dark");
      localStorage.setItem("darkmode", true);
    }
  });

  $(".button--nav").click(function () {
    toggleNavigation();
  });

  function toggleNavigation() {
    $(".button--nav").click(function () {
      $("nav").toggleClass("open");
    });
  }

  function clickPrev() {
    if (i > 0) {
      $($slides[i]).fadeOut();
      $($slides[i - 1]).fadeIn();
      i--;
    } else {
      $($slides[0]).fadeOut();
      $($slides[slidesIndex]).fadeIn();
      i = slidesIndex;
    }
    localStorage.setItem("numberOfSlide", i);
  }

  $prevButton.click(() => {
    clickPrev();
  });

  function clickNext() {
    if (i < $slides.length - 1) {
      $($slides[i]).fadeOut();
      $($slides[i + 1]).fadeIn();
      i++;
    } else {
      $($slides[i]).fadeOut();
      $($slides[0]).fadeIn();
      i = 0;
    }
    localStorage.setItem("numberOfSlide", i);
  }

  $nextButton.click(() => {
    clickNext();
  });

  $("body").keydown(function (e) {
    if (e.keyCode == keyCodeLeft) {
      clickPrev();
    } else if (e.keyCode == keyCodeRight) {
      clickNext();
    } else if ((e.keyCode = keyCodeEscape)) {
      toggleNavigation();
    }
  });
});
