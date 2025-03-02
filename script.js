document.addEventListener("DOMContentLoaded", function() {
    var discographyTitle = document.getElementById("discography-title");
    var discographyContent = document.getElementById("discography-content");

    // 初期状態を "none" に設定して非表示にする
    if (discographyContent) {
        discographyContent.style.display = "none";
    }

    if (discographyTitle && discographyContent) {
        discographyTitle.addEventListener("click", function() {
            if (discographyContent.style.display === "none") {
                discographyContent.style.display = "block";
            } else {
                discographyContent.style.display = "none";
            }
        });
    }
});