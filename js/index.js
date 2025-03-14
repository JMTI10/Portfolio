document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ index.js is loaded!");
    
    const titleElement = document.getElementById("carousel-title");

    if (!titleElement) {
        console.error("❌ ERROR: #carousel-title NOT FOUND in index.html!");
        return;
    }

    console.log("🎯 Found #carousel-title:", titleElement);

    const titles = [
        "Who Am I?",
        "ICT Student & Software Developer",
        "Passionate About Innovation & Tech",
        "Exploring Cloud, AI, and IoT",
        "Let's Build Something Great!"
    ];
    let index = 0;

    function changeTitle() {
        console.log(`🔄 Changing title to: ${titles[index]}`);
        titleElement.textContent = titles[index];
        index = (index + 1) % titles.length;
    }

    setInterval(changeTitle, 3000); // Change every 3 seconds
});
