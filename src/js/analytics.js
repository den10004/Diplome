import { CARDS } from './constants.js';
import "../pages/index.css";

const mainAnswer = document.querySelector('.question__headline-main-answer');
const newsAnswerweek = document.querySelector('.question__analysis-news-answerweek');
const ans = document.querySelector('.question__analysis-news-answerweek_1');
const mainAsk = document.querySelector('.question__headline-main-ask');
const columnDays = document.querySelectorAll('.analytics__column-days');  //даты
const columnHistogram = document.querySelector('.analytics__column-histogram');
const month = document.querySelector('.analytics__diagram-data');   //месяц
const data = JSON.parse(localStorage.getItem(CARDS)); //JSON-массив
console.log(data.articles)
const answer = localStorage.getItem('input'); 



mainAnswer.textContent = localStorage.getItem('input');  //вы спросили
ans.textContent = localStorage.getItem('input'); //новости за неделю
newsAnswerweek.textContent = data.totalResults;   //заголовок
/////////////////////////////////////////////////////////////////////////////////////
ans.textContent = mentionForWeek(answer, data.articles/*.content*/);  //упонимание за неделю или data или answer

function mentionForWeek(key, articles) { ////упонимание за неделю
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
//месяц
const now = new Date();
const mon = now.getMonth();
const mons = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь']
month.textContent = mons[mon]

//Даты////////////////////////////////////


function mentionsPerDay() {
  const days = {};
  data.articles.forEach((article) => {
    const daysMention = new Date(article.publishedAt.slice(0,10)).getDate();
    if (daysMention in days) {
      days[daysMention]++;
    } else {
      days[daysMention] = 1;
    }
  })
  console.log(days)
// renderGraph(days);
}


function dates() {
   const dateObject = [];
  for (let i = 6; i>=0; i=i-1) {
    const day = new Date(new Date().getTime()-(i*86400000)).toLocaleDateString('ru', {day: 'numeric'});
    const week = new Date(new Date().getTime()-(i*86400000)).toLocaleDateString('ru', {weekday: 'short'});
    const formaDate = day + ', ' + week;
    dateObject.push(formaDate);
    //console.log(formaDate)
  }
  renderDates(dateObject)
  /*columnDays[0].textContent = dateObject[0];
  columnDays[1].textContent = dateObject[1];
  columnDays[2].textContent = dateObject[2];
  columnDays[3].textContent = dateObject[3];
  columnDays[4].textContent = dateObject[4];
  columnDays[5].textContent = dateObject[5];
  columnDays[6].textContent = dateObject[6];*/
}

function renderDates(dateObject) {
  dateObject.map((formaDate, i) => {
    columnDays[i].textContent = formaDate;
  })
}
  


/*
function renderGraph(obj) {
  const arrDay = Object.values(obj);

  function getMaxOfArray(arrDay) {
    return Math.max.apply(null, arrDay);
  }
  let max = getMaxOfArray(arrDay);
  for(let i = 0; i < Object.values(obj).length; i++) {
    item[i].textContent = Object.values(obj)[i];
    const statisticalSeries = Object.values(obj)[i]/max*100;
    graph[i].style.width = `${statisticalSeries}%`;
  }
}
*/

dates();
mentionsPerDay();