import {MONTH_ARRAY} from './constants.js';


export default function modData (publishedAt) {
//const MONTH_ARRAY = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
const cardsDate = newCard.querySelector(".preloader__cards-date");
cardsDate.textContent = publishedAt;
console.log(cardsDate.textContent = publishedAt)
let data = new Date(this.publishedAt)
cardsDate.textContent = data.getDate() + ' ' + MONTH_ARRAY[data.getMonth()] + ', ' + data.getFullYear()
return cardsDate;
}

    


