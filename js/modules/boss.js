export class Boss {
    constructor(nom, health, power){
        this.name = nom
        this.health = health
        this.power = power
    }
    enigmas = {
        "Une fois que l'on me prononce, je n'existe plus. Qui suis-je ?": ["Le silence", "le silence", "silence"],
        "Je suis d'eau,je suis d'air,et je suis d'électricité. Qui suis-je ?": ["sdd"]
    }
    setHealth(damages) {
        this.health += damages;
        console.log(`${this.nom} perds ${damages} de vie, il lui en reste ${this.health}`);

        if (this.health <= 20) {
            console.log("MOUHAHHA, tu pensais me vaincre si facilement... Reponds à cette enigme et tu pourra peut-etre y arriver.");
            const quest = Object.keys(this.enigmas)[Math.round(Math.random() * Object.keys(this.enigmas).length)];

            var self = this;
            prompt.get([quest], function (err, result) {
                if (err) { return onErr(err); }

                if (self.enigmas[quest].indexOf(result[quest]) > -1) {
                    self.health = 0;
                    console.log("AAAAHHHH, soit maudit,... je reviendrais d'entre les morts.");
                    console.log(`${self.nom} est mort`);
                } else {
                    // All heroes die
                    self.health += 10;
                    console.log("MOUHAHHA, je reviiiiss");
                    console.log(`${self.nom} a maintenant ${self.health} points de vie`);
                }
            });
        }
    }
}