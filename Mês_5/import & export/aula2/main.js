import Hero from "./superHero.js";

import { printHeroName, printHeroPower } from "./superHero.js";

const newHero = new Hero("Superman", "Visão")

console.log(newHero.name);

console.log(newHero.power);

console.log(newHero);

printHeroName(newHero);

printHeroPower(newHero)