document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".menu-icon");
    const sidebar = document.getElementById("sidebar");
    const closeBtn = document.querySelector(".close-btn");

    // Ensure sidebar works correctly
    if (menuIcon) {
        console.log("Menu icon found, adding click event");
        menuIcon.addEventListener("click", () => {
            toggleMenu();
        });
    } else {
        console.error("Menu icon NOT found!");
    }

    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            toggleMenu();
        });
    }
});

// Sidebar Toggle Function - **Restored Working Version**
function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    const menuIcon = document.querySelector(".menu-icon");

    if (sidebar) {
        sidebar.classList.toggle("active");
        console.log("Sidebar toggled! Current classes:", sidebar.className);
    } else {
        console.error("Sidebar NOT found!");
    }

    if (menuIcon) {
        menuIcon.classList.toggle("active");
    }
}

// Certificate Descriptions
const certificateDescriptions = {
    "images/grades.jpg": "Final grades from high school technical course in Information Systems Management and Programming. Completed at Agrupamento de Escolas Dr. Francisco Fernandes Lopes.",
    "images/Erasmus.jpg": "Participation in the Erasmus+ program, a European Union initiative for education and training. Attended the 'School Building for Better Everyday School Life' project in Finland from December 9th to 13th, 2019.",
    "images/Finfami_support_person.jpg": "FinFami (The Finnish Central Association for Mental Health Families) provides support for individuals whose family members or loved ones are experiencing mental health challenges. A FinFami support person (or peer supporter) offers emotional support, guidance, and resources to families and caregivers affected by mental health issues.",
    "images/Finfami_basic_traning.jpg": "Completed basic training in voluntary activities at FinFami, covering principles of a safe space, introduction to the HELM project, and key aspects of volunteer work in mental health support.",
    "images/Portuguese_army.jpg": "Certification from the Portuguese Army (Ministério da Defesa Nacional), confirming training in professional ethics, topography & calculations, and health & first aid.",
    "images/High_School_Diploma.jpg": "Official High School Diploma from Agrupamento de Escolas Dr. Francisco Fernandes Lopes, completing a professional course in Information Systems Management and Programming.",
    "images/Topas_Certificate.jpg": "Participation in the TOPAS (Torneio de Programação para Alunos do Secundário) programming competition at the University of Algarve. The event challenges students with problem-solving tasks in programming.",
    "images/Apps_for_good.jpg": "Recognition for participation in the 'Apps for Good' program, a technology education initiative that encourages students to develop digital solutions for real-world problems. Attended both the Regional and Final Events in 2017/2018.",
    "images/mathlab.png": "MATLAB Onramp Certificate from MathWorks, indicating successful completion of the MATLAB Onramp training. Covers key concepts including commands, matrix operations, programming, function calls, and data visualization."
};

// Open Lightbox Function - Fixed
function openImage(src) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxText = document.getElementById("lightbox-text");

    if (lightbox && lightboxImg && lightboxText) {
        // Extract filename correctly
        const filename = src.split("/").pop();
        lightboxImg.src = src;
        lightboxText.textContent = certificateDescriptions["images/" + filename] || "No description available.";
        lightbox.style.display = "flex";
    }
}

// Close Lightbox Function
function closeImage() {
    const lightbox = document.getElementById("lightbox");
    if (lightbox) {
        lightbox.style.display = "none";
    }
}

// Floating Particles
function createParticles() {
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

// Run particles effect when the page loads
document.addEventListener("DOMContentLoaded", createParticles);
