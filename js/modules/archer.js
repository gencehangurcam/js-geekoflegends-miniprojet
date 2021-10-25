import { Heroes } from "./heroes.js";

export class Archer extends Heroes{
    constructor(nom, health, attack, nbrFleche){
        super(nom, health, attack)
        this.fleche = nbrFleche
    }
    // Attack(){
    //     boss.health - (this.attack * 1.4) == boss.health
    //     this.health *= 0.75
    //     this.nbrFleche -= 2
    //     this.nbrFleche += 1
    //     if (nbrFleche >= 0) {
    //         this.attack()
    //         console.log('passer un tour');
    //     }
    // }
    Defense(){
    }
    NbrFleche(){
    }
}
