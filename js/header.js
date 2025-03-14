document.addEventListener("DOMContentLoaded", function () {
    fetch("html/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-container").innerHTML = data;
            setupHeader(); // Ensures menu button works after loading
        })
        .catch(error => console.error("Error loading header:", error));
});

function setupHeader() {
    const menuIcon = document.querySelector(".menu-icon");

    if (menuIcon) {
        menuIcon.addEventListener("click", () => {
            const sidebar = document.getElementById("sidebar");
            sidebar.classList.toggle("active");
            menuIcon.classList.toggle("active");
        });
    } else {
        console.error("Menu icon NOT found in header!");
    }
}
