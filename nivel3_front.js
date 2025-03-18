const { ledsNecessarios, indicesLetras, letrasEQuantidades } = require("./nivel3_back.js");
const readline = require("readline-sync");

function nivel3() {
  let atividade = -1;

  while (atividade < 0 || atividade > 3) {
    console.clear();
    console.log("NÍVEL 3 - Difícil");
    console.log("==================");
    console.log("\nEscolha uma atividade: ");
    console.log("1 - Contar leds necessários");
    console.log("2 - Quantidade de letras em uma palavra ou frase");
    console.log("3 - Indices de letras em uma palavra");
    console.log("0 - Voltar ao menu principal");
    atividade = parseInt(readline.question("Digite a opção desejada: "));
    if (atividade < 0 || atividade > 3) {
      readline.question("Opção inválida! Tente novamente.", () => {
        readline.close();
      });
      return nivel3();
    }
  }
  switch (
    atividade //dividir em função especifica para cada atividade, com checagem de input
  ) {
    case 1:
      console.clear();
      console.log("======================================================");
      console.log("====  Leds necessários para um painel de números  ====");
      console.log("======================================================");
      const numero = readline.questionInt("\nDigite o número a ser mostrado no painel: ");
      const leds = ledsNecessarios(numero);
      console.log(`Leds necessários: ${leds}`);
      readline.question("Pressione qualquer tecla para continuar", () => {
        readline.close();
      });
      return nivel3();
      break;
    case 2:
      console.clear();
      console.log("======================================================");
      console.log("====              Contador de letras              ====");
      console.log("======================================================");
      const frase = readline.question("\nDigite uma palavra ou frase: ");
      const objRetorno = letrasEQuantidades(frase);
      console.log(objRetorno);
      readline.question("Pressione qualquer tecla para continuar", () => {
        readline.close();
      });
      return nivel3();
      break;
    case 3:
      let laco_questao3 = true;
      while (laco_questao3) {
        console.clear();
        console.log("======================================================");
        console.log("==== Índices das letras contidas em uma palavra   ====");
        console.log("======================================================");
        const palavra = readline.question("\nDigite uma palavra: ");

        laco_questao3 = ehFrase(palavra);
        if (laco_questao3) {
          console.error("Apenas 1 palavra por vez pode ser analizada!");
          readline.question("Tente novamente...", () => {
            readline.close();
          });
        } else {
          const indices = indicesLetras(palavra);
          console.log(indices);
          readline.question("Pressione qualquer tecla para continuar", () => {
            readline.close();
          });
          return nivel3();
        }
      }
      break;
    case 0:
      return true;
      break;
    default:
      break;
  }

  return false;
}

function ehFrase(input) {
  const suposta_frase = String(input);
  for (var i = 0; i < suposta_frase.length; i++) {
    if (
      suposta_frase[i] === " " ||
      suposta_frase[i] === "." ||
      suposta_frase[i] === "," ||
      suposta_frase[i] === "!" ||
      suposta_frase[i] === "?" ||
      suposta_frase[i] === ":" ||
      suposta_frase[i] === ";"
    )
      return true;
  }
  return false;
}

module.exports = { nivel3, ehFrase };
