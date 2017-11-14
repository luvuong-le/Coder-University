/* Login */
let loginModal = document.getElementById("loginModal");

let closeBtn = document.getElementById("loginClose");

let loginBtn = document.getElementById("loginBtn");


/* Register */
let registerModal = document.getElementById("registerModalOverlay");

let registerCloseBtn = document.getElementById("registerClose");

let registerBtn = document.getElementById("registerBtn");


/* Add Listeners to the login button */
function loginAddListeners() {
    loginBtn.addEventListener("click", () => {
        loginModal.style.display = "block";
    });

    closeBtn.addEventListener("click", () => {
        loginModal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === loginModal) {
            loginModal.style.display = "none";
        }
    });
}

/* Add Listeners to the register button */
function registerAddListeners() {
    registerBtn.addEventListener("click", () => {
        registerModal.style.display = "block";
    });

    registerCloseBtn.addEventListener("click", () => {
        registerModal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === registerModal) {
            registerModal.style.display = "none";
        }
    });
}


loginAddListeners();
registerAddListeners();
