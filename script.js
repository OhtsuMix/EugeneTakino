function toggleDiscography() {
    var discography = document.getElementById("discography");
    var body = document.body;

    if (discography.style.display === "none" || discography.style.display === "") {
        discography.style.display = "block";
        body.style.backgroundImage = "url('images/discography_open.jpg')"; // ディスコグラフィー開いたときの画像
    } else {
        discography.style.display = "none";
        body.style.backgroundImage = "url('images/discography_closed.jpg')"; // ディスコグラフィー閉じたときの別の画像
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const discographySection = document.querySelector(".discography");
    const backgroundVideo = document.getElementById("background-video");
    const backgroundImage = document.querySelector(".background-image");
    const toggleButton = document.getElementById("toggle-discography");

    toggleButton.addEventListener("click", function(event) {
        event.preventDefault();
        discographySection.classList.toggle("hidden");

        if (!discographySection.classList.contains("hidden")) {
            // ディスコグラフィーを開いたら動画に切り替え
            backgroundImage.classList.add("hidden");
            backgroundVideo.classList.remove("hidden");
        } else {
            // ディスコグラフィーを閉じたら画像に戻す
            backgroundImage.classList.remove("hidden");
            backgroundVideo.classList.add("hidden");
        }
    });
});
