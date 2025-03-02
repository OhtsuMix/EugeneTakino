
document.addEventListener("DOMContentLoaded", function() {
    const discographySection = document.getElementById("discography");
    const backgroundVideo = document.getElementById("background-video");
    const backgroundImage = document.querySelector(".background-image");
    const toggleButton = document.querySelector(".discography-title");

    if (!toggleButton || !discographySection || !backgroundVideo || !backgroundImage) {
        console.error("必要な要素が見つかりません。スクリプトを確認してください。");
        return;
    }

    console.log("スクリプトが正常に読み込まれました。");

    toggleButton.addEventListener("click", function(event) {
        event.preventDefault();
        console.log("ディスコグラフィーボタンがクリックされました。");

        discographySection.classList.toggle("hidden");

        if (!discographySection.classList.contains("hidden")) {
            console.log("ディスコグラフィーを開く → 動画に切り替え");
            backgroundImage.style.display = "none";
            backgroundVideo.style.display = "block";
            backgroundVideo.load();  // 動画を確実に読み込む
            backgroundVideo.play();  // 動画を再生
        } else {
            console.log("ディスコグラフィーを閉じる → 画像に戻す");
            backgroundVideo.style.display = "none";
            backgroundImage.style.display = "block";
            backgroundVideo.pause(); // 動画を停止
        }
    });
});
