export const NUMBER_CARDS = 3; 
export const CARDS = 'cards';
export const MONTH_ARRAY = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

//index.js
export const buttonSearchNews = document.querySelector('.search__form-button');
export const preloaderSearch = document.querySelector('.preloader__search');
export const preloaderFound = document.querySelector('.preloader__found');
export const preloaderResultBlocs = document.querySelector('.preloader__result-blocs');
export const input = document.querySelector('.search__form-input');
export const resultButton = document.querySelector('.preloader__result_button');
export const preloader = document.querySelector('.preloader')
export let currentCards = NUMBER_CARDS;
export const serverError = document.querySelector('.server__error')
export const sorry = document.querySelector('.preloader__found-sorry')
export const errorMessage = document.querySelector('.error-message')
export const resultsBlock = document.querySelector('.preloader__result-blocs')
export const preloaderFoundNothing = document.querySelector('.preloader__found-nothing')
export const preloaderFoundSorry = document.querySelector('.preloader__found-sorry')
//clients.js
export const slider = document.querySelector('.swiper-container');
export const swiperContainer = document.querySelector('.swiper-wrapper');
export const apiGithub = NODE_ENV === 'development' ? 'http://api.github.com/repos/den10004/Diplome/commits' : 'https://api.github.com/repos/den10004/Diplome/commits';
export const configGithub = {
    url: apiGithub,
    headers: {
        'Content-Type': 'application/json',
    }
};

//analytics

export const mainAnswer = document.querySelector('.question__headline-main-answer');
export const newsAnswerweek = document.querySelector('.question__analysis-news-answerweek');
export const ans = document.querySelector('.question__analysis-news-answerweek_1');
export const columnDays = document.querySelectorAll('.analytics__column-days');  //даты
export const columnHistogram = document.querySelectorAll('.analytics__column-histogram');
export const month = document.querySelector('.analytics__diagram-data');   //месяц
export const data = JSON.parse(localStorage.getItem(CARDS)); //JSON-массив
export const answer = localStorage.getItem('input'); 