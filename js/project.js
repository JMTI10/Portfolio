document.addEventListener("DOMContentLoaded", function () {
    const projectRows = document.querySelectorAll(".project-row");

    function checkProjectsInView() {
        projectRows.forEach((row) => {
            const rect = row.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.8) {
                row.classList.add("visible");
            }
        });
    }

    // Trigger on page load
    checkProjectsInView();

    // Trigger on scroll
    window.addEventListener("scroll", checkProjectsInView);
});
