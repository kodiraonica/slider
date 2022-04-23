$(document).ready(function() {
    const $slides = $(".slide");
    const $prevButton = $(".slider__button--prev");
    const $nextButton = $(".slider__button--next");

    const keyCodeRight = 39;
    const keyCodeLeft = 37;

    let i = 0;

    function clickPrev() {
        if (i > 0) {
            $($slides[i]).fadeOut();
            $($slides[i-1]).fadeIn();
            i--
        }
    };

    function clickNext() {
        if (i < $slides.length - 1) {
            $($slides[i]).fadeOut();
            $($slides[i+1]).fadeIn();
            i++
        }
    };

    $prevButton.click(() => {
        clickPrev();
    });

    $nextButton.click(() => {
        clickNext();
    });
    
    $("body").keydown((e) => {
        if (e.keyCode == keyCodeLeft) {
        clickPrev();
        } else if (e.keyCode == keyCodeRight) {
        clickNext();
        };
    });
});



