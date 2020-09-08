export class Api {
  constructor(config) {
    this.url = config.url;
    this.headers = config.headers;
    this.headers = this.headers
    this.config = config;
    this.link = config.link;
  }


  SearchNews = () => {
    return fetch(`${this.url}`, {

    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject("Произошла ошибка");
      });

  };


 













}