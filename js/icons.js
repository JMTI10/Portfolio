document.addEventListener("DOMContentLoaded", function () {
    fetch("html/icons.html")
    .then(res => res.text())
    .then(data => {
        const container = document.getElementById("icons-container");
        if (container) {
        container.innerHTML = data;
        }
    });
});