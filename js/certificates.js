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

function openImage(src) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxText = document.getElementById("lightbox-text");

    if (!lightbox || !lightboxImg || !lightboxText) {
        console.error("❌ Lightbox elements not found when trying to open image!");
        return;
    }

    const filename = src.split("/").pop();
    lightboxImg.src = src;
    lightboxText.textContent = certificateDescriptions["images/" + filename] || "No description available.";
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
