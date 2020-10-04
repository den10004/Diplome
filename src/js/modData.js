import {MONTH_ARRAY} from './constants.js';


export default function modData (publishedAt) {
const cardsDate = newCard.querySelector(".preloader__cards-date");
cardsDate.textContent = publishedAt;
const data = new Date(this.publishedAt)
cardsDate.textContent = data.getDate() + ' ' + MONTH_ARRAY[data.getMonth()] + ', ' + data.getFullYear()
return cardsDate;
}

    

