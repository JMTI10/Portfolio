document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        const lightbox = document.getElementById("lightbox");
        const lightboxImg = document.getElementById("lightbox-img");
        const lightboxText = document.getElementById("lightbox-text");

        if (!lightbox || !lightboxImg || !lightboxText) {
            return;
        }

        // Select all certificate images and check if they exist
        const certificateImages = document.querySelectorAll(".certificate-item img");

        if (certificateImages.length === 0) {
            return;
        }

        // Add event listeners
        certificateImages.forEach(img => {
            img.addEventListener("click", function () {
                openImage(this.src);
            });
        });
    }, 500);
});

const certificateDescriptions = {
    "Finfami_support_person.jpg": "FinFami (The Finnish Central Association for Mental Health Families) provides support for individuals whose family members or loved ones are experiencing mental health challenges. A FinFami support person (or peer supporter) is typically someone who offers emotional support, guidance, and resources to families and caregivers affected by mental health issues.",
    "Portuguese_army.jpg": "The military card is the official document that certifies, at the time of its issuance, the military status of citizens concerning the fulfillment of military duties. It records all information related to a national citizen’s military obligations, such as the completion of the DDN, the date of transfer to the recruitment reserve, or, in the case of former military personnel, the availability reserve.",
    "Topas_Certificate.jpg": "It is a programming competition for high school students from the Algarve, but open to all schools in the country. This year, the initiative includes the participation of eight teams from Loulé Secondary School, Pinheiro e Rosa Secondary School (Faro), and INETE - Institute of Technical Education (Lisbon). The programming challenge lasts four hours, during which participants must solve six to seven problems using a programming language of their choice (C, C++, Java, or Pascal).",
    "Apps_for_good.jpg": "Apps for Good is a technological educational program that encourages students from 5th to 12th grade and teachers from all disciplinary areas to develop applications for smartphones or tablets that solve social problems, highlighting the transformative potential of technology in the world and communities. Regional and Final event certificates."
};

function openImage(src) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxText = document.getElementById("lightbox-text");

    if (!lightbox || !lightboxImg || !lightboxText) {
        return;
    }

    // Extract filename from full image path
    const filename = src.split("/").pop();

    if (certificateDescriptions.hasOwnProperty(filename)) {
        lightboxText.textContent = certificateDescriptions[filename];
    } else {
        lightboxText.textContent = "No description available.";
    }

    lightboxImg.src = src;
    lightbox.style.display = "flex";
    document.body.style.overflow = "hidden";
}

function closeImage() {
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
        closeImage();
    }
});
