document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in");

    function showElements() {
        fadeElements.forEach((el) => {
            if (el.getBoundingClientRect().top < window.innerHeight * 0.8) {
                el.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", showElements);
    showElements(); 
});

function toggleDiscography() {
    var discography = document.getElementById("discography");
    if (discography.style.display === "none" || discography.style.display === "") {
        discography.style.display = "block";
    } else {
        discography.style.display = "none";
    }
}
