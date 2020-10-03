const api = new ApiSlider(configGithub);
const mySwiper = new Swiper(slider);
const sliderCardList = new SliderCardList(swiperContainer, createCommits);


function createCommits(name, email, date, message, avatar_url) {
    return new SliderCard(name, email, date, message, avatar_url);
}

api.addServerCommits().then(res => {
    sliderCardList.render(res)
    mySwiper.init(true)
})
.catch(err => {
    console.log(`Ошибка ${err} при добавлении карточки Github`)
})

import "../pages/index.css";
import "./swiper.js";
import "./slider.js";
import {slider, swiperContainer, apiGithub, configGithub} from "./constants.js"
import {ApiSlider} from "./api.js"
import {SliderCard} from './sliderCard.js';
import {SliderCardList} from './sliderCardList.js';

