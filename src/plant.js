import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/styles.css";

const plantState = () => {
  let plantName = {}
  return (gardenStateFunction) => {
    const newState = gardenStateFunction(plantState);
    plantName = {}
    return newState;
  }
}

const plantControl = plantState();