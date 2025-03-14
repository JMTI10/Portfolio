document.addEventListener("DOMContentLoaded", function () {
    fetch("html/header.html")
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML("afterbegin", data);
            setupSidebar();
        })
        .catch(error => console.error("Error loading header:", error));
});

// Ensure Sidebar Button Works
function setupSidebar() {
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

// Double Code Trick (Ensures Sidebar Always Works)
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
