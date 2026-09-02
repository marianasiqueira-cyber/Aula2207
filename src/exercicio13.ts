export class Animal {
     private especie: string = "";
    private cor: string = "";
    private porte: string = "";
    private idade: number = 0;

    setEspecie(especie: string): void {
        this.especie = especie;
    }

    getEspecie(): string {
        return this.especie;
    }

    setCor(cor: string): void {
        this.cor = cor;
    }

    getCor(): string {
        return this.cor;
    }

    setPorte(porte: string): void {
        this.porte = porte;
    }

    getPorte(): string {
        return this.porte;
    }

    setIdade(idade: number): void {
        this.idade = idade;
    }

    getIdade(): number {
        return this.idade;
    }
}

// Criando os objetos
const animal1 = new Animal();
const animal2 = new Animal();
const animal3 = new Animal();
const animal4 = new Animal();
const animal5 = new Animal();

console.log("-----OBJETO 1-----");
console.log(animal1.getEspecie());
console.log(animal1.getCor());
console.log(animal1.getPorte());
console.log(animal1.getIdade());

console.log("-----OBJETO 2-----");
console.log(animal2.getEspecie());
console.log(animal2.getCor());
console.log(animal2.getPorte());
console.log(animal2.getIdade());

console.log("-----OBJETO 3-----");
console.log(animal3.getEspecie());
console.log(animal3.getCor());
console.log(animal3.getPorte());
console.log(animal3.getIdade());

console.log("-----OBJETO 4-----");
console.log(animal4.getEspecie());
console.log(animal4.getCor());
console.log(animal4.getPorte());
console.log(animal4.getIdade());

console.log("-----OBJETO 5-----");
console.log(animal5.getEspecie());
console.log(animal5.getCor());
console.log(animal5.getPorte());
console.log(animal5.getIdade());
