// Sidebar Toggle Function
function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.left = sidebar.style.left === "0px" ? "-250px" : "0px";
}
window.addEventListener("scroll", fadeInOnScroll);
fadeInOnScroll();

// Floating Particles Effect
const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");

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
