const certificateDescriptions = {
    "images/grades.jpg": "Final grades from high school technical course in Information Systems Management and Programming.",
    "images/Erasmus.jpg": "Participation in the Erasmus+ program, an EU initiative for education and training.",
    "images/Finfami_support_person.jpg": "Volunteer support training certification from FinFami, focusing on mental health support.",
    "images/Finfami_basic_traning.jpg": "Basic training certification in voluntary activities and community support.",
    "images/Portuguese_army.jpg": "Certification from the Portuguese Army for military and technical training.",
    "images/High_School_Diploma.jpg": "Official High School Diploma from Agrupamento de Escolas Dr. Francisco Fernandes Lopes.",
    "images/Topas_Certificate.jpg": "Participation in the TOPAS programming competition.",
    "images/Apps_for_good.jpg": "Certificate from Apps for Good, a technology education initiative."
};

// Ensure the lightbox is hidden on page load
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("lightbox").style.display = "none";
    createParticles(); // Call function to add particles
});

// Open Lightbox
function openImage(src) {
    document.getElementById("lightbox-img").src = src;
    document.getElementById("lightbox-text").textContent = certificateDescriptions[src] || "No description available.";
    document.getElementById("lightbox").style.display = "flex";
}

// Close Lightbox
function closeImage() {
    document.getElementById("lightbox").style.display = "none";
}

// Sidebar Toggle Function
function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active"); // Add/remove "active" class for animation
}

// 🎆 Floating Particles Effect (Copied from index.js)
function createParticles() {
    const canvas = document.createElement("canvas");
    document.body.appendChild(canvas);
    const ctx = canvas.getContext("2d");

    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.pointerEvents = "none"; // Ensures it doesn’t interfere with user clicks
    canvas.style.zIndex = "-1"; // Keeps it in the background

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
        ctx.fillStyle = "#FFD700"; // Golden particles
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
