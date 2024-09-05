var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // saat layar >= 640px
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // saat layar >= 768px
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      // saat layar >= 1024px
      1024: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });
  