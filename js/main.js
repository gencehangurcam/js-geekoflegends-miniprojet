import {Boss} from "./modules/_boss.js";
import {Warrior} from "./modules/_warrior.js";
import {Wizard} from "./modules/_wizard.js";
import {Archer} from "./modules/_archer.js";



let boss1 = new Boss("Sauron", 100, 13);
let boss2 = new Boss("Chronos", 100, 20);
let boss3 = new Boss("Lilith", 100, 7);
let listBoss = [boss1, boss2, boss3];
let chosenBoss = listBoss[Math.round(Math.random() * (listBoss.length - 1))];

console.log(chosenBoss);

let bankLife = 150;
let bankAttack = 50;
let name, ptLife, ptAttack, ptSpec;

let init = function(classe) {
    name = prompt(`Veuillez entrer le nom de votre ${classe} :`);
    ptLife = prompt(`Choisissez les points de vie de ${name} (${bankLife} points disponibles.)`);
    while (ptLife > bankLife) {
        ptLife = prompt(`Veuillez insérer un montant plus petit. (${bankLife} points disponibles.)`);
    };
    bankLife -= ptLife;

    ptAttack = prompt(`Choisissez les points d'attaque de ${name} (${bankAttack} points disponibles.)`);
    while (ptAttack > bankAttack) {
        ptAttack = prompt(`Veuillez insérer un montant plus petit. (${bankAttack} points disponibles.)`);
    };
    bankAttack -= ptAttack;
    if(classe == 'guerrier'){
        ptSpec = 0;
    } else if (classe == 'mage'){
        let manas = [7, 9, 11];
        let numRand = Math.round(Math.random() * (manas.length - 1));
        ptSpec = manas[numRand];
    } else if (classe == 'archer'){
        let arrows = [7, 8, 9, 10, 11];
        let numRand = Math.round(Math.random() * (arrows.length - 1));
        ptSpec = arrows[numRand];

    }
}

let warrior1 = new Warrior('warrior', 100, 20, 0);
let wizard1 = new Wizard('wizard', 10, 20, 7);
let archer1 = new Archer('archer', 10, 20, 9);

export let attacker = [warrior1, wizard1, archer1];

let i = 0;
while(warrior1.ptLife > 0 && wizard1.ptLife > 0 && archer1.ptLife > 0 && chosenBoss.ptLife > 20){
    attacker = [warrior1, wizard1, archer1];
    attacker[i].attack(chosenBoss);
    if(i < 2){
        i++;
    } else {
        i = 0;
        let numRand = Math.round(Math.random() * (attacker.length - 1));
        chosenBoss.attack(attacker[numRand]);
    }
}