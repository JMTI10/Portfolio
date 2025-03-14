document.addEventListener("DOMContentLoaded", function () {
    const titleElement = document.getElementById("carousel-title");

    if (!titleElement) {
        return;
    }

    const titles = [
        "Who Am I?",
        "ICT Student & Software Developer",
        "Passionate About Innovation & Tech",
        "Exploring Cloud, AI, and IoT",
        "Let's Build Something Great!"
    ];
    let index = 0;

    function changeTitle() {
        titleElement.style.opacity = 0; // Fade out
        setTimeout(() => {
            titleElement.textContent = titles[index];
            titleElement.style.opacity = 1; // Fade in
            index = (index + 1) % titles.length;
        }, 500); // Wait for fade-out before changing text
    }

    setInterval(changeTitle, 3000); // Change every 3 seconds
});
