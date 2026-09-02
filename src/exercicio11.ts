export class Carro {
  private marca: string = "";
  private modelo: string = "";
  private ano: number = 0;
  private cor: string = "";

  setMarca(marca: string): void {
    this.marca = marca;
  }

  getMarca(): string {
    return this.marca;
  }

  setModelo(modelo: string): void {
    this.modelo = modelo;
  }

  getModelo(): string {
    return this.modelo;
  }

  setAno(ano: number): void {
    this.ano = ano;
  }

  getAno(): number {
    return this.ano;
  }

  setCor(cor: string): void {
    this.cor = cor;
  }

  getCor(): string {
    return this.cor;
  }
}