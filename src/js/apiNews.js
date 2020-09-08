export class ApiNews {
    constructor(configNews) {
      this.url = configNews.url;
      this.configNews = configNews;
      this.link = configNews.link;
    }
  
    addServerNews = () => {
      return fetch(`${this.url}`, {
      })
  
        .then(res => {
          if (res.ok) {
            return res.json();
  
          }
          return Promise.reject("Произошла ошибка");
        });
    }

    
    SendForm = () => {
      return fetch(`${this.url}`, {
      })
  
        .then(res => {
          if (res.ok) {
            return res.json();
  
          }
          return Promise.reject("Произошла ошибка");
        });
  
    }
  }