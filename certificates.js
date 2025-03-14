document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".menu-icon");
    const sidebar = document.getElementById("sidebar");
    const closeBtn = document.querySelector(".close-btn");

    menuIcon.addEventListener("click", toggleMenu);
    closeBtn.addEventListener("click", toggleMenu);
});

function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    const menuIcon = document.querySelector(".menu-icon");
    sidebar.classList.toggle("active");
    menuIcon.classList.toggle("active");
}

// Lightbox Function
function openImage(src) {
    const filename = src.split("/").pop();
    document.getElementById("lightbox-img").src = src;
    document.getElementById("lightbox-text").textContent = certificateDescriptions["images/" + filename] || "No description available.";
    document.getElementById("lightbox").style.display = "flex";
}

// Close Lightbox
function closeImage() {
    document.getElementById("lightbox").style.display = "none";
}

// Particles Effect
document.addEventListener("DOMContentLoaded", createParticles);
