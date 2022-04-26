$(document).ready(function () {
    const $slides = $(".slide");
    const slidesIndex = $slides.lenght - 1;
    const $prevButton = $(".slider__button--prev");
    const $nextButton = $(".slider__button--next");
    const keyCodeRight = 39;
    const keyCodeLeft = 37;

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

    function itemNext() {
        if (i < $slides.length - 1) {
            $($slides[i]).fadeOut();
            $($slides[i + 1]).fadeIn();
            i++
        } else {

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
        }
    });

});