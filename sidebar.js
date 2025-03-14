document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const menuIcon = document.querySelector(".menu-icon");
        const sidebar = document.getElementById("sidebar");
        const closeBtn = document.querySelector(".close-btn");

        if (menuIcon && sidebar) {
            console.log("Sidebar script loaded.");
            menuIcon.addEventListener("click", () => {
                sidebar.classList.toggle("active");
                menuIcon.classList.toggle("active");
            });
        } else {
            console.error("Sidebar elements not found!");
        }

        if (closeBtn) {
            closeBtn.addEventListener("click", () => {
                sidebar.classList.remove("active");
                menuIcon.classList.remove("active");
            });
        }
    }, 500);
});
