document.addEventListener("DOMContentLoaded", function() {
    fetch("html/header.html") // Ensure correct path
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML("afterbegin", data); // Adds header at the top

            // Reattach event listeners after loading
            const menuIcon = document.querySelector(".menu-icon");
            const sidebar = document.getElementById("sidebar");
            const closeBtn = document.querySelector(".close-btn");

            if (menuIcon && sidebar) {
                console.log("Menu icon found, adding event listener.");
                menuIcon.addEventListener("click", toggleMenu);
            } else {
                console.error("Sidebar or menu icon NOT found!");
            }

            if (closeBtn) {
                closeBtn.addEventListener("click", toggleMenu);
            }
        })
        .catch(error => console.error("Error loading header:", error));
});

// Double Code Trick (Ensures Sidebar Always Works)
document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".menu-icon");
    const sidebar = document.getElementById("sidebar");
    const closeBtn = document.querySelector(".close-btn");

    if (menuIcon) {
        console.log("Menu icon found, adding click event");
        menuIcon.addEventListener("click", toggleMenu);
    } else {
        console.error("Menu icon NOT found!");
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", toggleMenu);
    }
});

function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    const menuIcon = document.querySelector(".menu-icon");

    if (sidebar) {
        sidebar.classList.toggle("active");
        console.log("Sidebar toggled! Current classes:", sidebar.className);
    } else {
        console.error("Sidebar NOT found!");
    }

    if (menuIcon) {
        menuIcon.classList.toggle("active");
    }
}

