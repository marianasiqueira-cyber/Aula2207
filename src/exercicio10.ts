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


}
}