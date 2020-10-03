import {MONTH_ARRAY} from './constants.js';


export class SliderCard {
  constructor(name, email, date, message, avatar_url) {
      this._name = name;
      this._email = email;
      this._date = date;
      this._message = message;
      this._avatar_url = avatar_url;
  }

  create() {
      const list = 
      `<div class="swiper-slide card">
      <div class="card-data"></div>
      <div class="card-photo" style="background-image: url(https://avatars0.githubusercontent.com/u/67386666?v=4) alt="github-photo"></div>
      <div class="main-name"></div>
      <div class="main-email"></div>         
      <div class="content-text"></div>`;

      const template = document.createElement("div");
      template.insertAdjacentHTML('afterbegin', list);
      const newCard = template.firstElementChild;
      newCard.querySelector(".card-data").textContent = this._date;
      newCard.querySelector(".card-photo").style.backgroundImage = `url(${this._avatar_url})`;
      newCard.querySelector(".main-name").textContent = this._name;
      newCard.querySelector(".main-email").textContent = this._email;
      newCard.querySelector(".content-text").textContent = this._message;
      this.newCard = newCard;
      
      const cardsDate = newCard.querySelector(".card-data");
      cardsDate.textContent = this._date;
      const dataRender = new Date(this._date);
      cardsDate.textContent = dataRender.getDate() + ' ' + MONTH_ARRAY[dataRender.getMonth()] + ', ' + dataRender.getFullYear();
      return newCard;  
    }
}