let currentCards = NUMBER_CARDS;


function createNews(urlToImage, publishedAt, description, title, name, url) {
 return new NewsCard(urlToImage, publishedAt, description, title, name, url);
}



const localStorageСlass = new LocalStorage()
const newsCardList = new NewsCardList(resultsBlock, createNews);
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
  resultButton.style.display = "none";
  serverError.style.display = 'none';
  preloaderFoundNothing.style.display = "flex";
  preloaderFoundSorry.style.display = "flex";
  
}
 


function numberPlus () {   //счётчик карточек
  currentCards = currentCards + NUMBER_CARDS;
  return currentCards;
}
function numberMinus () {   //сброс счётчика карточек
  currentCards = currentCards * 0;
  return currentCards;
}

resultButton.addEventListener('click', () => { // "показать ещё"
  numberPlus();
  
  const local = localStorageСlass.load(CARDS);
  console.log(currentCards)
  console.log(local.articles.length)

  newsCardList.render(local.articles.slice(currentCards - NUMBER_CARDS, currentCards))
  if (currentCards >= local.articles.length) {
    resultButton.style.display = "none";
  }
});
  

function searchInput(input) {
 // return fetch(`https://newsapi.org/v2/everything?language=ru&sortBy=publishedAt&pageSize=100&qInTitle=${input}&apiKey=10e8db0981ec4941becf1c27cd92454d`)
 return fetch(`https://nomoreparties.co/news/v2/everything?language=ru&sortBy=publishedAt&pageSize=100&qInTitle=${input}&apiKey=10e8db0981ec4941becf1c27cd92454d`)
}

/*------------input-----------*/
function validationForm () {  //валидация формы
  if (input.validity.valueMissing) {
   buttonSearchNews.setAttribute('disabled');
  input.setCustomValidity('ключевое слово');
    return false;
  }
  else {
    buttonSearchNews.removeAttribute('disabled'); 
    input.setCustomValidity('');
    return true;
  }
}
 

function sendInput(e) {//input
  validationForm()
  localStorage.clear();
  numberMinus()
   resultButton.style.display = "flex";
  preloader.style.display = "flex";
  e.preventDefault();
  newsCard.removeCards(); ///????///
  const localInput = input.value
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
      localStorageСlass.save(CARDS, res);
       newsCardList.render(res.articles.slice(0,NUMBER_CARDS));
      preloaderResultBlocs.style.display = "grid";

    })
    
    .catch(() => {
      preloaderFound.style.display = "flex";
      preloaderResultBlocs.style.display = "none";
      resultButton.style.display = "none";
      serverError.style.display = 'block';
      preloaderFoundNothing.style.display = "none";
      preloaderFoundSorry.style.display = "none";
    })

    .finally(() => {
    getPreloader(false);
    })
};


buttonSearchNews.addEventListener('click', sendInput);//button
input.addEventListener('input', validationForm);//input


import { NewsCardList } from "./newsCardList.js";
import { NewsCard } from "./newsCard.js";
import  LocalStorage  from "./LocalStorage.js";
import { CARDS, NUMBER_CARDS, input, resultsBlock, buttonSearchNews, preloaderSearch, preloaderFound, preloaderResultBlocs, resultButton, preloader, serverError, preloaderFoundNothing, preloaderFoundSorry} from "./constants";
import "../pages/index.css";
import "./LocalStorage.js";
import "./modData.js";






