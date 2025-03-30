
const dataInicio = new Date("2024-05-26T00:00:00");


function atualizarTemporizador() {
    const agora = new Date();
    const diff = agora - dataInicio; 

    const anos = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const dias = Math.floor(diff / (1000 * 60 * 60 * 24)) % 365;
    const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diff / (1000 * 60)) % 60);
    const segundos = Math.floor((diff / 1000) % 60);

    
    document.getElementById("timer").innerHTML = 
        `${anos} anos, ${dias} dias, ${horas}h ${minutos}m ${segundos}s`;
}


setInterval(atualizarTemporizador, 1000);
atualizarTemporizador();

const imagens = document.querySelectorAll(".clickable");
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const closeBtn = document.querySelector(".close");

imagens.forEach(img => {
    img.addEventListener("click", function() {
        popup.style.display = "flex"; 
        popupImg.src = this.src; 
    });
});


closeBtn.addEventListener("click", function() {
    popup.style.display = "none";
});


popup.addEventListener("click", function(event) {
    if (event.target === popup) {
        popup.style.display = "none";
    }
});

