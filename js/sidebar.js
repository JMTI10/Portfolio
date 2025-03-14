document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".menu-icon");
    const sidebar = document.getElementById("sidebar");
    const closeBtn = document.querySelector(".close-btn");

    // Toggle Sidebar
    function toggleSidebar() {
        sidebar.classList.toggle("active");
        menuIcon.classList.toggle("active");
    }

    function closeSidebar(event) {
        if (!sidebar.contains(event.target) && !menuIcon.contains(event.target)) {
            sidebar.classList.remove("active");
            menuIcon.classList.remove("active");
        }
    }
    
    if (menuIcon) menuIcon.addEventListener("click", toggleSidebar);
    if (closeBtn) closeBtn.addEventListener("click", toggleSidebar);
    document.addEventListener("click", closeSidebar);
});
