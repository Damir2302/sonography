$(document).ready(function() {

    let bannerSlider = new Swiper(".banner__slider", {
        slidesPerView: 1,
        loop: true,

        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },

        navigation: {
          nextEl: '.banner-arrow-next',
          prevEl: '.banner-arrow-prev',
        }

    })

})