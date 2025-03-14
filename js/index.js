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
        titleElement.style.transform = "translateX(100%)";
        titleElement.style.opacity = 0;
        setTimeout(() => {
            titleElement.textContent = titles[index];
            titleElement.style.transform = "translateX(-100%)";
            setTimeout(() => {
                titleElement.style.transform = "translateX(0)";
                titleElement.style.opacity = 1;
            }, 300);
            index = (index + 1) % titles.length;
        }, 500);
    }

    setInterval(changeTitle, 3000); // Change every 3 seconds
});