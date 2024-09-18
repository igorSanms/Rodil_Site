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


let count = 1;
document.getElementById("radio1").checked = true;
setInterval( function(){
    nextImage();
}, 5000)
function nextImage(){
    count++;
    if(count > 4){
        count = 1;
    }
    document.getElementById("radio"+count).checked = true;
}

// Seleciona todos os containers de imagem para adicionar o comportamento de play/pause
document.querySelectorAll('.image-container').forEach(container => {
    const audioElement = container.parentElement.querySelector('audio'); // Seleciona o elemento <audio> correspondente dentro do card
    const playIcon = container.querySelector('.play-icon'); // Seleciona o ícone de play/pause no container de imagem

    container.addEventListener('click', () => {
        // Se o áudio está pausado, toca o áudio e muda o ícone para pause
        if (audioElement.paused) {
            pauseAllAudios(); // Pausa todos os outros áudios
            audioElement.play();
            playIcon.classList.remove('fa-play');
            playIcon.classList.add('fa-pause');
        } else {
            // Se o áudio está tocando, pausa o áudio e muda o ícone para play
            audioElement.pause();
            playIcon.classList.remove('fa-pause');
            playIcon.classList.add('fa-play');
        }

        // Quando o áudio terminar, reseta o ícone para "play"
        audioElement.addEventListener('ended', function () {
            playIcon.classList.remove('fa-pause');
            playIcon.classList.add('fa-play');
        });
    });
});

// Função para pausar todos os áudios quando um novo for clicado
function pauseAllAudios() {
    document.querySelectorAll('audio').forEach(audio => {
        audio.pause();
        audio.currentTime = 0; // Reinicia o áudio
    });
    // Reseta todos os ícones para "play"
    document.querySelectorAll('.play-icon').forEach(icon => {
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
    });
}

// Função para alternar a visibilidade do pop-up
function togglePopup() {
    const popup = document.getElementById('audio-popup');
    popup.style.display = (popup.style.display === 'block') ? 'none' : 'block';
}

// Função para tocar todos os áudios ao mesmo tempo
function playAllAudios() {
    document.querySelectorAll('audio').forEach(audio => {
        audio.play();
    });
}
