$(document).ready(() => {
   const $slides = $(".slide");
   const $prevButton = $(".slider__button--prev");
   const $nextButton = $(".slider__button--next");
   const keyCodeLeft = 37;
   const keyCodeRight = 39;

   let i = 0;

   function onClickNext() {
    if (i < $slides.length - 1) {
        $($slides[i]).fadeOut();
        $($slides[i+1]).fadeIn();
        i++
    } 
   }

   function onClickPrev(){
    if (i > 0) {
        $($slides[i]).fadeOut();
        $($slides[i-1]).fadeIn();
        i--
    } 
   }

   $nextButton.click(() => {
    onClickNext();
   });

   $prevButton.click(() => {
    onClickPrev();
   });


   $("body").keydown(function(e) {
    if(e.keyCode == keyCodeLeft) {
     onClickPrev(); 
    }
    else if(e.keyCode == keyCodeRight) { 
      onClickNext();
    }
  });
})