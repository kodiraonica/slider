$(document).ready(function () {
    const $slides = $(".slide");
    const slidesIndex = $slides.length - 1;
    const $prevButton = $(".slider__button--prev");
    const $nextButton = $(".slider__button--next");
    const keyCodeRight = 39;
    const keyCodeLeft = 37;
    const keyCodeEscape = 27;

    let i = 0;

    const darkMode = localStorage.getItem("darkmode");
    if (darkMode === "true") {
        $("body").addClass("dark");
    }

    const $btnToggle = $(".btn-toggle");

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