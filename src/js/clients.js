import "../pages/index.css";
import "./swiper.js";
import "./slider.js";
import {MONTH_ARRAY} from './constants.js';




const apiUrl = NODE_ENV === 'development' ? 'http://api.github.com/repos/den10004/Diplome/commits' : 'https://api.github.com/repos/den10004/Diplome/commits'

const config = {
    url: apiUrl,
    headers: {
        'Content-Type': 'application/json',
    }
};

const slider = document.querySelector('.swiper-container');
const swiperContainer1 = document.querySelector('.swiper-wrapper');
const mySwiper = new Swiper(slider);


  class SliderCard {
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

class SliderCardList {
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



function createCommits(name, email, date, message, avatar_url) {
    return new SliderCard(name, email, date, message, avatar_url);
}

const sliderCardList = new SliderCardList(swiperContainer1, createCommits);



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
    mySwiper.init(true)
})
.catch(err => {
    console.log(`Ошибка ${err} при добавлении карточки Github`)
})



//import SliderCard from './sliderCard.js';
//import SliderCardList from './sliderCardList.js';