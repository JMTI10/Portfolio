document.addEventListener("DOMContentLoaded", function () {
    const titleElement = document.querySelector("title");
    const titles = [
        "Portfolio - Iúri Gonçalves",
        "ICT Student | Developer | Innovator",
        "Passionate About Tech & Problem Solving",
        "Exploring Cloud, AI, and IoT",
        "Let's Build Something Great!"
    ];
    let index = 0;

    function changeTitle() {
        titleElement.textContent = titles[index];
        index = (index + 1) % titles.length;
    }

    setInterval(changeTitle, 3000);
});

document.addEventListener("DOMContentLoaded", setupParticles);

function setupParticles() {
    const canvas = document.createElement("canvas");
    document.body.appendChild(canvas);
    const ctx = canvas.getContext("2d");

    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "-1";

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];
    for (let i = 0; i < 50; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 2 + 1,
            speedX: (Math.random() - 0.5) * 0.5,
            speedY: (Math.random() - 0.5) * 0.5,
        });
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#FFD700";
        particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fill();
            p.x += p.speedX;
            p.y += p.speedY;
            if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
            if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
        });
        requestAnimationFrame(animateParticles);
    }

    animateParticles();
}
