export class SliderCard {
    constructor(name, email, date, message, avatar_url) {
        this.name = name;
        this.email = email;
        this.date = date;
        this.message = message;
        this.avatar_url = avatar_url
    }
  
    create() {
        const list = `<div class="content">
            <div class="content-data"></div>
            <div class="content-main">
              <img class="content-main-photo" src="" alt="github-photo">
              <div class="main-text">
                <a class="main-text-name">
                <div class="main-text-email"></div>
              </div>
            </div>
            <div class="content-main-text"></div>             
          </div>
          </div>`;
  
        const template = document.createElement("div");
        template.insertAdjacentHTML('afterbegin', list);
        const newCard = template.firstElementChild;
        newCard.querySelector(".content-data").textContent = this.date;
        newCard.querySelector(".content-main-photo").style.backgroundImage = `url(${ this.avatar_url})`;
        newCard.querySelector(".main-text-name").textContent = this.name
        newCard.querySelector(".main-text-email").textContent = this.email;
        newCard.querySelector(".content-main-text").textContent = this.message;
        this.newCard = newCard;
        return newCard;
       
    }
  }