$(document).ready(function () {
    const $slides = $(".slide");
    const $prevButton = $(".slider__button--prev");
    const $nextButton = $(".slider__button--next");
    const keyCodeRight = 39;
    const keyCodeLeft = 37;

    let i = 0;

    const darkMode = localStorage.getItem("darkmode");
    if (darkMode) {
        $("body").addClass("dark");
    }

    const $btnToggle = $(".btn-toggle");

    $btnToggle.click(() => {
        $("body").toggleClass("dark");
        localStorage.setItem("darkmode", true);
    })

    function forNext() {
        if (i < $slides.length - 1) {
            $($slides[i]).fadeOut();
            $($slides[i + 1]).fadeIn();
            i++
        }
    }

    function forPrev() {
        if (i > 0) {
            $($slides[i]).fadeOut();
            $($slides[i - 1]).fadeIn();
            i--
        }
    }

    $prevButton.click(() => {
        forPrev();
    });

    $nextButton.click(() => {
        forNext();
    });

    $("body").keydown((e) => {
        if (e.keyCode == keyCodeLeft) {
            forPrev();
        }
        else if (e.keyCode == keyCodeRight) {
            forNext();
        }
    });

});