document.addEventListener("DOMContentLoaded", function () {
    const discographyTitle = document.getElementById("discography-title");
    const discographyContent = document.getElementById("discography-content");

    discographyTitle.addEventListener("click", function () {
        discographyContent.classList.toggle("hidden");
    });
});