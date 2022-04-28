$(document).ready(function () {
    let $slides = $(".slide");
    let slidesIndex = $slides.length - 1;
    const $prevButton = $(".slider__button--prev");
    const $nextButton = $(".slider__button--next");
    const keyCodeRight = 39;
    const keyCodeLeft = 37;
    const keyCodeEscape = 27;
    const localStorageIndex = Number(localStorage.getItem("NumberOfSlide"));
    const numberOfSlides = Number(localStorage.getItem("NumberOfSlides"));
    const darkMode = localStorage.getItem("darkmode");
    const $btnToggle = $(".btn-toggle");
    const $addButton = $(".button--add");
    const $resetButton = $(".button--reset")

    let i = 0;

    if(numberOfSlides > 3) {

        for(let j=3; j <numberOfSlides; j++) {
            addNewSlide();
        }
    }
    if(localStorageIndex) {
        $($slides[localStorageIndex]).fadeIn();
        i = localStorageIndex;
    }

    if (darkMode === "true") {
        $("body").addClass("dark");
    }


    $addButton.click(() => {
        addNewSlide();
        showMessage();
    })

    $resetButton.click(() => {
        $slides.remove();
        slidesIndex = -1;
        i = 1;

        for (let j= 3; j<3; j++) {
            addNewSlide();
        }
        $($slides[0]).fadeIn();
        showMessage();
    })


    $btnToggle.click(() => {
        if ($("body").hasClass("dark")) {
            $("body").removeClass("dark");
            localStorage.setItem("darkmode", false);
        } else {
            $("body").addClass("dark");
            localStorage.setItem("darkmode", true);
        }
    })

    $('.button--nav').click(function () {
        $('nav').toggleClass("open");
    });

    function addNewSlide() {
        createSlide();
        slidesIndex++
    }

    function createSlide() {
        const bgColors = ["#ee6352ff", "#08b2e3ff", "#57a773ff"];
        const randomColor = Math.floor(Math.random()*bgColors.length);
        const $slideWrapper = $(".slider__wrapper")
        const $slide = 
        `
        <div class="slide" style="background-color: ${bgColors[randomColor]}"> <h2> ${slidesIndex +2}</h2> </div>
        `
        $slideWrapper.append($slide);
        $slides = $(".slide");
        localStorage.setItem("NumberOfSlides", $slides.length )
    }

    function showMessage() {
        $slides = $(".slide");
        const message = 
        `
        <div class="message">${$slides.length} </div>
        `
        $("body").append(message)

    }

    function toggleNavigation() {
        $('.button--nav').click(function () {
            $('nav').toggleClass("open");
        });

    }

    function itemNext() {
        if (i < $slides.length - 1) {
            $($slides[i]).fadeOut();
            $($slides[i + 1]).fadeIn();
            i++
        } else {
            $($slides[i]).fadeOut();
            $($slides[0]).fadeIn();
            i = 0;
        }
        localStorage.setItem("NumberOfSlide", i);
    }

    function itemPrev() {
        if (i > 0) {
            $($slides[i]).fadeOut();
            $($slides[i - 1]).fadeIn();
            i--
        } else {
            $($slides[i]).fadeOut();
            $($slides[slidesIndex]).fadeIn();
            i = slidesIndex;
            
        }
        localStorage.setItem("NumberOfSlide", i);
    }

    $prevButton.click(() => {
        itemPrev();
    });

    $nextButton.click(() => {
        itemNext();
    });

    $("body").keydown((e) => {
        if (e.keyCode == keyCodeLeft) {
            itemPrev();
        }
        else if (e.keyCode == keyCodeRight) {
            itemNext();
        }else if(e.keyCode == keyCodeEscape) {
            toggleNavigation();
        }
    });

});