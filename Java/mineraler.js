document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll("div > img");

    images.forEach(image => {
        image.addEventListener("mouseenter", function () {
            image.style.transform = "scale(1.2)"; // Gör bilden 50% större
            image.style.transition = "transform 0.3s ease";
        });

        image.addEventListener("mouseleave", function () {
            image.style.transform = "scale(1)"; // Återställ storleken
        });
    });
});
