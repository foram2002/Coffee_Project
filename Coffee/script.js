
let navLinks = document.querySelectorAll(".nav-menu .nav-link");
let menuOpenButton = document.querySelector("#menu-open-button");
let menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () => menuOpenButton.click());

navLinks.forEach(link => {
  link.addEventListener("click", () => menuOpenButton.click());
});

document.addEventListener('DOMContentLoaded', () => {
    console.log('Swiper loaded');
  
    const swiper = new Swiper('.swiper', {
      loop: true,
      grabCursor: true,
      spaceBetween: 25,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        0: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 3
        }
      }
    });
  });
  

  