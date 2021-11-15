import { Heroes } from "./_heroes.js";

export class Wizard extends Heroes{
    constructor(name, ptLife, ptAttack, ptMana){
        super(name, ptLife, ptAttack);
        this.ptMana = ptMana;
    }
}