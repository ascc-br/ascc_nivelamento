process.stdin.setEncoding("utf8");
process.stdout.setEncoding("utf8");

const readline = require("readline-sync");

const { nivel3 } = require("./nivel3_front.js");

function main_start() {
  var laco_on = true;
  while (laco_on) {
    console.clear();
    console.log("Nivelamento de Alfran");
    console.log("\nEscolha um nível:");
    console.log("1 - Nível 1 (básico)");
    console.log("2 - Nível 2 (médio)");
    console.log("3 - Nível 3 (difícil)");
    console.log("4 - Sair");
    var opcao = readline.question("Digite a opção desejada: ");

    switch (parseInt(opcao)) {
      case 3:
        laco_on = nivel3();
        break;
      case 4:
        laco_on = false;
        break;
      default:
        readline.question("Opção indisponível! Tente novamente.", () => {
          readline.close();
        });
    }
  }
}

main_start();
