// SEARCH FUNCTION
const searchInput = document.getElementById("search");
const boxes = document.querySelectorAll(".box");

searchInput.addEventListener("keyup", function () {
    const searchValue = searchInput.value.toLowerCase();

    boxes.forEach(function (box) {
        const text = box.textContent.toLowerCase();
        if (text.includes(searchValue)) {
            box.style.display = "inline-block";
        } else {
            box.style.display = "none";
        }
    });
});


// NAVBAR CLICK EFFECT
const navItems = document.querySelectorAll("li");

navItems.forEach(function (item) {
    item.addEventListener("click", function () {
        alert(item.textContent.replace("|", "").trim());
    });
});


// PRODUCT CLICK POPUP
boxes.forEach(function (box) {
    box.addEventListener("click", function () {
        alert("You selected a perfume!");
    });
});
