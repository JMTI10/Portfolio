document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const sidebar = document.getElementById("sidebar");
    const closeBtn = document.querySelector(".close-btn");

    // Debugging logs
    console.log("Menu Icon:", menuIcon);
    console.log("Sidebar:", sidebar);
    console.log("Close Button:", closeBtn);

    function toggleMenu() {
        if (sidebar) {
            sidebar.classList.toggle("active");
        }
        if (menuIcon) {
            menuIcon.classList.toggle("active");
        }
    }

    if (menuIcon) {
        menuIcon.addEventListener("click", function (event) {
            event.stopPropagation();
            toggleMenu();
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", function (event) {
            event.stopPropagation();
            toggleMenu();
        });
    }

    // Click Outside Sidebar to Close
    document.addEventListener("click", function (event) {
        if (
            sidebar && sidebar.classList.contains("active") &&
            !sidebar.contains(event.target) &&
            !menuIcon.contains(event.target)
        ) {
            toggleMenu();
        }
    });
});
