document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".project-row, .certificate-item");

    function checkElementsInView() {
        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.8) {
                section.classList.add("visible");
            }
        });
    }

    checkElementsInView();
    window.addEventListener("scroll", checkElementsInView);
});
