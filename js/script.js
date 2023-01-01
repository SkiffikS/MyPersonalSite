"use strick"


// preloader
// -----------------------------------------------------------------------------------------------------------------------------------
window.onload = function () {
    let preloader = document.getElementById("preloader");
    preloader.style.display = "none";
}
// -----------------------------------------------------------------------------------------------------------------------------------

// burger
// -----------------------------------------------------------------------------------------------------------------------------------
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navigation__list");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});
// -----------------------------------------------------------------------------------------------------------------------------------

// cirle blocks
// -----------------------------------------------------------------------------------------------------------------------------------
const wrapper = document.querySelectorAll('.progress');

const barCount = 50;
const percent1 = 50 * 82 / 100;
const percent2 = 50 * 63 / 100;
const percent3 = 50 * 75 / 100;

for (let index = 0; index < barCount; index++) {
    const className = index < percent1 ? 'selected1' : '';
    wrapper[0].innerHTML += `<i style="--i: ${index};" class="${className} _anim-items"></i>`;
}

wrapper[0].innerHTML += `<p class="selected percent-text text1  _anim-items">82%<br>Особисті навички</p>`

for (let index = 0; index < barCount; index++) {
    const className = index < percent2 ? 'selected2' : '';
    wrapper[1].innerHTML += `<i style="--i: ${index};" class="${className} _anim-items"></i>`;
}

wrapper[1].innerHTML += `<p class="selected percent-text text2  _anim-items">63%<br>Робота в команді</p>`

for (let index = 0; index < barCount; index++) {
    const className = index < percent3 ? 'selected3' : '';
    wrapper[2].innerHTML += `<i style="--i: ${index};" class="${className} _anim-items"></i>`;
}

wrapper[2].innerHTML += `<p class="selected percent-text text3  _anim-items">75%<br>Швидкісь / Якість</p>`
// -----------------------------------------------------------------------------------------------------------------------------------

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

// run button
// -----------------------------------------------------------------------------------------------------------------------------------
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const button = document.getElementById("runaway-btn");
button.addEventListener("mouseover", () => {
    button.style.transform = `translate(${getRndInteger(-60, 60)}%, ${getRndInteger(0, 300)}%)`;
    button.style.transition = "all 0.1s ease";
});
// -----------------------------------------------------------------------------------------------------------------------------------

// animate functions
// -----------------------------------------------------------------------------------------------------------------------------------
const animItems = document.querySelectorAll("._anim-items");

if (animItems.length > 0) {
    window.addEventListener("scroll", animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++){
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add("_active");
            } else {
                if (!animItem.classList.contains("_anim-no-hide")) {
                    animItem.classList.remove("_active");
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }

    setTimeout(() => {
        animOnScroll();
    }, 300);
}
// -----------------------------------------------------------------------------------------------------------------------------------