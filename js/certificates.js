// Ensure the script runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    setupLightbox();
    setupParticles();
});

// Lightbox Functionality
function setupLightbox() {
    const certificateDescriptions = {
        "images/grades.jpg": "Final grades from high school technical course in Information Systems Management and Programming. Completed at Agrupamento de Escolas Dr. Francisco Fernandes Lopes.",
        "images/Erasmus.jpg": "Participation in the Erasmus+ program, a European Union initiative for education and training. Attended the 'School Building for Better Everyday School Life' project in Finland from December 9th to 13th, 2019.",
        "images/Finfami_support_person.jpg": "FinFami (The Finnish Central Association for Mental Health Families) provides support for individuals whose family members or loved ones are experiencing mental health challenges.",
        "images/mathlab.png": "MATLAB Onramp Certificate from MathWorks, indicating successful completion of the MATLAB Onramp training."
    };

    function openImage(src) {
        const lightbox = document.getElementById("lightbox");
        const lightboxImg = document.getElementById("lightbox-img");
        const lightboxText = document.getElementById("lightbox-text");

        if (lightbox && lightboxImg && lightboxText) {
            const filename = src.split("/").pop();
            lightboxImg.src = src;
            lightboxText.textContent = certificateDescriptions["images/" + filename] || "No description available.";
            lightbox.style.display = "flex";
        }
    }

    function closeImage() {
        document.getElementById("lightbox").style.display = "none";
    }

    window.openImage = openImage;
    window.closeImage = closeImage;
}

// 🎆 Floating Particles Effect
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

    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}
