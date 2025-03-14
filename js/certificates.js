document.addEventListener("DOMContentLoaded", function () {
    // Ensure the script runs only after the page is fully loaded
    setTimeout(() => {
        const lightbox = document.getElementById("lightbox");
        const lightboxImg = document.getElementById("lightbox-img");
        const lightboxText = document.getElementById("lightbox-text");

        // Debugging logs
        console.log("Checking for Lightbox elements...");
        console.log("Lightbox:", lightbox);
        console.log("Lightbox Image:", lightboxImg);
        console.log("Lightbox Text:", lightboxText);

        if (!lightbox || !lightboxImg || !lightboxText) {
            console.error("❌ Lightbox elements are missing! Ensure the HTML structure is correct.");
            return;
        }

        // Add event listeners for all certificate images
        document.querySelectorAll(".certificate-item img").forEach(img => {
            img.addEventListener("click", function () {
                openImage(this.src);
            });
        });

        console.log("✅ Lightbox setup completed successfully!");
    }, 500); // Delay to ensure elements exist
});

// ✅ Certificate descriptions
const certificateDescriptions = {
    "grades.jpg": "Final grades from high school technical course in Information Systems Management and Programming.",
    "Erasmus.jpg": "Participation in the Erasmus+ program in Finland, Dec 9-13, 2019.",
    "FinFami_support_person.jpg": "FinFami (The Finnish Central Association for Mental Health Families) provides support for individuals whose family members or loved ones are experiencing mental health challenges. A FinFami support person (or peer supporter) is typically someone who offers emotional support, guidance, and resources to families and caregivers affected by mental health issues.",
    "FinFami_basic_traning.jpg": "Completed basic training in voluntary mental health support.",
    "Army_certificate.jpg": "The military card is the official document that certifies, at the time of its issuance, the military status of citizens concerning the fulfillment of military duties. It records all information related to a national citizen’s military obligations, such as the completion of the DDN, the date of transfer to the recruitment reserve, or, in the case of former military personnel, the availability reserve.",
    "High_School_Diploma.jpg": "Official High School Diploma in Information Systems Management and Programming.",
    "Topas_Certificate.jpg": "It is a programming competition for high school students from the Algarve, but open to all schools in the country. This year, the initiative includes the participation of eight teams from Loulé Secondary School, Pinheiro e Rosa Secondary School (Faro), and INETE - Institute of Technical Education (Lisbon). The programming challenge lasts four hours, during which participants must solve six to seven problems using a programming language of their choice (C, C++, Java, or Pascal).",
    "Apps_for_good_certificate.jpg": "Apps for Good is a technological educational program that encourages students from 5th to 12th grade and teachers from all disciplinary areas to develop applications for smartphones or tablets that solve social problems, highlighting the transformative potential of technology in the world and communities. Regional and Final event certificates.",
    "mathlab.png": "MATLAB Onramp Certificate from MathWorks."
};

function openImage(src) {
    console.log(`🖼 openImage() called for: ${src}`);

    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxText = document.getElementById("lightbox-text");

    if (!lightbox || !lightboxImg || !lightboxText) {
        console.error("❌ Lightbox elements not found when trying to open image!");
        return;
    }

    // Extract filename from full image path
    const filename = src.split("/").pop();

    lightboxImg.src = src;
    lightboxText.textContent = certificateDescriptions[filename] || "No description available.";
    lightbox.style.display = "flex";
    document.body.style.overflow = "hidden";
}

function closeImage() {
    console.log("❌ Closing Lightbox");
    const lightbox = document.getElementById("lightbox");
    if (lightbox) {
        lightbox.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

// ✅ Click outside the image to close the lightbox
document.addEventListener("click", function (event) {
    const lightbox = document.getElementById("lightbox");
    if (event.target === lightbox) {
        console.log("❌ Clicked outside! Closing Lightbox...");
        closeImage();
    }
});
