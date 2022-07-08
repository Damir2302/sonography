$(document).ready(function() {

    let bannerSlider = new Swiper(".banner__slider", {
        slidesPerView: 1,
        loop: true,

        pagination: {
          el: '.banner__slider .swiper-pagination',
          type: 'bullets',
        },

        navigation: {
          nextEl: '.banner-arrow-next',
          prevEl: '.banner-arrow-prev',
        }

    })

    let bottomSlider = new Swiper(".bottom__swiper", {
      slidesPerView: 'auto',
      loop: true,

      pagination: {
        el: '.bottom__swiper .swiper-pagination',
        type: 'bullets',
      },

  })

})