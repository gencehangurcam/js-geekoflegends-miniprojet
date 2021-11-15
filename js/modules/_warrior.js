import { Heroes } from "./_heroes.js";

export class Warrior extends Heroes{
    constructor(name, ptLife, ptAttack, ptRage){
        super(name, ptLife, ptAttack);
        this.ptRage = ptRage;
    }
}