document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const lightbox = document.getElementById("lightbox");
        if (lightbox) {
            lightbox.style.display = "none"; // Ensure it's hidden initially
        } else {
            console.error("Lightbox container not found in the DOM!");
        }

        document.querySelectorAll(".certificate-item img").forEach(img => {
            img.addEventListener("click", function () {
                openImage(this.src);
            });
        });

    }, 500); // 🔄 Delay to ensure elements are available
});

function openImage(src) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxText = document.getElementById("lightbox-text");

    if (!lightbox || !lightboxImg || !lightboxText) {
        console.error("Lightbox elements not found!");
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
document.addEventListener("click", (event) => {
    const lightbox = document.getElementById("lightbox");
    if (event.target === lightbox) {
        closeImage();
    }
});
