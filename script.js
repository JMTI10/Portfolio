document.addEventListener("DOMContentLoaded", () => {
    const headings = [
        "Hello, I'm Iúri Gonçalves.",
        "Building the Future of Tech, One Line at a Time.",
        "Innovating with Code & Passion."
    ];

    let index = 0;
    const headingElement = document.getElementById("dynamic-heading");

    setInterval(() => {
        headingElement.style.opacity = "0"; // Fade out

        setTimeout(() => {
            index = (index + 1) % headings.length;
            headingElement.textContent = headings[index];
            headingElement.style.opacity = "1"; // Fade in
            headingElement.style.animation = "slideFade 0.8s ease-in-out"; // Slide in effect
        }, 500);
    }, 4000); // Change every 4 seconds
});


// Sidebar Toggle Function
function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.left = sidebar.style.left === "0px" ? "-250px" : "0px";
}
