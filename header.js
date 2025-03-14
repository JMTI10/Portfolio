document.addEventListener("DOMContentLoaded", () => {
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-container").innerHTML = data;

            // Now that the header is loaded, add event listeners for the menu button
            const menuIcon = document.querySelector(".menu-icon");
            const sidebar = document.getElementById("sidebar");

            if (menuIcon && sidebar) {
                menuIcon.addEventListener("click", () => {
                    sidebar.classList.toggle("active");
                    menuIcon.classList.toggle("active");
                });
            } else {
                console.error("Header elements not found!");
            }
        })
        .catch(error => console.error("Error loading header:", error));
});
