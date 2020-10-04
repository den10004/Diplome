import {NUMBER_CARDS} from './index.js';

export class NewsCardList {
    constructor(container, createCard) {
      this.container = container;
      this.createCard = createCard;
      this.firstCard = 0;
      this.numberCards = NUMBER_CARDS;
    }

    addNewsCard(urlToImage, publishedAt, description, title, name, url) {
      const card = this.createCard(urlToImage, publishedAt, description, title, name, url)
      this.container.appendChild(card.create());
    }
  
   
    render(articles) {
      articles.forEach(item => {
      this.addNewsCard(item.urlToImage, item.publishedAt, item.description, item.title, item.source.name, item.url)
      })
    }    
  
  
}

