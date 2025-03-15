document.addEventListener("DOMContentLoaded", function () {
    const projectRows = document.querySelectorAll(".project-row");

    function checkProjectsInView() {
        projectRows.forEach((row, index) => {
            const rect = row.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.8) {
                row.classList.add("visible");
            }
        });
    }

    checkProjectsInView();
    window.addEventListener("scroll", checkProjectsInView);

    // Lightbox Functionality (Same as Certificates, but No Text)
    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    document.body.appendChild(lightbox);

    const lightboxImg = document.createElement("img");
    lightbox.appendChild(lightboxImg);

    lightbox.addEventListener("click", function () {
        lightbox.classList.remove("active");
    });

    document.querySelectorAll(".project-img").forEach(img => {
        img.addEventListener("click", function (event) {
            event.stopPropagation();
            lightboxImg.src = this.src;
            lightbox.classList.add("active");
        });
    });
});
