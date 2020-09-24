import "../pages/index.css";
import "./swiper.js";
import "./slider.js";

const apiUrl = NODE_ENV === 'development' ? 'http://api.github.com/repos/den10004/Diplome/commits' : 'https://api.github.com/repos/den10004/Diplome/commits'

const config = {
    url: apiUrl,
    headers: {
        'Content-Type': 'application/json',
    }
};

const swiperContainer = document.querySelector('.swiper-slide card');

class SliderCard {
  constructor(name, email, date, message, avatar_url) {
      this.name = name;
      this.email = email;
      this.date = date;
      this.message = message;
      this.avatar_url = avatar_url;
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
class SliderCardList {
  constructor(container, createCard) {
      this.container = container;
      this.createCard = createCard;
    }
    addSliderCard(date, avatar_url, name, email, message) {
      const card = this.createCard(date, avatar_url, name, email, message)
     // const card = this.createCard(commit.committer.date, author.avatar_url, commit.committer.name, commit.committer.email, commit.message)
      this.container.appendChild(card.create());
    }
    render(cards) {
      cards.forEach(item => {
        this.addSliderCard(item.date, item.avatar_url, item.name, item.email, item.message)
        //this.addSliderCard(commit.committer.date, author.avatar_url, commit.committer.name, commit.committer.email, commit.message)
      })
    }  
}



function createCommits(data, photo, name, email, text) {
    return new SliderCard(data, photo, name, email, text);
}

const sliderCardList = new SliderCardList(swiperContainer, createCommits);



class Api {
    constructor(config) {
        this.url = config.url;
        this.config = config;
        this.link = config.link;
       }
    
    addServerCommits = () => {
    return fetch(`${this.url}`, {
    })

      .then(res => {
        if (res.ok) {
          return res.json();
        
        }
        return Promise.reject("Произошла ошибка");
      });
    }

}



const api = new Api(config);

api.addServerCommits().then(res => {
    sliderCardList.render(res)
    //mySwiper.init(true)
})
.catch(err => {
    console.log(`Ошибка ${err} при добавлении карточки Github`)
})

