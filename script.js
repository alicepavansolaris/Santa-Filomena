let slideIndex = 0;
const totalSlides = 7;  // Número total de imagens

// Função para gerar as imagens dinamicamente
function generateSlides() {
    const slideContainer = document.querySelector('.slideshow-container');
    for (let i = 1; i <= totalSlides; i++) {
        const img = document.createElement('img');
        img.classList.add('slide');
        // Tentativa de carregar tanto .jpg quanto .jpeg
        img.src = `filo${i}.jpg`;  // Primeiro tenta .jpg
        img.onerror = function() {
            img.src = `filo${i}.jpeg`;  // Se falhar, tenta .jpeg
        };
        img.alt = `Imagem ${i}`;
        slideContainer.appendChild(img);
    }
    showSlides(slideIndex);  // Exibe a primeira imagem
}

// Função para exibir as imagens no slideshow
function showSlides(n) {
    const slides = document.querySelectorAll('.slide');
    if (n >= slides.length) {
        slideIndex = 0;  // Volta para a primeira imagem
    } else if (n < 0) {
        slideIndex = slides.length - 1;  // Vai para a última imagem
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';  // Esconde todas as imagens
    }
    slides[slideIndex].style.display = 'block';  // Mostra a imagem atual
}

// Função para mudar de imagem
function changeSlide(n) {
    showSlides(slideIndex += n);
}

// Função para atualizar o ano automaticamente no footer
function updateYear() {
    const yearSpan = document.getElementById('current-year');
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;  // Atualiza o ano
}

// Chama a função para gerar as imagens quando a página carregar
window.onload = function() {
    generateSlides();
    updateYear();  // Atualiza o ano no footer
};
