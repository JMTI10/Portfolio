document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".menu-icon");
    const sidebar = document.getElementById("sidebar");
    const closeBtn = document.querySelector(".close-btn");

    function toggleMenu() {
        if (!sidebar || !menuIcon) {
            console.error("Sidebar elements missing!");
            return;
        }
        sidebar.classList.toggle("active");
        menuIcon.classList.toggle("active");
    }

    // Ensure sidebar opens and closes when clicking the menu button
    if (menuIcon) {
        menuIcon.addEventListener("click", (event) => {
            event.stopPropagation(); // Prevents closing when clicking the button itself
            toggleMenu();
        });
    }

    // Ensure sidebar closes when clicking the X button
    if (closeBtn) {
        closeBtn.addEventListener("click", (event) => {
            event.stopPropagation();
            toggleMenu();
        });
    }

    // Ensure sidebar closes when clicking anywhere outside
    document.addEventListener("click", (event) => {
        if (sidebar.classList.contains("active") && !sidebar.contains(event.target) && !menuIcon.contains(event.target)) {
            toggleMenu();
        }
    });
});

// **Double Code Trick (Ensures Sidebar Always Works)**
document.addEventListener("DOMContentLoaded", () => {
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
