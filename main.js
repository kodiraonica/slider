$(document).ready(function(){

    const $slides = $(".slide");
    const $prevButton = $(".slider__button--prev");
    const $nextButton = $(".slider__button--next");
    
    const keyCodeRight = 39;
    const keyCodeLeft = 37;

    let i = 0;

    const $btnToggle = $(".btn-toggle");

    const darkMode = localStorage.getItem("darkmode");
    if (darkMode) {
        $("body").addClass("dark");
    }

    $btnToggle.click(() => {
        $("body").toggleClass("dark");
        localStorage.setItem("darkmode", true)
    })

    function rightButtonClick(){
        if(i<$slides.length -1) {
            $($slides[i]).fadeOut();
            $($slides[i+1]).fadeIn();
            i++
            }
    };

    function leftButtonClick(){
        if(i> 0) {
            $($slides[i]).fadeOut();
            $($slides[i-1]).fadeIn();
            i--
        } 
    }

    $prevButton.click(() => {
        leftButtonClick();

    });

    $nextButton.click(() => {
        rightButtonClick();
        }
    );

    $("body").keydown((e) => {
        if(e.keyCode == keyCodeLeft){
           leftButtonClick();
            } 
        else if (e.keyCode == keyCodeRight) {
            rightButtonClick();
            }
    });

});

