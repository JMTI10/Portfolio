document.addEventListener("DOMContentLoaded", function () {
    fetch("html/sidebar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("sidebar-container").innerHTML = data;
            addSidebarFunctionality(); // Ensure event listeners are added
        })
        .catch(error => console.error("Error loading sidebar:", error));
});

function addSidebarFunctionality() {
    const menuIcon = document.querySelector(".menu-icon");
    const sidebar = document.getElementById("sidebar");
    const closeBtn = document.querySelector(".close-btn");

    function toggleMenu() {
        sidebar.classList.toggle("active");
        menuIcon.classList.toggle("active");
    }

    if (menuIcon && sidebar) {
        menuIcon.addEventListener("click", toggleMenu);
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", toggleMenu);
    }
}
