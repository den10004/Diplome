export class ApiNews {
    constructor(configNews) {
      this._url = configNews.url;
      this.configNews = configNews;
      this.link = configNews.link;
    }
  
    addServerNews = () => {
      return fetch(`${this._url}`, {
      })
  
        .then(res => {
          if (res.ok) {
            return res.json();
  
          }
          return Promise.reject("Произошла ошибка");
        });
    }

    
    sendForm = () => {
      return fetch(`${this._url}`, {
      })
  
        .then(res => {
          if (res.ok) {
            return res.json();
  
          }
          return Promise.reject("Произошла ошибка");
        });
  
    }
  }