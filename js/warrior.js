export class Warrior extends Heroes{
    constructor(name, health, attack, rage){
    super(name, health, attack)    
    this.rage = rage
    }
    Attack(boss){
        boss.health - (this.attack) == boss.health

    }
    Defense(){
    }
}