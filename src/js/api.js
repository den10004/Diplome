export class ApiSlider {
  constructor(config) {
      this.url = config.url;
      this.config = config;
      this.link = config.link;
     }
  addServerCommits = () => {
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













