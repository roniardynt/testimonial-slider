
//setup the images and testimonials
const tanyaItem = document.querySelector('.tanya-testimony');
const johnItem = document.querySelector('.john-testimony');
const tanyaFade = document.querySelector('.tanya-fade');
const johnFade = document.querySelector('.john-fade');
const bodyTag = document.querySelector('.content');

let pindah = false;

johnItem.style.display = 'none';

function quoteSlider() {
    if (!pindah) {
        johnFade.classList.add("fade");
        tanyaItem.style.display = 'none';
        johnItem.style.display = 'flex';
    } else {
        tanyaFade.classList.add("fade");
        johnItem.style.display = 'none';
        tanyaItem.style.display = 'flex';
    }
    pindah = !pindah;
}

bodyTag.addEventListener("wheel", quoteSlider);

const abcTag = document.querySelector('html');
abcTag.addEventListener("keydown", function() {
    let code = window.event.keyCode;
    if(code == 37 || code == 38 || code == 39 || code == 40){
        quoteSlider();
    }
});

setInterval(quoteSlider, 8000);
