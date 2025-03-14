document.addEventListener("DOMContentLoaded", function () {
    fetch("html/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-container").innerHTML = data;
            setupHeader(); 
        })
        .catch(error => console.error("Error loading header:", error));
});

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        setupHeader();
    }, 500); 
});

function setupHeader() {
    const menuIcon = document.querySelector(".menu-icon");
    const sidebar = document.getElementById("sidebar");
    const closeBtn = document.querySelector(".close-btn");

    if (!menuIcon || !sidebar || !closeBtn) {
        console.error("Header or Sidebar elements not found!");
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
