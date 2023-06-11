$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                loop: true,
                autoplay: true,
                dotsEach: true,
                autoWidth: true,
            },
            768: {
                items: 2,
                loop: true,
                autoplay: true,
                dotsEach: true,
                autoWidth: true,
            },
            1100: {
                items: 3,
                loop: true,
                autoplay: true,
                dotsEach: true,
                autoWidth: true,
            },
            1400: {
                items: 4,
                loop: true,
                autoplay: true,
                dotsEach: true,
                autoWidth: true,
            }
        }
    });
});