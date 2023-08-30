import './css/styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {deathFlower} from './plant.js';

const getValue = (collection, object, id, callback) => {
  if (collection.lenght === 0) {
    return;
  }
const [currentElement, ...remainigElements] = collection;
callback(currentElement, object, id);

getValues(remainigElements, object, id, callback);
}

const showValues = (key, object, id) => {
  const p = document.createElement("p");
  p.innerText = `${key}: ${object[key]}`;
  document.getElementById(`${id}`).append(p);
}

//UI logic

window.onload = () => {
  document.getElementById("show-hm").onclick = () => {
    const currentState = deathFlowerControl();
    getValues(Object.keys(currentState), currentState, 'all-values-hm', showValues);
  };
} 