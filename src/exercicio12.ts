export class Aviao {
  private modelo: string = "";
  private companhia: string = "";
  private capacidadePassageiros: number = 0;
  private anoFabricacao: number = 0;

  setModelo(modelo: string): void {
    this.modelo = modelo;
  }

  getModelo(): string {
    return this.modelo;
  }

  setCompanhia(companhia: string): void {
    this.companhia = companhia;
  }

  getCompanhia(): string {
    return this.companhia;
  }

  setCapacidadePassageiros(capacidadePassageiros: number): void {
    this.capacidadePassageiros = capacidadePassageiros;
  }

  getCapacidadePassageiros(): number {
    return this.capacidadePassageiros;
  }

  setAnoFabricacao(anoFabricacao: number): void {
    this.anoFabricacao = anoFabricacao;
  }

  getAnoFabricacao(): number {
    return this.anoFabricacao;
  }
}