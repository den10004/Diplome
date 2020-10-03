
export class NewsCard {
    constructor(urlToImage, publishedAt, description, title, name, url) {
      this._urlToImage = urlToImage;
      this._publishedAt = publishedAt;
      this._description = description;
      this._title = title;
      this._name = name;
      this._url = url
    }

    create() {
      const list = `<div class="preloader__cards">
        <div class="preloader__cards-image" style="background-image: url(https://kamchatka.jpg) alt="cards"></div>
        <div class="preloader__cards-content">
          <div class="preloader__cards-date"></div>
          <a class="preloader__cards-content-header" href="${this._url}"></a>
          <div class="preloader__cards-content-text"></div>
          <div class="preloader__cards-origin"></div>
          </div>
      </div>`;
  
      const template = document.createElement("div");
      template.insertAdjacentHTML('afterbegin', list);
      const newCard = template.firstElementChild;
      newCard.querySelector(".preloader__cards-image").style.backgroundImage = `url(${this._urlToImage})`;
      newCard.querySelector(".preloader__cards-date").textContent = this._publishedAt;
      newCard.querySelector(".preloader__cards-content-header").textContent = this._description;
      newCard.querySelector(".preloader__cards-content-text").textContent = this._title;
      newCard.querySelector(".preloader__cards-origin").textContent = this._name;
      this.newCard = newCard;

      

      const cardsDate = newCard.querySelector(".preloader__cards-date");
      const dataRender = new Date(this._publishedAt)
      cardsDate.textContent = dataRender.getDate() + ' ' + MONTH_ARRAY[dataRender.getMonth()] + ', ' + dataRender.getFullYear()
      return newCard;  
    }

    removeCards() {
      document.querySelector('.preloader__result-blocs').innerHTML = '';
      document.querySelector('.preloader__found').style.display = "none";
    }
 
  }

  import {MONTH_ARRAY} from './constants.js';

  