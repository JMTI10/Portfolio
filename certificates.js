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

function openImage(src) {
    document.getElementById("lightbox-img").src = src;
    document.getElementById("lightbox-text").textContent = certificateDescriptions[src] || "No description available.";
    document.getElementById("lightbox").style.display = "flex";
}

function closeImage() {
    document.getElementById("lightbox").style.display = "none";
}

// Remove Any Extra Empty Elements on Load
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("img").forEach(img => {
        if (!img.src) {
            img.remove();
        }
    });
});
