import * as readline from "readline";

const leia = readline. createInterface({
input: process.stdin,
output: process.stdout
});

function perguntar(pergunta: string): Promise<string> {
return new Promise((resolve) => {
leia.question(pergunta, (resposta: string) => {
resolve(resposta);

});
});

}

function validarPontuacao(pontuacao: number): boolean {
return !Number. isNaN(pontuacao) && pontuacao >= 0;

}

function calcularDiferenca(
pontosJogador1: number,
pontosJogador2: number
): number {
return Math. abs(pontosJogador1 - pontosJogador2);

}

function verificarResultado(
    nomeJogador1: string,
    pontosJogador1: number,
    nomeJogador2: string,
    pontosJogador2: number
):  string {

 if (pontosJogador1 > pontosJogador2){
   return `Vendedor: ${ nomeJogador1}`;   
 }


  if (pontosJogador2 > pontosJogador2){
    return `Vendedor: ${nomeJogador2}`;
  }

  return " A partida terminou empatada.";

}
function exibirPlacar(
    nomeJogador1: string,
    pontosJogador1: number,
    nomeJogador2: string, 
    pontosJogador2: number 
): void {
    console.log("PLACAR FINAL");
    console.log( 
        `${nomeJogador1} ${pontosJogador1} x ${pontosJogador2} ${nomeJogador2}`
    );
}
async function executar(): Promise<void> {
    console.log ( "PLACAR DA PARTIDA");
    
    const nomeJogador1: string = await perguntar( 

        "Nome do primeiro jogador"
    );
const respostaPonto1: string = await perguntar(
    `pontuação de ${nomeJogador1}:`
);
const pontosJogador1: number = Number(respostaPonto1);
const pontosJogador2: number = Number(respostaPonto2);

if (
    !validarPontuacao ( pontosJogador1) ||
    !validarPontuacao (pontosJogador2)

){ 
    console.log(
        "erro: as pontuações devem ser numeros não negativos."
        
    );
    leia.close();
    return;
}

exibirPlacar (
    nomeJogador1,
    pontosJogador1,
    Nomejogador2,
    pontosJogador2
);
}