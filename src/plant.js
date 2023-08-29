import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/styles.css";

const plantStore = () => {
  let plantName = {}
  return (gardenStateFunction) => {
    const newStore = gardenStateFunction(plantStore);
    plantName = {}
    return newStore;
  }
}

const plantControl = plantStore();
const changeStore = (place) => {
  return (value) => {
    return (store) => ({
      store, [place]: (store[place] || 0) + value
    })
  }
}

const feed = changeStore ("soil")(1);
const hydrate = changeStore("water")(1);