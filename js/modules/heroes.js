export class Heroes{
    constructor(nom, power, health){
        this.nom = nom
        this.power = power
        this.health = health
    }
    Attack(attackTo){
        console.log(`${this.nom} attaque ${attackTo.nom}`);
        attackTo.setHealth(-this.power);
    }
}
