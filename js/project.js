document.addEventListener("DOMContentLoaded", function () {

    const projectRows = document.querySelectorAll(".project-row");

    function checkProjectsInView() {
        projectRows.forEach((row, index) => {
            const rect = row.getBoundingClientRect();
            console.log(`Checking project ${index + 1}, position: ${rect.top}`);
            if (rect.top < window.innerHeight * 0.8) {
                row.classList.add("visible");
            }
        });
    }

    // Initial check on page load
    checkProjectsInView();

    // Check on scroll
    window.addEventListener("scroll", checkProjectsInView);
});
