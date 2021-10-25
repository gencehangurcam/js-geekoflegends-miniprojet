// import {Mage, Warrior, Archer } from "./heroes.js"
import { Boss } from "./modules/boss.js"
import { Archer } from "./modules/archer.js";
import { Warrior } from "./modules/warrior.js";
import { Wizard } from "./modules/wizard.js";
import prompt from 'prompt';

prompt.start();

// //boss
let Sauron = new Boss("sauron",100,100);
let Chronos = new Boss("Chronos",100,100);
let Lilith = new Boss("Lilith",100,100);

let bosses = [Sauron, Chronos, Lilith];

let choiceBosses = Math.round(Math.random() * (bosses.length));
console.log(bosses);
console.log(bosses[choiceBosses]);
// //heroes
let persoWiz = new Wizard('persoWiz', 100, 100, 7),
persoWar = new Warrior('persoWar', 100, 100, 0),
persoArc = new Archer('persoArc', 100, 100, 7),

persos = [persoWiz, persoWar, persoArc]; 
console.log(persos);

let choicePerso = Math.round(Math.random() * (persos.length));

persos[choicePerso].Attack(bosses.Chronos);