import Swiper from './vendor/swiper.mjs';
import Mousewheel from './vendor/modules/mousewheel.min.mjs';
import Navigation from './vendor/modules/navigation.min.mjs';

const initSliderJuri = () => {
  const sliderElement = document.querySelector('.juri__swiper');
  if (!sliderElement) {
    return;
  }

  new Swiper('.juri__swiper', {
    modules: [Navigation, Mousewheel],

    direction: 'horizontal',
    loop: true,
    grabCursor: 'pointer',
    watchOverflow: true,
    centeredSides: false,

    navigation: {
      nextEl: '.juri__button-next',
      prevEl: '.juri__button-prev',
    },

    mousewheel: {
      forceToAxis: true,
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        initialSlide: 0,
        simulateTouch: true,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
        simulateTouch: false,
      },
      1366: {
        slidesPerView: 4,
        spaceBetween: 40,
        simulateTouch: false,
      }
    }
  });
};

initSliderJuri();
