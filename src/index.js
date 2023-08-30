import './css/styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { deathFlowerControl, blackBerryControl } from './plant.js';

const showValues = (key, object, id) => {
  const p = document.createElement("p");
  p.innerText = `${key}: ${object[key]}`;
  document.getElementById(`${id}`).append(p);
};

// UI logic
window.onload = () => {
  document.getElementById("show-df").onclick = () => {
    const currentState = deathFlowerControl();
    Object.keys(currentState).forEach(key => {
      showValues(key, currentState, 'all-values-df');
    });
  };

  document.getElementById("show-bm").onclick = () => {
    const currentState = blackBerryControl();
    Object.keys(currentState).forEach(key => {
      showValues(key, currentState, 'all-values-bm');
    });
  };
};



// import './css/styles.css';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {deathFlowerControl, blackBerryControl} from './plant.js';

// const getValue = (collection, object, id, callback) => {
//   if (collection.lenght === 0) {
//     return;
//   }
// const [currentElement, ...remainigElements] = collection;
// callback(currentElement, object, id);

// getValues(remainigElements, object, id, callback);
// }

// const showValues = (key, object, id) => {
//   const p = document.createElement("p");
//   p.innerText = `${key}: ${object[key]}`;
//   document.getElementById(`${id}`).append(p);
// }

// //UI logic

// window.onload = () => {
//   document.getElementById("show-hm").onclick = () => {
//     const currentState = deathFlowerControl();
//     getValues(Object.keys(currentState), currentState, 'all-values-df', showValues);
//   };
// } 

// window.onload = () => {
//   document.getElementById("show-hm").onclick = () => {
//     const currentState = blackBerryControl();
//     getValues(Object.keys(currentState), currentState, 'all-values-bm', showValues);
//   };
// } 