export class NewsCardList {
    constructor(container, createCard) {
      this.container = container;
      this.createCard = createCard;
      this.numberCards = 3;
      this.firstCard = 0;
    }
  

  

    addNewsCard(urlToImage, publishedAt, description, title, name) {
      const card = this.createCard(urlToImage, publishedAt, description, title, name)
      this.container.appendChild(card.create());
    }
  
   
    render(cards) {
      console.log(cards.articles.slice(0))
       cards.articles.slice(this.firstCard, this.numberCards).forEach(item => {
        this.addNewsCard(item.urlToImage, item.publishedAt, item.description, item.title, item.name)
      })
    }    

}

