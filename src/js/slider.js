const slider = document.querySelector('.swiper-container');

let mySwiper = new Swiper(slider, {
   // init: false, //удалить
   observer: true,
   observeParents: true,
	slidesPerView: 3,
	spaceBetween: 10,
	centeredSlides: true,
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

