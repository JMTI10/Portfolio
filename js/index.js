document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ index.js is loaded!");

    // Wait a bit to ensure the DOM is fully loaded
    setTimeout(() => {
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

        // Run the function immediately and then every 3 seconds
        changeTitle();
        setInterval(changeTitle, 3000);
    }, 500); // Delay execution to ensure elements exist
});
