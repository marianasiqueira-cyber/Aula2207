export class Cliente {
  private id: number = 0;
  private nome: string = "";
  private telefone: string = "";
  private cpf: string = "";
  private rg: string = "";

  setId(id: number): void {
    this.id = id;
  }

  getId(): number {
    return this.id;
  }

  setNome(nome: string): void {
    this.nome = nome;
  }

  getNome(): string {
    return this.nome;
  }

  setTelefone(telefone: string): void {
    this.telefone = telefone;
  }

  getTelefone(): string {
    return this.telefone;
  }

  setCpf(cpf: string): void {
    this.cpf = cpf;
  }

  getCpf(): string {
    return this.cpf;
  }

  setRg(rg: string): void {
    this.rg = rg;
  }

  getRg(): string {
    return this.rg;
  }
}