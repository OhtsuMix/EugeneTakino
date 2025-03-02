
document.addEventListener("DOMContentLoaded", function () {
    const discographySection = document.getElementById("discography");
    const body = document.body;
    const videoBg = document.createElement("video");

    videoBg.src = "slow_muted_background.mp4";
    videoBg.autoplay = true;
    videoBg.loop = true;
    videoBg.muted = true;
    videoBg.classList.add("video-bg");
    
    document.body.appendChild(videoBg);

    function toggleDiscography() {
        if (discographySection.classList.contains("hidden")) {
            discographySection.classList.remove("hidden");
            discographySection.classList.add("show");
            body.classList.add("discography-open");
        } else {
            discographySection.classList.add("hidden");
            discographySection.classList.remove("show");
            body.classList.remove("discography-open");
        }
    }

    window.toggleDiscography = toggleDiscography;
});
