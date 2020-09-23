import { CARDS } from './constants.js';

const mainAnswer = document.querySelector('.question__headline-main-answer');
const newsAnswerweek = document.querySelector('.question__analysis-news-answerweek');
const ans = document.querySelector('.question__analysis-news-answerweek_1');
const mainAsk = document.querySelector('.question__headline-main-ask');
const columnDays = document.querySelector('.analytics__column-days');
const columnHistogram = document.querySelector('.analytics__column-histogram');
const month = document.querySelector('.analytics__diagram-data'); 
const data = JSON.parse(localStorage.getItem(CARDS)); //JSON-массив

mainAnswer.textContent = localStorage.getItem('input');  //вы спросили
newsAnswerweek.textContent = localStorage.getItem('input'); //новости за неделю
ans.textContent = data.totalResults;   //заголовок

/*
const dat = new Date();
Month = data.getMonth();

switch (Month)
{
  case 0: fMonth="января"; break;
  case 1: fMonth="февраля"; break;
  case 2: fMonth="марта"; break;
  case 3: fMonth="апреля"; break;
  case 4: fMonth="мае"; break;
  case 5: fMonth="июня"; break;
  case 6: fMonth="июля"; break;
  case 7: fMonth="августа"; break;
  case 8: fMonth="сентябрь"; break;
  case 9: fMonth="октября"; break;
  case 10: fMonth="ноября"; break;
  case 11: fMonth="декабря"; break;
}



month.textContent = fMonth;



//console.log(slice(data[0].publishedAt))

//ans.textContent = data.totalResults; 
//ans.textContent = data.length; 
//console.log(data.length)
//console.log(data.totalResults)


*/
