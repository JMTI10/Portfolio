document.addEventListener("DOMContentLoaded", () => {
    const headings = [
        "Hello, I'm Iúri Gonçalves.",
        "Building the Future of Tech, One Line at a Time.",
        "Innovating with Code & Passion."
    ];

    let index = 0;
    const headingElement = document.getElementById("dynamic-heading");

    setInterval(() => {
        // Slide out current text
        headingElement.style.animation = "slideOut 0.5s ease-in-out";

        setTimeout(() => {
            // Change text
            index = (index + 1) % headings.length;
            headingElement.textContent = headings[index];

            // Slide in new text
            headingElement.style.animation = "slideIn 0.5s ease-in-out";
        }, 500);
    }, 4000); // Change text every 4 seconds
});

// Sidebar Toggle Function
function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.left = sidebar.style.left === "0px" ? "-250px" : "0px";
}
function openImage(src) {
    document.getElementById("lightbox-img").src = src;
    document.getElementById("lightbox").style.display = "flex";
}

function closeImage() {
    document.getElementById("lightbox").style.display = "none";
}

// Sidebar Toggle Function
function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.left = sidebar.style.left === "0px" ? "-250px" : "0px";
}


