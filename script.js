
document.addEventListener("DOMContentLoaded", function () {
    const discographyTitle = document.getElementById("toggle-discography");
    const discographyContent = document.getElementById("discography");
    const backgroundImage = document.getElementById("default-background");
    const backgroundVideo = document.getElementById("background-video");

    let isDiscographyOpen = false;

    discographyTitle.addEventListener("click", function () {
        if (!isDiscographyOpen) {
            discographyContent.classList.add("show");
            backgroundImage.style.display = "none";
            backgroundVideo.style.display = "block";
            backgroundVideo.play();
            isDiscographyOpen = true;
        } else {
            discographyContent.classList.remove("show");
            backgroundImage.style.display = "block";
            backgroundVideo.style.display = "none";
            backgroundVideo.pause();
            isDiscographyOpen = false;
        }
    });
});
