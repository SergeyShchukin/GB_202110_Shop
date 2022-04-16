const menu = document.getElementById('menu');
const brand = document.getElementById('brand');
const search = document.getElementById('search-form');

const showMenu = () => {
	menu.classList.add('nav-menu--open');
	brand?.classList.add('opacity-container');
};

const closeMenu = () => {
	menu.classList.remove('nav-menu--open');
	brand?.classList.remove('opacity-container');
};

const clickMenu = () => {
	menu.classList.toggle('nav-menu--open');
	brand?.classList.toggle('opacity-container');
};

const showSearch = () => {
	search.classList.toggle('header__search-form--open');
};

const searchButton = document.getElementById('search-btn');
const burgerButton = document.getElementById('burger-btn');
const closeButton = document.getElementById('close-menu-btn');

searchButton.addEventListener('click', showSearch);
burgerButton.addEventListener('click', clickMenu);
closeButton.addEventListener('click', closeMenu);

const basketCnt = document.getElementById('basket-count');
let basketCount = 0;

const sendToBasket = () => {
	basketCount = basketCount + 1;
	basketCnt.innerText = basketCount;
};

[...Array(13).keys()].forEach((productId) => document.getElementById(`product-${productId + 1}-btn`)?.addEventListener('click', sendToBasket));

const filterAccordionControl = document.getElementById('filter-accordion');
const filterAccordionDrpdwn = document.getElementById('filter-accordion-drpdwn');
const filterAccordionActivate = () => {
	filterAccordionControl.classList.toggle('accordion-drpdwn__control--active');
	filterAccordionDrpdwn.classList.toggle('accordion-drpdwn__type-list--show');
};
filterAccordionControl.addEventListener('click', filterAccordionActivate);
