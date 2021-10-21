export class Boss{
    constructor(name, health, attack){
    this.name = name
    this.health = health
    this.attack = attack
    }
    attack(){
        Math.floor(Math.random() * Heroes)
    }
}
