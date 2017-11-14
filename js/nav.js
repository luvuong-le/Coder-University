
let bar = document.getElementById("bars");
let navbar = document.getElementById("navbar");


function init() {
    bar.addEventListener("click", () => {
        if (navbar.style.display != "none") {
            navbar.style.display = "none";
        } else {
            navbar.style.display = "inherit";
        }
    });
}

init();