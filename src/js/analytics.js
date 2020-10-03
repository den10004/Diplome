
mainAnswer.textContent = localStorage.getItem('input');  //вы спросили
ans.textContent = localStorage.getItem('input'); //новости за неделю
newsAnswerweek.textContent = data.totalResults;   //заголовок
ans.textContent = mentionForWeek(answer, data.articles);  //упонимание за неделю или data или answer

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

//месяц
const now = new Date();
const mon = now.getMonth();
const mons = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь']
month.textContent = mons[mon]


function dates() {  //даты в таблице
   const dateObject = [];
  for (let i = 6; i>=0; i=i-1) {
    const day = new Date(new Date().getTime()-(i*86400000)).toLocaleDateString('ru', {day: 'numeric'});
    const week = new Date(new Date().getTime()-(i*86400000)).toLocaleDateString('ru', {weekday: 'short'});
    const formaDate = day + ', ' + week;
    dateObject.push(formaDate);
  }
  renderDates(dateObject)
}

function renderDates(dateObject) {   //рендер дат
  dateObject.map((formaDate, i) => {
    columnDays[i].textContent = formaDate;
  })
}
  
//график////////////////////////////////////
function mentionsDay() {
  const days = {x:0, x:0, x:0, x:0, x:0, x:0, x:0}

  data.articles.forEach((article) => {
    const published = new Date(article.publishedAt.slice(0,10)).getDate();
      if (published in days) {
      days[published]++;
    } else {
      days[published] = 1;
    }
  })
  
  renderGraph(days);
}

function renderGraph(obj) {
const arrayDays = Object.values(obj);
  console.log(arrayDays)
  for(let i = 0; i < Object.values(obj).length; i++) {
    columnHistogram[i].insertAdjacentHTML('afterbegin', Object.values(obj)[i]);
    columnHistogram[i].style.width = `${Object.values(obj)[i]}%`;
  }
}

dates();
mentionsDay();

import {mainAnswer, newsAnswerweek, ans, columnDays, columnHistogram, month, data, answer} from './constants.js';
import "../pages/index.css";