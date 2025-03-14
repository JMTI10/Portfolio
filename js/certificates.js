alert("✅ JavaScript is running! Console might be blocked.");
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
    "Finfami_support_person.jpg": "Certified support person in FinFami Mental Health Organization.",
    "Finfami_basic_traning.jpg": "Completed basic training in voluntary mental health support.",
    "Portuguese_army.jpg": "Certified by the Portuguese Army in professional ethics & first aid.",
    "High_School_Diploma.jpg": "Official High School Diploma in Information Systems Management and Programming.",
    "Topas_Certificate.jpg": "Participation in TOPAS Programming Competition at the University of Algarve.",
    "Apps_for_good.jpg": "Recognition for participation in 'Apps for Good' technology initiative.",
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
