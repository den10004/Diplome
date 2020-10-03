export class SliderCardList {
  constructor(container, createCard) {
      this.container = container;
      this.createCard = createCard;
    }
    addSliderCard(name, email, date, message, avatar_url) {
      const card = this.createCard(name, email, date, message, avatar_url)
     console.log(avatar_url)
      this.container.appendChild(card.create());
    }
    render(cards) {
      cards.forEach(item => {
    this.addSliderCard(item.commit.author.name, item.commit.author.email, item.commit.committer.date, item.commit.message, item.author.avatar_url)
      })
    }  
}
