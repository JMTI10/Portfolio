// Ensure the script runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".menu-icon");
    const sidebar = document.getElementById("sidebar");

    // Ensure menu button works
    if (menuIcon && sidebar) {
        menuIcon.addEventListener("click", toggleMenu);
    }

    // Hide the lightbox on page load
    document.getElementById("lightbox").style.display = "none";

    // Initialize floating particles
    createParticles();
});

// Sidebar Toggle Function - FIXED
function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    const menuIcon = document.querySelector(".menu-icon");

    if (sidebar && menuIcon) {
        sidebar.classList.toggle("active");
        menuIcon.classList.toggle("active");
    }
}

// Lightbox Functionality
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

// Open Lightbox Function
function openImage(src) {
    console.log("Opening image:", src); // Debugging

    // Extract only the filename from the full URL
    const filename = src.substring(src.lastIndexOf("images/")); 
    console.log("Processed filename:", filename); // Debugging

    document.getElementById("lightbox-img").src = src;
    document.getElementById("lightbox-text").textContent = certificateDescriptions[filename] || "No description available.";
    document.getElementById("lightbox").style.display = "flex";
}

// Close Lightbox Function
function closeImage() {
    document.getElementById("lightbox").style.display = "none";
}

// 🎆 Floating Particles Effect
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
