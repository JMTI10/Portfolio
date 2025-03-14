document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".menu-icon");
    const sidebar = document.getElementById("sidebar");
    const closeBtn = document.querySelector(".close-btn");

    if (!menuIcon || !sidebar || !closeBtn) {
        console.error("Sidebar elements not found!");
        return;
    }

    // Toggle sidebar when clicking the menu button
    menuIcon.addEventListener("click", toggleMenu);
    
    // Close sidebar when clicking the X button
    closeBtn.addEventListener("click", toggleMenu);

    // Close sidebar when clicking outside of it
    document.addEventListener("click", (event) => {
        if (
            sidebar.classList.contains("active") &&
            !sidebar.contains(event.target) &&
            !menuIcon.contains(event.target)
        ) {
            toggleMenu();
        }
    });
});

// Keep the **double event listener trick** as requested
document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".menu-icon");
    const sidebar = document.getElementById("sidebar");
    const closeBtn = document.querySelector(".close-btn");

    if (menuIcon && sidebar) {
        menuIcon.addEventListener("click", toggleMenu);
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", toggleMenu);
    }
});

function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    const menuIcon = document.querySelector(".menu-icon");

    if (!sidebar || !menuIcon) {
        console.error("Sidebar elements missing!");
        return;
    }

    sidebar.classList.toggle("active");
    menuIcon.classList.toggle("active");
}

