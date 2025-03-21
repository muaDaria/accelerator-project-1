const prices = document.querySelectorAll('.card__price');
const filterElement = document.querySelector('.filter');

const setOnfilterClick = (cb) => {
  filterElement.addEventListener('click', (evt) => {
    if (!evt.target.classList.contains('filter__button')) {
      return;
    }

    filterElement.querySelectorAll('.filter__button').forEach((button) => {
      button.classList.remove('filter__button--active');
    });
    evt.target.classList.add('filter__button--active');

    const currentFilter = evt.target.getAttribute('data-months');
    cb(currentFilter);
  });
};

const getPrices = (currentFilter) => {
  prices.forEach((priceElement) => {
    const newPrice = priceElement.getAttribute(`data-price-${currentFilter}`);
    priceElement.textContent = newPrice;
    const priceShadow = priceElement.nextElementSibling;
    priceShadow.textContent = newPrice;
  });
};

setOnfilterClick(getPrices);
