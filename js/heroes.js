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
    attack(){
    }
    defense(){
    }
}

export class Mage extends Heroes{
    constructor(name, health, attack, mana){
    super(name, health, attack)    
    this.mana = mana
    }
    attack(){
    }
    defense(){
     
    }
}

export class Archer extends Heroes{
    constructor(name, health, attack, nbrFleche){
    super(name, health, attack)    
    this.nbrFleche = nbrFleche
    }
    attack(){
    }
    defense(){ 
    }
}