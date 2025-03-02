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