document.addEventListener("DOMContentLoaded", () => {
    const headings = [
        "Hello, I'm Iúri Gonçalves.",
        "Building the Future of Tech, One Line at a Time.",
        "Innovating with Code & Passion."
    ];

    let index = 0;
    const headingElement = document.getElementById("dynamic-heading");

    setInterval(() => {
        index = (index + 1) % headings.length;
        headingElement.textContent = headings[index];
    }, 4000); // Changes every 4 seconds

    function openImage(src) {
        document.getElementById("lightbox-img").src = src;
        document.getElementById("lightbox").style.display = "flex";
    }
    
    function closeImage() {
        document.getElementById("lightbox").style.display = "none";
    }
    
});
