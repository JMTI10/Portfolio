const certificateDescriptions = {
    "images/grades.jpg": "This certificate represents my final grades from my high school technical course in Information Systems Management and Programming.",
    "images/Erasmus.jpg": "Certificate of participation in the Erasmus+ program, a European Union initiative for education and training.",
    "images/Finfami_support_person.jpg": "Certification for volunteer support person training at FinFami, specializing in mental health and family support.",
    "images/Finfami_basic_traning.jpg": "Certificate of completion for basic training in voluntary activities, focusing on safe spaces and community engagement.",
    "images/Portuguese_army.jpg": "Certificate awarded by the Portuguese Army after completing training in military and technical disciplines.",
    "images/High_School_Diploma.jpg": "High School Diploma from Agrupamento de Escolas Dr. Francisco Fernandes Lopes, Portugal.",
    "images/Topas_Certificate.jpg": "Participation certificate from the TOPAS programming competition, an event promoting coding skills in students.",
    "images/Apps_for_good.jpg": "Certificate from Apps for Good, a technology education program encouraging innovation through app development."
};

function openImage(src) {
    document.getElementById("lightbox-img").src = src;
    document.getElementById("lightbox-text").textContent = certificateDescriptions[src] || "No description available.";
    document.getElementById("lightbox").style.display = "flex";
}

function closeImage() {
    document.getElementById("lightbox").style.display = "none";
}

// Sidebar Toggle Function
function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.left = sidebar.style.left === "0px" ? "-250px" : "0px";
}
