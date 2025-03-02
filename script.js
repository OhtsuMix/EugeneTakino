
document.addEventListener("DOMContentLoaded", function() {
    const discographySection = document.querySelector(".discography");
    const backgroundVideo = document.getElementById("background-video");
    const backgroundImage = document.querySelector(".background-image");
    const toggleButton = document.getElementById("toggle-discography");

    if (toggleButton) {
        toggleButton.addEventListener("click", function(event) {
            event.preventDefault();
            discographySection.classList.toggle("hidden");

            if (!discographySection.classList.contains("hidden")) {
                // ディスコグラフィーを開いたら動画に切り替え
                backgroundImage.style.display = "none";
                backgroundVideo.style.display = "block";
                backgroundVideo.load();  // 動画を確実に読み込む
                backgroundVideo.play();  // 動画を再生
            } else {
                // ディスコグラフィーを閉じたら画像に戻す
                backgroundVideo.style.display = "none";
                backgroundImage.style.display = "block";
                backgroundVideo.pause(); // 動画を停止
            }
        });
    } else {
        console.error("ディスコグラフィーのトグルボタンが見つかりません。");
    }
});
