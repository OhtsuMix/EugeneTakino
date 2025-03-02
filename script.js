document.addEventListener("DOMContentLoaded", function() {
    var discographyTitle = document.getElementById("discography-title");
    var discographyContent = document.getElementById("discography-content");

    // 初期状態で閉じておく
    discographyContent.style.display = "none";

    discographyTitle.addEventListener("click", function() {
        if (discographyContent.style.display === "none") {
            discographyContent.style.display = "block";
            discographyTitle.innerHTML = "Discography ▲";
        } else {
            discographyContent.style.display = "none";
            discographyTitle.innerHTML = "Discography ▼";
        }
    });
});