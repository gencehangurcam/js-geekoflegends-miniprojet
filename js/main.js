import { Heroes, Mage, Warrior, Archer } from "./heroes.js"
import { Boss } from "./boss.js"

//boss
let boss = {
    sauron = new Boss('Sauron', 100, 100),
    chronos = new Boss('Chronos', 100, 100),
    lilith = new Boss('Lilith', 100, 100),
}
//heroes
let heroes = {
    mage = new Mage('Sauron', 100, 100, 7),
    warrior = new Warrior('Chronos', 100, 100, 0),
    archer = new Archer('Lilith', 100, 100, 7)
}


let perso = prompt('Choisis un nom de personnages')