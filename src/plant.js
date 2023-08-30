import { changeState, storeState } from './business.js';


// const feed = changeState ("leaf")(3);
const plant = changeState("oil")(5);



const feedPlant = (name) => {
const plant = {name: name };
  return  {
  ...poison,
  ...damage(plant),
  ...beauty(plant)
  }
}

const deathFlower = (name) => {
  const poison = {name: name };
    return  {
    ...poison,
    ...damage(plant),
    ...beauty(plant)
    };
  };


  const deathFlower = feedPlant("Death Flower");

  export const deathFlowerControl = storeState(dragonFlower);

 