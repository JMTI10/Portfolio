document.addEventListener("DOMContentLoaded", function() {
    fetch("html/header.html") // Adjust the path if needed
        .then(response => response.text())
        .then(data => {
            document.querySelector("header").innerHTML = data;
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
