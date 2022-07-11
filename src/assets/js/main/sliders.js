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

    /////////////////////////////////////////////////////////////////////
    // КАРТОЧКА ТОВАРА
    ////////////////////////////////////////////////////////////////////
    let item_cart_pagination;

    item_cart_pagination = new Swiper('.swiper-item-pagination', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        watchSlidesProgress: true,
        direction: 'horizontal',

        breakpoints: {
            768: {
                direction: 'vertical'
            }
        },

        navigation: {
          nextEl: '.item-arrow-next',
          prevEl: '.item-arrow-prev',
        }
    });

    let item_cart;

    item_cart = new Swiper('.swiper-item', {
        slidesPerView: "auto",
        centeredSlides: true,
        slidesPerView: 1,
        spaceBetween: 30,
        thumbs: {
          swiper: item_cart_pagination,
        },
    });

})