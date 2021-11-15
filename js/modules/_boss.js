class Question {
    constructor(question, answer){
        this.question = question;
        this.answer = answer;
    }
};
let question1 = new Question("Une fois que l'on me prononce, je n'existe plus. Qui suis-je ? ", "silence");
let question2 = new Question("Je suis d'eau,je suis d'air,et je suis d'électricité. Qui suis-je ?", "courant");

let questions = [question1, question2];

export class Boss {
    constructor(name, ptLife, ptAttack){
        this.name = name;
        this.ptLife = ptLife;
        this.ptAttack = ptAttack;
        this.attack = function(cible){
            cible.ptLife -= this.ptAttack;
            alert(`${this.name} attaque ${cible.name} pour ${this.ptAttack} points de dégats. ${cible.name} n'a plus que ${cible.ptLife} points de vie.`);
            if(cible.ptLife <= 0){
                alert(`${cible.name} est mort.`);
            }
        }
        this.specialAttack = function(){
            if(this.ptLife <= 20){ // TOGGLE :  true --- this.ptLife <= 20
                let numRand = Math.round(Math.random() * (questions.length - 1));
                let playerAnswer;
                let i = 1;
                while(playerAnswer != questions[numRand].answer && i <= 3){
                    playerAnswer = prompt(questions[numRand].question);
                    if (playerAnswer == questions[numRand].answer){
                        this.ptVie = 0;
                        alert("Congralutation, you v win " + this.name + ".");
                        break;
                    } else if(i < 3){
                        i++;
                        continue;
                    }
                    alert("Vous avez été vaincu par " + this.name + ".");
                    i++;
                }
            }
        }
    }
}

