document.addEventListener("DOMContentLoaded", function () {
    fetch("html/sidebar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("sidebar-container").innerHTML = data;
            setupSidebar();
        })
        .catch(error => console.error("Error loading sidebar:", error));
});

// ✅ Double Code Trick (Ensures Sidebar Always Works)
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        setupSidebar();
    }, 500); // ⏳ Ensures elements are fully loaded
});

function setupSidebar() {
    const menuIcon = document.querySelector(".menu-icon");
    const sidebar = document.getElementById("sidebar");
    const closeBtn = document.querySelector(".close-btn");

    if (!menuIcon || !sidebar || !closeBtn) {
        console.error("Sidebar elements not found!");
        return;
    }

    function toggleMenu() {
        sidebar.classList.toggle("active");
        menuIcon.classList.toggle("active");
    }

    // ✅ Open & Close Sidebar Events
    menuIcon.addEventListener("click", function (event) {
        event.stopPropagation();
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
}
