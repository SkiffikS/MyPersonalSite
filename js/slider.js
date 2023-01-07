// slider
// -----------------------------------------------------------------------------------------------------------------------------------
var swiper = new Swiper(".mySwiper", {
    loop: true,
    loopedSlides: 3.5,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3.5,
    //spaceBetween: 90,
    autoHeight: true,
    //freeMode: true,
    speed: 800,
    effect: "coverflow",
    coverflowEffect: {
        rotare: 20,
        stretch: 50,
        slideShadow: true,
    },
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        810: {
            slidesPerView: 1.5,
        },
        992: {
            slidesPerView: 2,
        },
        1040: {
            slidesPerView: 3,
        },
        1690:
        {
            slidesPerView: 3.5,
        },
    },
});
// -----------------------------------------------------------------------------------------------------------------------------------