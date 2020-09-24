import { CARDS } from './constants.js';
import "../pages/index.css";
const mainAnswer = document.querySelector('.question__headline-main-answer');
const newsAnswerweek = document.querySelector('.question__analysis-news-answerweek');
const ans = document.querySelector('.question__analysis-news-answerweek_1');
const mainAsk = document.querySelector('.question__headline-main-ask');
const columnDays = document.querySelector('.analytics__column-days');
const columnHistogram = document.querySelector('.analytics__column-histogram');
const month1 = document.querySelector('.analytics__diagram-data');   //август
const data = JSON.parse(localStorage.getItem(CARDS)); //JSON-массив

mainAnswer.textContent = localStorage.getItem('input');  //вы спросили
newsAnswerweek.textContent = localStorage.getItem('input'); //новости за неделю
ans.textContent = data.totalResults;   //заголовок


//month1.textContent = new Date();
//month1.textContent = dat
/*
const dat = new Date();
Month = console.log(dat.getMonth()+1);

switch (Month)
{
  case 0: Month="января"; break;
  case 1: Month="февраля"; break;
  case 2: Month="марта"; break;
  case 3: Month="апреля"; break;
  case 4: Month="мае"; break;
  case 5: Month="июня"; break;
  case 6: Month="июля"; break;
  case 7: Month="августа"; break;
  case 8: Month="сентябрь"; break;
  case 9: Month="октября"; break;
  case 10: Month="ноября"; break;
  case 11: Month="декабря"; break;
}
*/