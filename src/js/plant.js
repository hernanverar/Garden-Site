import { changeState, storeState } from "./business.js";

// Define the state changes
const beauty = changeState("bloom")(3);
const damage = changeState("oil")(5);
// const danger = changeState("venom")(1);

// Define feedPlant and deathFlower functions
function feedPlant(name) {
  const poison = { name: name };
  return {
    ...poison,
    ...damage(poison),
    ...beauty(poison),
  };
}

const deathFlower = (name) => {
  const poison = poison(name);
  return {
    ...poison,
    ...damage(poison),
    ...beauty(poison),
  };
};

const blackBerry = (name) => {
  const poison = poison(name);
  return {
    ...poison,
    ...damage(poison),
    ...beauty(poison),
  };
};

const feedPlantState = feedPlant("Feed Plant");
const deathFlowerState = deathFlower("Death Flower");
const blackBerryState = blackBerry("Black Berry");

export const feedPlantControl = storeState(feedPlantState);
export const deathFlowerControl = storeState(deathFlowerState);
export const blackBerryControl = storeState(blackBerryState);
