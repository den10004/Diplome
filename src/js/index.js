
//const swiperContainer = document.querySelector('.swiper-container');
const buttonSearchNews = document.querySelector('.search__form-button');
const preloaderSearch = document.querySelector('.preloader__search');
const preloaderFound = document.querySelector('.preloader__found');
const preloaderResult = document.querySelector('.preloader__result');
const preloaderResultBlocs = document.querySelector('.preloader__result-blocs');
const input = document.querySelector('.search__form-input');
const form = document.forms.search;
const resultButton = document.querySelector('.preloader__result_button');
const preloader = document.querySelector('.preloader')
//const cardsDate = document.querySelector('preloader__cards-date')
let currentCards = NUMBER_CARDS;


import "../pages/index.css";
//import "./validation.js"
//import "./swiper.js";
//import "./slider.js";
//import "./clients.js";
import "./LocalStorage.js";
import "./modData.js";
//import "./analytics.js"

/*---------------------------------------------------------------------------------*/

//const apiUrlNews = 'https://newsapi.org/v2/everything?language=ru&sortBy=publishedAt&pageSize=100&qInTitle=россия&apiKey=10e8db0981ec4941becf1c27cd92454d'

function validat() {
  if (input.value === ""){
    input.setCustomValidity('Введите ключевое слово');
    buttonSearchNews.disabled = true;
    return false;
  } else {
    input.setCustomValidity('');
    buttonSearchNews.disabled = false;
    return true;
  }
};

///////////////////////////////////////////////////////////////////////////////////////////////


const resultsBlock = document.querySelector('.preloader__result-blocs');

const configNews = {
  // url: apiUrlNews,
  headers: {
    'Content-Type': 'application/json',
  }
};

function createNews(urlToImage, publishedAt, description, title, name, url) {
 return new NewsCard(urlToImage, publishedAt, description, title, name, url);
}



const localStorage1 = new LocalStorage()
const newsCardList = new NewsCardList(resultsBlock, createNews);
const apiNews = new ApiNews(configNews);
const newsCard = new NewsCard(input);


function getPreloader(isLoading) {//вкл прелоадера
  if (isLoading) {
    preloaderSearch.style.display = "flex";
    buttonSearchNews.disabled = true;
    input.innerHTML = 'Результат операции';
    
  } else {
    preloaderSearch.style.display = "none";
    buttonSearchNews.disabled = false;
    input.innerHTML = 'Результат операции';
  }
}

function renderError () { //Ничего не найдено
  preloaderFound.style.display = "flex";
  preloaderResultBlocs.style.display = "none";
}
 
buttonSearchNews.addEventListener('click', sendInput);//button


function numberPlus () {   //счётчик карточек
  currentCards = currentCards + NUMBER_CARDS;
  return currentCards;
}

resultButton.addEventListener('click', () => { // "показать ещё"
  numberPlus();
  
  console.log(currentCards);
  const local = localStorage1.load(CARDS);
  console.log(local)
  newsCardList.render(local.articles.slice(currentCards - NUMBER_CARDS, currentCards))
  /*if (currentCards >= local) {
    resultButton.style.display = "none";
  }*/
});
  

function searchInput(input) {
  return fetch(`https://newsapi.org/v2/everything?language=ru&sortBy=publishedAt&pageSize=100&qInTitle=${input}&apiKey=10e8db0981ec4941becf1c27cd92454d`)

}

/*------------input-----------*/


function sendInput(e) {//input
 


  preloader.style.display = "flex";
  e.preventDefault();
  newsCard.removeCards(); ///????///
  const localInput = input.value

  console.log(localInput)
  val()
  function val () {
    if (localInput === '') {
      buttonSearchNews.disabled = true;
    }
    else {
      buttonSearchNews.disabled = false;
    }
  }
   
  localStorage.setItem('input', localInput);
    getPreloader(true)
  searchInput(input.value)


    .then((res) => {
      if (res.ok) {
        return res.json();
      }
       return Promise.reject(res.status);
    })
    
    .then((res) => {
      if (res.articles.length === 0) {
        return renderError() 
      }
      else
       localStorage1.save(CARDS, res);
      console.log(res)
      newsCardList.render(res.articles.slice(0,NUMBER_CARDS));
      preloaderResultBlocs.style.display = "grid";
     /* if (currentCards >= local) {
        resultButton.style.display = "none";
      }*/
    })
    
    .catch(() => {
      renderError()   
    })

    .finally(() => {
    getPreloader(false);
    })
};

import { ApiNews } from "./apiNews.js";
import { NewsCardList } from "./newsCardList.js";
import { NewsCard } from "./newsCard.js";
import  LocalStorage  from "./LocalStorage.js";
import { CARDS, NUMBER_CARDS } from "./constants";
//import { modData } from "./modData";
//import {Api} from "./api";



