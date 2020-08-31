
window.addEventListener("scroll", function () {
    var header = document.getElementById("header");
    header.classList.toggle("fixed-header", window.scrollY > 0);
})


//Carousel
let liEls = document.querySelectorAll('#carousel-item');
let index = 0;

intervalo = setInterval(timer, 20000)
window.onload = intervalo

function timer() {
    show(+1)
}


function show(increase) {
    index = index + increase;

    if (index == '-1') {
        index = 2
        liEls[index].scrollIntoView({ behavior: 'smooth' });
    } else if (index == '3') {
        index = 0
        liEls[index].scrollIntoView({ behavior: 'smooth' });
    } else {
        let liEls = document.querySelectorAll('#carousel-item');
        liEls[index].scrollIntoView({ behavior: 'smooth' });
    }
}

function setSlide(number) {
    index = number

    let liEls = document.querySelectorAll('#carousel-item');
    liEls[index].scrollIntoView({ behavior: 'smooth' });
}

//ARRUMAR ESSE CAROUSEL PRA QUE ELE NÃO PARE DE MEXER QUANDO USE O SCROLL DO MOUSE
//FAZER OUTRO CAROUSEL MAS QUE ELE TROQUE EM FADE PRA VER QUAL FICA MELHOR