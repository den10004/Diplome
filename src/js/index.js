
//const swiperContainer = document.querySelector('.swiper-container');
const buttonSearchNews = document.querySelector('.search__form-button');
const preloaderSearch = document.querySelector('.preloader__search');
const preloaderFound = document.querySelector('.preloader__found');
const preloaderResult = document.querySelector('.preloader__result');
const preloaderResultBlocs = document.querySelector('.preloader__result_blocs');
const input = document.querySelector('.search__form-input');
const form = document.forms.search;





import "../pages/index.css";
import "./swiper.js";
import "./slider.js";
import "./clients.js";





/*---------------------------------------------------------------------------------*/

const apiUrlNews = 'https://newsapi.org/v2/everything?language=ru&sortBy=publishedAt&pageSize=100&qInTitle=россия&apiKey=10e8db0981ec4941becf1c27cd92454d'


const resultsBlock = document.querySelector('.preloader__result_blocs');

const configNews = {
  url: apiUrlNews,
  headers: {
    'Content-Type': 'application/json',
  }
};


function createNews(urlToImage, publishedAt, description, title, name) {
  return new NewsCard(urlToImage, publishedAt, description, title, name);
}



const newsCardList = new NewsCardList(resultsBlock, createNews);
const apiNews = new ApiNews(configNews);
//const api = new Api(config);
const newsCard = new NewsCard(input);

/*
apiNews.addServerNews().then(res => {
  newsCardList.render(res)
})
  .catch(err => {
    console.log(`Ошибка ${err} при добавлении карточки News`)
  })
*/

  function getPreloader(isLoading) {//вкл прелоадера
    if (isLoading) {
      preloaderSearch.style.display = "flex";
      preloaderResult.style.display = "none";
    } else {
      preloaderSearch.style.display = "none";
      preloaderResult.style.display = "flex";
    }
  }

/*
function getPrepoader() {  //вкл прелоадера
  preloaderSearch.style.display = "flex";
  preloaderResult.style.display = "none"
}
*/
buttonSearchNews.addEventListener('click', sendInput);//прелоадер

function searchInput (input) {
  return fetch(`https://newsapi.org/v2/everything?language=ru&sortBy=publishedAt&pageSize=100&qInTitle=${input}&apiKey=10e8db0981ec4941becf1c27cd92454d`)
  
}


/*------------input-----------*/

function sendInput(e) {//input
  const input = document.querySelector('.search__form-input')
  console.log(input.value)
 //getPreloader(true)
  //event.preventDefault();
  searchInput(input.value)
    .then((res) => {
     if (res.ok) {
       return res.json();
     }    
    return Promise.reject(res.status);
    })

    .then((res) => {
      newsCardList.render(res);
    })
    .catch((err) => {
      renderError(`Ошибка: ${err}`);
    })
   /* .finally(() => {
      renderLoading(false);
    });*/




};



//buttonSearchNews.addEventListener('click', sendInput)


import {ApiNews} from "./apiNews.js";
import {NewsCardList} from "./newsCardList.js";
import {NewsCard} from "./newsCard.js";
//import {Api} from "./api";

