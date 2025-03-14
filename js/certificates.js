document.addEventListener("DOMContentLoaded", () => {
    // Ensure the lightbox is hidden when the page loads
    document.getElementById("lightbox").style.display = "none";
});

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

// Open Lightbox
function openImage(src) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxText = document.getElementById("lightbox-text");

    if (lightbox && lightboxImg && lightboxText) {
        const filename = src.split("/").pop();
        lightboxImg.src = src;
        lightboxText.textContent = certificateDescriptions["images/" + filename] || "No description available.";
        lightbox.style.display = "flex";
        document.body.style.overflow = "hidden"; // Prevents scrolling when open
    }
}

// Close Lightbox
function closeImage() {
    const lightbox = document.getElementById("lightbox");
    if (lightbox) {
        lightbox.style.display = "none";
        document.body.style.overflow = "auto"; // Enables scrolling after closing
    }
}

// Ensure clicking outside the image also closes the lightbox
document.addEventListener("click", (event) => {
    const lightbox = document.getElementById("lightbox");
    if (event.target === lightbox) {
        closeImage();
    }
});
