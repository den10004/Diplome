



export class SliderCard {
  constructor(name, email, date, message, avatar_url) {
      this.name = name;
      this.email = email;
      this.date = date;
      this.message = message;
      this.avatar_url = avatar_url;
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
      newCard.querySelector(".card-data").textContent = this.date;
      newCard.querySelector(".card-photo").style.backgroundImage = `url(${this.avatar_url})`;
      newCard.querySelector(".main-name").textContent = this.name;
      newCard.querySelector(".main-email").textContent = this.email;
      newCard.querySelector(".content-text").textContent = this.message;
      this.newCard = newCard;
      
      const cardsDate = newCard.querySelector(".card-data");
      cardsDate.textContent = this.date;
       let data = new Date(this.date);
      cardsDate.textContent = data.getDate() + ' ' + MONTH_ARRAY[data.getMonth()] + ', ' + data.getFullYear();
      return newCard;  
    }
}