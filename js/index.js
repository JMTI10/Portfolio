function toggleSkills() {
    const panel = document.getElementById("floatingSkills");
    const arrow = document.getElementById("toggleSkillsBtn");

    panel.classList.toggle("collapsed");
    arrow.classList.toggle("collapsed");

    arrow.textContent = panel.classList.contains("collapsed") ? "◀" : "➤";
}

document.addEventListener("DOMContentLoaded", function () {
    const titleElement = document.getElementById("carousel-title");

    if (!titleElement) return;

    const titles = [
        "ICT Student & Software Developer",
        "Passionate About Innovation & Tech",
        "Exploring Cloud, AI, and IoT",
        "Let's Build Something Great!"
    ];

    let index = 0;

    function changeTitle() {
        titleElement.style.transition = "transform 0.5s ease-in-out, opacity 0.5s ease-in-out";
        titleElement.style.transform = "translateX(20px)";
        titleElement.style.opacity = 0;

        setTimeout(() => {
            titleElement.textContent = titles[index];
            titleElement.style.transform = "translateX(-20px)";
            setTimeout(() => {
                titleElement.style.transform = "translateX(0)";
                titleElement.style.opacity = 1;
            }, 300);

            index = (index + 1) % titles.length;
        }, 500);
    }

    setInterval(changeTitle, 3000);

    if (window.innerWidth <= 768) {
        document.getElementById("floatingSkills").classList.add("collapsed");
        document.getElementById("toggleSkillsBtn").classList.add("collapsed");
    }
});
