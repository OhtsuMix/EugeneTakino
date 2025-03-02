
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

        if (discographySection.style.opacity === "0" || discographySection.style.opacity === "") {
            discographySection.style.opacity = "1"; // フェードイン
            backgroundImage.style.display = "none";
            backgroundVideo.style.display = "block";
            backgroundVideo.play();
        } else {
            discographySection.style.opacity = "0"; // フェードアウト
            backgroundVideo.style.display = "none";
            backgroundImage.style.display = "block";
            backgroundVideo.pause();
        }
    });
});
