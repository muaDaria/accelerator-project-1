import Swiper from './vendor/swiper.mjs';
import Mousewheel from './vendor/modules/mousewheel.min.mjs';
import Navigation from './vendor/modules/navigation.min.mjs';
import { Scrollbar } from 'swiper/modules';

const initSliderReviews = () => {
  const sliderElement = document.querySelector('.reviews__swiper');
  if (!sliderElement) {
    return;
  }

  new Swiper('.reviews__swiper', {
    modules: [Navigation, Mousewheel, Scrollbar],

    direction: 'horizontal',
    grabCursor: 'pointer',
    watchOverflow: true,
    centeredSides: true,

    slidesPerView: 1,
    spaceBetween: 40,

    navigation: {
      nextEl: '.reviews__button-next',
      prevEl: '.reviews__button-prev',
    },

    mousewheel: {
      forceToAxis: true,
    }
  });
};

initSliderReviews();
