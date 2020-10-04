

export default class LocalStorage {
    save(item, value) {
    localStorage.setItem(item, JSON.stringify(value))
    }

    load (item) {
    return JSON.parse(localStorage.getItem(item))
    }
}



