const btnMobile = document.getElementById('btn-mobile');
function toggleMenu(event){
    if(event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if(active){
        event.currentTarget.setAttribute('arial-label', 'Fechar Menu');
    }else{
        event.currentTarget.setAttribute('arial-label', 'Abrir Menu');
    }
}
btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

/*Comportamento das imagens*/
let currentImageIndex = 0;
const images = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

// Abre o lightbox e exibe a imagem clicada
function openLightbox(index) {
    currentImageIndex = index;
    lightbox.style.display = 'flex';
    lightboxImg.src = images[currentImageIndex].src;
}

// Fecha o lightbox
function closeLightbox() {
    lightbox.style.display = 'none';
}

// Muda para a próxima ou anterior imagem
function changeImage(direction, event) {
    if (event) event.preventDefault();  // Impede o comportamento padrão do link

    currentImageIndex += direction;

    // Volta ao início se chegar ao fim e vice-versa
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }

    // Atualiza a imagem no lightbox
    lightboxImg.src = images[currentImageIndex].src;
}

// Fecha o lightbox se clicar fora da imagem
lightbox.addEventListener('click', function(event) {
    if (event.target === lightbox) {
        closeLightbox();
    }
});
