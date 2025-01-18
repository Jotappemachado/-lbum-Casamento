let currentIndex = 0;
const carousel = document.getElementById('carousel');

// Função para adicionar as imagens automaticamente
function loadImages() {
    for (let i = 1; i <= 224; i++) {
        const img = document.createElement('img');
        img.src = `imgs/img${i}.jpg`; // Caminho correto das suas imagens na pasta imgs
        img.alt = `Imagem ${i}`;
        img.onerror = () => console.error(`Erro ao carregar a imagem: imgs/img${i}.jpg`);
        carousel.appendChild(img);
    }
}

// Função para mostrar a próxima imagem
function showNextImage() {
    currentIndex++;
    const totalImages = carousel.children.length;
    if (currentIndex >= totalImages) {
        currentIndex = 0;
    }
    const offset = -currentIndex * 100; // Movimenta a largura de uma imagem por vez
    carousel.style.transform = `translateX(${offset}%)`;
}

loadImages(); // Carrega as 224 imagens
setInterval(showNextImage, 2300); // Troca a imagem a cada 2 segundos



//Música

const musica = document.getElementById('musica');
musica.volume = 0.2;
const botaoMusica = document.getElementById('toggle-musica');

botaoMusica.addEventListener('click', () => {
    if (musica.paused) {
        musica.play();
        botaoMusica.textContent = '🔊 Pausar Música';
    } else {
        musica.pause();
        botaoMusica.textContent = '🔈 Tocar Música';
    }
});

const sliderVolume = document.getElementById('volume');

sliderVolume.addEventListener('input', () => {
    musica.volume = sliderVolume.value;
});

window.addEventListener('click', () => {
    if (musica.paused) {
        musica.play();
    }
});