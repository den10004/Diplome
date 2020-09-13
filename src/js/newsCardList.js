export class NewsCardList {
    constructor(container, createCard) {
      this.container = container;
      this.createCard = createCard;
    }
    addNewsCard(urlToImage, publishedAt, description, title, name) {
      const card = this.createCard(urlToImage, publishedAt, description, title, name)
      this.container.appendChild(card.create());
    }
    render(cards) {
      cards.articles.forEach(item => {
        this.addNewsCard(item.urlToImage, item.publishedAt, item.description, item.title, item.name)
       console.log(cards)
  
      localStorage.setItem('cards', JSON.stringify(cards));
      })
    }
  }
  
 