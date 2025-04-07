document.addEventListener("DOMContentLoaded", function () {
    fetch("html/sidebar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("sidebar-container").innerHTML = data;
            setupSidebar();
        })
        .catch(error => console.error("Error loading sidebar:", error));
});
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        setupSidebar();
    }, 500);
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
