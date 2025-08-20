class hero {
    constructor (name, age, typeHero) {
        this.name = name;
        this.age = age;
        this.typeHero = typeHero;
         console.log(`Informações do héroi escolhido: ${this.name}, ${this.age} anos e habilidade ${this.typeHero}`); 
    }
   
   attack(typeHero, typeAttack) {
        switch(this.typeHero){
            case "Ninja":
                this.typeAttack = "Shuriken";
            break;
            case "Monge":
                this.typeAttack = "Artes Marciais";
            break;
            case "Guerreiro":
                this.typeAttack = "Espada";
            break;
            case "Mago":
                this.typeAttack = "Magia";
            break;
            default:
                console.log("Héroi não identificado! Escolha entre: Guerreiro, Ninja, Mago ou Monge");
         }
      console.log(`O ${this.typeHero} atacou usando ${this.typeAttack}`); 
        }
}
    
let myHero = new hero("Sakura", 200, "Ninja");
myHero.attack();
