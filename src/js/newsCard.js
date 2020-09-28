import {MONTH_ARRAY} from './constants.js';

export class NewsCard {
    constructor(urlToImage, publishedAt, description, title, name, url) {
      this.urlToImage = urlToImage;
      this.publishedAt = publishedAt;
      this.description = description;
      this.title = title;
      this.name = name;
      this.url = url
    }

    create() {
      const list = `<div class="preloader__cards">
        <div class="preloader__cards-image" style="background-image: url(https://kamchatka.jpg) alt="cards"></div>
        <div class="preloader__cards-content">
          <div class="preloader__cards-date"></div>
          <a class="preloader__cards-content-header" href="${this.url}"></a>
          <div class="preloader__cards-content-text"></div>
          <div class="preloader__cards-origin"></div>
          </div>
      </div>`;
  
      const template = document.createElement("div");
      template.insertAdjacentHTML('afterbegin', list);
      const newCard = template.firstElementChild;
      newCard.querySelector(".preloader__cards-image").style.backgroundImage = `url(${this.urlToImage})`;
      newCard.querySelector(".preloader__cards-date").textContent = this.publishedAt;
      newCard.querySelector(".preloader__cards-content-header").textContent = this.description;
      newCard.querySelector(".preloader__cards-content-text").textContent = this.title;
      newCard.querySelector(".preloader__cards-origin").textContent = this.name;
      this.newCard = newCard;

      const cardsDate = newCard.querySelector(".preloader__cards-date");
      cardsDate.textContent = this.publishedAt;
      console.log(cardsDate.textContent = this.publishedAt)
      let data = new Date(this.publishedAt)
      cardsDate.textContent = data.getDate() + ' ' + MONTH_ARRAY[data.getMonth()] + ', ' + data.getFullYear()
      
      return newCard;  
    }

    removeCards() {
      document.querySelector('.preloader__result-blocs').innerHTML = '';
      document.querySelector('.preloader__found').style.display = "none";
    }
 
  }

