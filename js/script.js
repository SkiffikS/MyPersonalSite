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

if (wrapper.length > 0) {
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
}
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

// scroll animation
// -----------------------------------------------------------------------------------------------------------------------------------
function getElementY(query) {
    el = document.querySelector(query);
    const rect = el.getBoundingClientRect();
    return rect.top + window.scrollY;
}

function doScrolling(element, duration) {
    var startingY = window.pageYOffset;
    var elementY = getElementY(element);

    var url = window.location.pathname;
    var filename = url.substring(url.lastIndexOf('/') + 1);

    var targetY = document.body.scrollHeight - elementY < window.innerHeight ? document.body.scrollHeight - window.innerHeight : elementY;
    if ((window.innerWidth > 767) && (filename == "index.html")) {
        var diff = targetY + 800 - startingY;
    } else {
        var diff = targetY - startingY;
    }

    var easing = function (t) { return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1 }
    var start;

    if (!diff) return;

    window.requestAnimationFrame(function step(timestamp) {
        if (!start) start = timestamp;

        var time = timestamp - start;

        var percent = Math.min(time / duration, 1);

        percent = easing(percent);

        window.scrollTo(0, startingY + diff * percent);

        if (time < duration) {
            window.requestAnimationFrame(step);
        }
    })
}

document.getElementById('home-4').addEventListener('click', doScrolling.bind(null, '#footer__social', 3000));
// -----------------------------------------------------------------------------------------------------------------------------------