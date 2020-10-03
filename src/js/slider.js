const slider = document.querySelector('.swiper-container');

const mySwiper = new Swiper(slider, {
   // init: false, //удалить
	slidesPerView: 3,
	spaceBetween: 10,
	centeredSlides: true,
	observer: true,
   observeParents: true,
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})


