import { CARDS } from './constants.js';
import "../pages/index.css";
const mainAnswer = document.querySelector('.question__headline-main-answer');
const newsAnswerweek = document.querySelector('.question__analysis-news-answerweek');
const ans = document.querySelector('.question__analysis-news-answerweek_1');
const mainAsk = document.querySelector('.question__headline-main-ask');
const columnDays = document.querySelector('.analytics__column-days');  //даты
const columnHistogram = document.querySelector('.analytics__column-histogram');
const month = document.querySelector('.analytics__diagram-data');   //месяц
const data = JSON.parse(localStorage.getItem(CARDS)); //JSON-массив
console.log(data)
const answer = localStorage.getItem('input'); 



mainAnswer.textContent = localStorage.getItem('input');  //вы спросили
//ans.textContent = localStorage.getItem('input'); //новости за неделю
newsAnswerweek.textContent = data.totalResults;   //заголовок
/////////////////////////////////////////////////////////////////////////////////////
ans.textContent = references(answer, data.articles);  //упонимание за неделю или data или answer

function references(key, articles) { ////упонимание за неделю
  let count = 0;
  articles.forEach((i) => {
    i.title = i.title.toLowerCase();
    key = key.toLowerCase();
    if(i.title.includes(key)) {
      return count++;
    }
  })
  return count;
}
////////////////////////////////////////////////////////////////////////
///месяц
const now = new Date();
const mon = now.getMonth();
const mons = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь']
month.textContent = mons[mon]

//Даты////////////////////////////////////

const nows = new Date();
const day = nows.getDate();
const days = ['вс','пн','вт','ср','чт','пт','сб']
columnDays.textContent = day;
console.log(day)