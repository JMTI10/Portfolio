document.addEventListener("DOMContentLoaded", function () {
    fetch("html/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-container").innerHTML = data;
            setupHeader(); // Initialize sidebar & menu button after header loads
        })
        .catch(error => console.error("Error loading header:", error));
});

// ✅ Ensure Sidebar Button Works After Header Loads
function setupHeader() {
    const menuIcon = document.querySelector(".menu-icon");
    const sidebar = document.getElementById("sidebar");
    const closeBtn = document.querySelector(".close-btn");

    if (!menuIcon || !sidebar || !closeBtn) {
        console.error("Header or Sidebar elements not found!");
        return;
    }

    function toggleMenu() {
        sidebar.classList.toggle("active");
        menuIcon.classList.toggle("active");
    }

    menuIcon.addEventListener("click", function (event) {
        event.stopPropagation();
        toggleMenu();
    });

    closeBtn.addEventListener("click", function (event) {
        event.stopPropagation();
        toggleMenu();
    });

    document.addEventListener("click", function (event) {
        if (
            sidebar.classList.contains("active") &&
            !sidebar.contains(event.target) &&
            !menuIcon.contains(event.target)
        ) {
            toggleMenu();
        }
    });
}
