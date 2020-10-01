export class SliderCardList {
    constructor(container, createCard) {
        this.container = container;
        this.createCard = createCard;
    }
      addSliderCard(date, avatar_url, name, email, message) {
        const card = this.createCard(date, avatar_url, name, email, message)
        console.log(card)
       //const card = this.createCard(commit.committer.date, author.avatar_url, commit.committer.name, commit.committer.email, commit.message)
        this.container.appendChild(card.create());
    }
      render(cards) {
        cards.forEach(item => {
         this.addSliderCard(item.commit.committer.date, item.author.avatar_url, item.commit.committer.name, item.commit.committer.email, item.commit.message)
        // console.log(item.commit.committer.date, item.author.avatar_url, item.commit.committer.name, item.commit.committer.email, item.commit.message)
        })
    }  
}