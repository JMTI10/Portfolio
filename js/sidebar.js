document.addEventListener("DOMContentLoaded", () => {
    fetch("html/sidebar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("sidebar-container").innerHTML = data;

            // Ensure sidebar toggle works
            const menuIcon = document.querySelector(".menu-icon");
            const sidebar = document.getElementById("sidebar");

            if (menuIcon && sidebar) {
                menuIcon.addEventListener("click", () => {
                    sidebar.classList.toggle("active");
                    menuIcon.classList.toggle("active");
                });
            } else {
                console.error("Sidebar elements not found!");
            }
        })
        .catch(error => console.error("Error loading sidebar:", error));
});
