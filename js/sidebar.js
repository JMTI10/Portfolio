document.addEventListener("DOMContentLoaded", function () {
    fetch("html/sidebar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("sidebar-container").innerHTML = data;
            setupSidebar();
        })
        .catch(error => console.error("Error loading sidebar:", error));
});
