export class Pessoa {
private nome: string = "";
private idade: number = 0;
private endereco: string = "";
private profissao: string = "";

setNome(nome: string): void {
this.nome = nome;
}
getNome(): string {
return this. nome;
}
setIdade(idade: number): void {
this.idade = idade;
}
getIdade(): number {
return this. idade;
}
setEndereco(endereco: string): void {
this.endereco = endereco;
}
getEndereco(): string {
return this. endereco;
}
setProfissao(profissao: string): void {
this.profissao = profissao;
}
getProfissao(): string {
return this.profissao;


import { Pessoa } from "./pessoa";


const pessoa1 = new Pessoa();
const pessoa2 = new Pessoa();

pessoa1.setNome("Tom Cruise");
pessoa1.setIdade(60);
pessoa1.setEndereco("California, USA");
pessoa1.setProfissao("Ator");

pessoa2.setNome("Messi");
pessoa2.setIdade(35);
pessoa2.setEndereco("Miami, USA");
pessoa2.setProfissao("Jogador de Futebol");

// Chamando os metodos get() para apresentar os objetos

console. log(" ----- OBJETO 1 ----- ");
console. log(pessoa1.getNome());
console. log(pessoa1.getIdade());
console. log(pessoa1.getEndereco());
console.log(pessoa1.getProfissao());

console. log(" ----- OBJETO 2 ----- ");
console. log(pessoa2.getNome());
console.log(pessoa2.getIdade());
console.log(pessoa2.getEndereco());
console.log(pessoa2.getProfissao());}
}