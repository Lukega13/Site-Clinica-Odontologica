
window.addEventListener("scroll", function () {
    var header = document.getElementById("header");
    header.classList.toggle("fixed-header", window.scrollY > 0);
})


//Carousel
window.onload = mainTimer()
var intervalo = setInterval(mainTimer, 30000)

function mainTimer() {
    setTimeout(timer, 0)
    setTimeout(timer2, 10000)
    setTimeout(timer3, 20000)
}

function timer() {
    showSlide(1)
}
function timer2() {
    showSlide(2)
}
function timer3() {
    showSlide(3)
}


function showSlide(number) {
    var carousel1 = document.getElementById('carousel-image-1')
    var carousel2 = document.getElementById('carousel-image-2')
    var carousel3 = document.getElementById('carousel-image-3')


    if (number == 1) {
        document.getElementById('carousel-button-1').classList.add('slide-button-active')
        document.getElementById('carousel-button-2').classList.remove('slide-button-active')
        document.getElementById('carousel-button-3').classList.remove('slide-button-active')

        carousel1.style.opacity = '1'
        carousel2.style.opacity = '0'
        carousel3.style.opacity = '0'

        carousel1.style.transition = '3s'
        carousel2.style.transition = '3s'
        carousel3.style.transition = '3s'

    } else if (number == 2) {
        document.getElementById('carousel-button-1').classList.remove('slide-button-active')
        document.getElementById('carousel-button-2').classList.add('slide-button-active')
        document.getElementById('carousel-button-3').classList.remove('slide-button-active')

        carousel1.style.opacity = '0'
        carousel2.style.opacity = '1'
        carousel3.style.opacity = '0'

        carousel1.style.transition = '3s'
        carousel2.style.transition = '3s'
        carousel3.style.transition = '3s'

    } else if (number == 3) {
        document.getElementById('carousel-button-1').classList.remove('slide-button-active')
        document.getElementById('carousel-button-2').classList.remove('slide-button-active')
        document.getElementById('carousel-button-3').classList.add('slide-button-active')

        carousel1.style.opacity = '0'
        carousel2.style.opacity = '0'
        carousel3.style.opacity = '1'

        carousel1.style.transition = '3s'
        carousel2.style.transition = '3s'
        carousel3.style.transition = '3s'
    }

}

//REINICIAR ESSE TIMER QUANDO ELE CLICA EM UM BOTAO
