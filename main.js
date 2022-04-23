$(document).ready(function () {
    const $slides = $(".slide");
    const $prevButton = $(".slider__button--prev");
    const $nextButton = $(".slider__button--next");

    let i = 0;

    $prevButton.click(() => {
    })

    $nextButton.click(() => {
        if (i < $slides.length - 1) {
            $($slides[i]).fadeOut();
            $($slides[i + 1]).fadeIn();
            i++
        }
    });

});