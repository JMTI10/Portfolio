document.addEventListener("DOMContentLoaded", () => {
    const headings = [
        "Hello, I'm Iúri Gonçalves.",
        "Building the Future of Tech, One Line at a Time.",
        "Innovating with Code & Passion."
    ];

    let index = 0;
    const headingElement = document.getElementById("dynamic-heading");

    function changeText() {
        headingElement.style.opacity = "0"; // Fade out
        setTimeout(() => {
            index = (index + 1) % headings.length;
            headingElement.textContent = headings[index];
            headingElement.style.opacity = "1"; // Fade in
        }, 500);
    }

    setInterval(changeText, 4000);
});

// Sidebar Toggle Function with Smooth Transition
function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar.style.left === "0px") {
        sidebar.style.left = "-250px";
    } else {
        sidebar.style.left = "0px";
    }
}
