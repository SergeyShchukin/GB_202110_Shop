window.onload = () => {
	const menu = document.getElementById('menu');
	const brand = document.getElementById('brand');
	const search = document.getElementById('search-form');

	const showMenu = () => {
		menu.style.display = 'block';
		brand.classList.add('opacity-container');
	};

	const closeMenu = () => {
		menu.style.display = 'none';
		brand.classList.remove('opacity-container');
	};

	const clickMenu = () => {
		menu.style.display === 'block' ? closeMenu() : showMenu();
	};

	const showSearch = () => {
		console.log('ss');
		search.style.display = search.style.display === 'block' ? 'none' : 'block';
	};

	const searchButton = document.getElementById('search-btn');
	const burgerButton = document.getElementById('burger-btn');
	const closeButton = document.getElementById('close-menu-btn');

	searchButton.addEventListener('click', showSearch);
	burgerButton.addEventListener('click', clickMenu);
	closeButton.addEventListener('click', closeMenu);

	const basketCnt = document.getElementById('basket__count');
	let basketCount = 0;

	const sendToBasket = () => {
		basketCount = basketCount + 1;
		basketCnt.innerText = basketCount;
	};

	[...Array(6).keys()].forEach((productId) => document.getElementById(`product-${productId + 1}-btn`).addEventListener('click', sendToBasket));
};
