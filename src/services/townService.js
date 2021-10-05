const localforage = require("localforage")

const saveTowns = (towns) => {
    localforage.setItem('towns', towns).then((value) => {
        console.log(value);
        return true;
    }).catch();
}

const loadTowns = () => {
    return localforage.getItem('towns').then((value) => {
        console.log(value);
        return value;
    }).catch();
}

const townService = { saveTowns, loadTowns };
export default townService;