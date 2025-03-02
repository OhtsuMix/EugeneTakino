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
            backgroundImage.style.display = "none";
            backgroundVideo.style.display = "block";

            // 動画が確実に再生されるようにする
            backgroundVideo.play().catch(error => {
                console.log("動画の再生がブロックされました:", error);
            });
        } else {
            // ディスコグラフィーを閉じたら画像に戻す
            backgroundVideo.style.display = "none";
            backgroundImage.style.display = "block";
        }
    });
});
