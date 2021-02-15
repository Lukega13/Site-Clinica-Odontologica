
window.addEventListener("scroll", function () {
    let header = document.getElementById("header");
    header.classList.toggle("fixed-header", window.scrollY > 0);
})

