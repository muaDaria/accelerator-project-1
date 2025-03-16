import { isEnterKey } from './util.js';

const scrollButton = document.querySelector('.hero__button');
const priceSection = document.querySelector('.price');

const scrollTo = () => priceSection.scrollIntoView({behavior: 'smooth'});

scrollButton.addEventListener('click', scrollTo);

scrollButton.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    scrollTo();
  }
});

export {scrollTo};