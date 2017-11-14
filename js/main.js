/* Elements */

let pages = document.querySelectorAll(".page");
let leftArrow = document.getElementById("left");
let rightArrow = document.getElementById("right");
let dots = document.querySelectorAll(".dot");
let currentPage = 0;

/* Testimonials */
function reset() {
    /* For each element in the pages array display them as none */
    pages.forEach(function(element) {
        element.style.display = "none";
    }, this);
}

/* Add event listeners for each dot */
for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", () => {
        reset();
        removeClassName();
        if (!dots[i].className.includes("dot-active")) {
            dots[i].className += " dot-active";
            pages[i].style.display = "inherit";

            currentPage = i;
        }
    });
}

function removeClassName() {
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("dot-active");
    }
}

function shiftDot(i) {
    removeClassName();
    if (!dots[i].className.includes("dot-active")) {
        dots[i].className += " dot-active";
        pages[i].style.display = "inherit";

        currentPage = i;
    }
}

function addListeners() {

    leftArrow.addEventListener("click", () => {
        reset();

        if (currentPage == 0) {
            currentPage = pages.length - 1;
            /* Display the new current page */
            pages[currentPage].style.display = "inherit";
            shiftDot(currentPage);
        } else {
            /* Display the new current page */
            pages[currentPage - 1].style.display = "inherit";
            currentPage--;
            shiftDot(currentPage);
        }

    });

    rightArrow.addEventListener("click", () => {
        reset();

        if (currentPage == pages.length - 1) {
            currentPage = 0;
            /* Display the new current page */
            pages[currentPage].style.display = "inherit";
            shiftDot(currentPage);
        } else {
            /* Display the new current page */
            pages[currentPage + 1].style.display = "inherit";
            currentPage++;
            shiftDot(currentPage);
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            navbar.style.display = "flex";
        } else {
            navbar.style.display = "none";
        }
    });
}

function init() {
    reset();
    pages[0].style.display = "inherit";
    addListeners();
}


init();