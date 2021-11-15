import { Heroes } from "./_heroes.js";

export class Archer extends Heroes{
    constructor(name, ptLife, ptAttack, ptArrow){
        super(name, ptLife, ptAttack);
        this.ptArrow = ptArrow;
    }
}