document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const sidebar = document.getElementById("sidebar");
    const closeBtn = document.querySelector(".close-btn");

    function toggleMenu() {
        sidebar.classList.toggle("active");
        menuIcon.classList.toggle("active");
    }

    // Open/Close Sidebar on Button Click
    if (menuIcon) {
        menuIcon.addEventListener("click", function (event) {
            event.stopPropagation(); // Prevents immediate closing
            toggleMenu();
        });
    }

    // Close Sidebar on X Button Click
    if (closeBtn) {
        closeBtn.addEventListener("click", function (event) {
            event.stopPropagation();
            toggleMenu();
        });
    }

    // Close Sidebar on Click Outside
    document.addEventListener("click", function (event) {
        if (
            sidebar.classList.contains("active") &&
            !sidebar.contains(event.target) &&
            !menuIcon.contains(event.target)
        ) {
            toggleMenu();
        }
    });
});

// **Double Code Trick (Ensures Sidebar Always Works)**
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const sidebar = document.getElementById("sidebar");
    const closeBtn = document.querySelector(".close-btn");

    if (menuIcon) {
        menuIcon.addEventListener("click", toggleMenu);
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", toggleMenu);
    }
});
