function toggleDiscography() {
    var discography = document.getElementById("discography");
    if (discography.style.display === "none" || discography.style.display === "") {
        discography.style.display = "block";
    } else {
        discography.style.display = "none";
    }
}