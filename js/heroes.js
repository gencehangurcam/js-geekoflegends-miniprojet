export class Heroes{
    constructor(name, health, attack){
    this.name = name
    this.health = health
    this.attack = attack
    }
}

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

export class Mage extends Heroes{
    constructor(name, health, attack, mana){
    super(name, health, attack)    
    this.mana = mana
    }
    Attack(){
    }
    Defense(){
    }
}

export class Archer extends Heroes{
    constructor(name, health, attack, nbrFleche){
    super(name, health, attack)    
    this.nbrFleche = nbrFleche
    }
    Attack(boss){
        boss.health - (this.attack * 1.4) == boss.health
        this.health * 0.75 == this.health
        this.nbrFleche - 2 == this.nbrFleche
        this.nbrFleche +1 == this.nbrFleche
        if (nbrFleche >= 0) {
            this.attack()
            console.log('passer un tour');
        }
    }
    Defense(){ 
    }
}