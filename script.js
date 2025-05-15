function toggleMenu() {
  const menu = document.querySelector('.nav-menu');
  menu.classList.toggle('active');
}
window.addEventListener('resize', () => {
  const menu = document.querySelector('.nav-menu');
  if (window.innerWidth > 768) {
    menu.classList.remove('active');
  }
});
const bannerImages = [
  "assets/banner1.jpg",
  "assets/banner2.jpg",
  "assets/banner3.jpg"
];

let currentBanner = 0;
const bannerImg = document.getElementById("banner-img");

// Cambio automático
let bannerInterval = setInterval(nextBanner, 4000);

// Función para avanzar
function nextBanner() {
  currentBanner = (currentBanner + 1) % bannerImages.length;
  bannerImg.src = bannerImages[currentBanner];
}

// Función para retroceder
function prevBanner() {
  currentBanner = (currentBanner - 1 + bannerImages.length) % bannerImages.length;
  bannerImg.src = bannerImages[currentBanner];
}

// Reiniciar temporizador si se hace clic en flechas
function resetInterval() {
  clearInterval(bannerInterval);
  bannerInterval = setInterval(nextBanner, 4000);
}

// Adjuntar al hacer clic en flechas
document.querySelector('.arrow.left').addEventListener('click', () => {
  prevBanner();
  resetInterval();
});

document.querySelector('.arrow.right').addEventListener('click', () => {
  nextBanner();
  resetInterval();
});
