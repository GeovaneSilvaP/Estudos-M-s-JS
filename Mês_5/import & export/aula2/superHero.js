export default class superHero {
    constructor(name, power) {
        this.name = name;
        this.power = power;
    }
}

export function printHeroName(hero){
    console.log(`SuperHero name is: ${hero.name}`);
    
}

export function printHeroPower(hero){
    console.log(`SuperHero power is: ${hero.power}`);
    
}
