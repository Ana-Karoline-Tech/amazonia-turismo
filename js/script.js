var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

//   var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 1, // Número de slides visíveis ao mesmo tempo
//     spaceBetween: 30, // Espaço entre os slides
//     loop: true, // Permite o loop contínuo dos slides
//     pagination: {
//       el: ".swiper-pagination", // Elemento para a paginação
//       clickable: true, // Permite clicar nos pontos de paginação para navegar
//     },
//     navigation: {
//       nextEl: ".swiper-button-next", // Elemento para o botão de próximo
//       prevEl: ".swiper-button-prev", // Elemento para o botão de anterior
//     },
//     autoplay: {
//         delay: 2500, // Intervalo de tempo entre os slides (em milissegundos)
//         disableOnInteraction: false, // Continua o autoplay mesmo após interação do usuário
//       },
// });
