document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const menuIcon = document.querySelector(".menu-icon");
    const closeBtn = document.querySelector(".close-btn");

    if (!sidebar || !menuIcon || !closeBtn) {
        console.error("Sidebar, Menu Icon, or Close Button not found!");
        return;
    }

    // ✅ Sidebar Toggle Function
    function toggleMenu() {
        sidebar.classList.toggle("active");
        menuIcon.classList.toggle("active");
    }

    // ✅ Open & Close Sidebar Events
    menuIcon.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevents event bubbling
        toggleMenu();
    });

    closeBtn.addEventListener("click", function (event) {
        event.stopPropagation();
        toggleMenu();
    });

    // ✅ Click Outside Sidebar to Close
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

// ✅ Double Code Trick (Ensures Sidebar Always Works)
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
