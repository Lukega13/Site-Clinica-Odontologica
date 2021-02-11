
window.addEventListener("scroll", function () {
    var header = document.getElementById("header");
    header.classList.toggle("fixed-header", window.scrollY > 0);
})

