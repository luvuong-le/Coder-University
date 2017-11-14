let searchInput = document.getElementById("searchInput");
let errorBox = document.getElementById("sitem-error");

searchInput.addEventListener("keyup", () => {


    let searchVal = searchInput.value.toUpperCase();

    /* Grabbing the search items */
    let items = document.querySelectorAll(".sitem");

    for (let i = 0; i < items.length; i++) {
        let a = items[i].getElementsByTagName("h1")[0];

        if (a.innerHTML.toUpperCase().indexOf(searchVal) > -1) {
            items[i].style.display = "";
        } else {
            items[i].style.display = "none";
        }
    }

});