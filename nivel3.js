//FUNÇÕES DE BACKEND
function ledsNecessarios(numero) {
  let leds = 0;
  let aux = 0;

  if (typeof numero === "string") {
    let i = 0;
    if (numero[0] === "-") {
      i++;
      leds++;
    }
    for (; i < numero.length; i++) {
      aux = ledsNecessarios(parseInt(numero[i], 10));
      if (aux) leds += aux;
      else return 0;
    }
  } else if (numero >= 0 && numero <= 9) {
    switch (numero) {
      case 1:
        return 2;
      case 2:
        return 5;
      case 3:
        return 5;
      case 4:
        return 4;
      case 5:
        return 5;
      case 6:
        return 6;
      case 7:
        return 3;
      case 8:
        return 7;
      case 9:
        return 6;
      case 0:
        return 6;
      default:
        return 0; // Número inválido
    }
  } else if (!isNaN(numero)) {
    if (numero < 0) {
      leds++;

      aux = ledsNecessarios(String(numero * -1));
      if (aux) leds += aux;
    } else {
      aux = ledsNecessarios(String(numero));
      if (aux) leds += aux;
    }
  }
  return leds;
}

function letrasEQuantidades(input) {
  let letrasContabilizadas = {};

  const palavra = input //JURO QUE SÓ ESSA PARTE⬇️ EU PEDI AJUDA PRO GPT
    .toString()
    .normalize("NFD") // Separates base letters from accents
    .replace(/[\u0300-\u036f]/g, "") // Removes accent marks
    .replace(/[^a-zA-Z]/g, "") // Keeps only letters
    .toLowerCase();
  //TERMINA AQUI A AJUDA DO GPT⬆️, O RESTO É AUTÊNTICO

  for (let i = 0; i < palavra.length; i++) {
    const letra = palavra[i];

    if (letrasContabilizadas.hasOwnProperty(letra)) {
      letrasContabilizadas[letra]++;
    } else letrasContabilizadas[letra] = 1;
  }

  return letrasContabilizadas;
}

function indicesLetras(input) {
  let letrasContabilizadas = {};

  const palavra = input //JURO QUE SÓ ESSA PARTE⬇️ EU PEDI AJUDA PRO GPT
    .toString()
    .normalize("NFD") // Separates base letters from accents
    .replace(/[\u0300-\u036f]/g, "") // Removes accent marks
    .replace(/[^a-zA-Z]/g, "") // Keeps only letters
    .toLowerCase();
  //TERMINA AQUI A AJUDA DO GPT⬆️, O RESTO É AUTÊNTICO

  for (let i = 0; i < palavra.length; i++) {
    const letra = palavra[i];

    if (!letrasContabilizadas.hasOwnProperty(letra)) {
      letrasContabilizadas[letra] = [];
    }

    letrasContabilizadas[letra].push(i);
  }

  return letrasContabilizadas;
}

//FUNÇÕES DO FRONT !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function ehNumeroOuFrase(input) {
  const suposta_frase = String(input);
  for (var i = 0; i < suposta_frase.length; i++) {
    if (
      (suposta_frase[i] >= 0 && suposta_frase[i] <= 9) ||
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

function inputRequest(questao, numero = false, multiInput = false, limitedInput = 0) {
  //colocar validação de dados
  let enunciado = enunciados[parseInt(questao)];
  let finalInput = [];

  if (multiInput) {
    if (limitedInput) {
      for (let i = limitedInput; i > 0; ) {
        tipo_aux = prompt(enunciado + "\nJá registrados: " + finalInput.toString());

        if (numero && isNaN(tipo_aux)) {
          alert("Por favor, insira somente números!");
        } else {
          finalInput[limitedInput - i] = tipo_aux;
          i--;
        }
      }
    } else {
      //caso tenha multiplos inputs e ilimitados

      let finalInput = [];
      let aux = "";

      for (let i = 0; !(aux === "FIM"); ) {
        aux = prompt(
          enunciado +
            ' ou digite "FIM" para encerrar' +
            "\nJá registrados: " +
            finalInput.toString()
        );
        if (aux !== "FIM") {
          if (numero && isNaN(aux)) {
            alert("Por favor, insira somente números!");
          } else {
            finalInput[i] = aux;
            i++;
          }
        }
      }
    }
  } else {
    //caso de input único
    let aux = prompt(enunciado);
    while (numero && isNaN(aux)) {
      alert("Por favor, insira somente números!");
      aux = prompt(enunciado);
    }
    finalInput = aux;
  }

  return finalInput;
}

function showOutput(q) {
  let questao = parseInt(q) + 1;
  var entrada;
  var saida;
  var aux_saida;

  switch (questao) {
    case 1:
      let n = inputRequest(q, true);
      let qtd_leds = ledsNecessarios(n);
      alert("São necessários " + qtd_leds + " leds para representar o número " + n + " no painel.");
      break;
    case 2:
      entrada = inputRequest(q);
      while (ehNumeroOuFrase(entrada)) {
        alert("Por favor, insira somente uma palavra e que contenha somente letras.");
        entrada = inputRequest(q);
      }
      aux_saida = letrasEQuantidades(entrada);
      saida = JSON.stringify(aux_saida);
      alert(saida);
      break;
    case 3:
      entrada = inputRequest(q);
      while (ehNumeroOuFrase(entrada)) {
        alert("Por favor, insira somente uma palavra e que contenha somente letras.");
        entrada = inputRequest(q);
      }
      aux_saida = indicesLetras(entrada);
      saida = JSON.stringify(aux_saida);
      alert(saida);
      break;
    default:
      alert("Questão indisponível.");
  }
}

const enunciados = [
  "Digite qual número você deseja representar no painel de LEDs: ",
  "Insira uma palavra: ",
  "Insira uma palavra: ",
];

document.addEventListener("DOMContentLoaded", function () {
  var q_showing = 0;

  document.getElementById("questao").innerHTML = q_showing + 1;
  document.getElementById("qtd_questoes").innerHTML = enunciados.length;
  document.getElementById("resp").addEventListener("click", function () {
    showOutput(q_showing);
  });

  document.getElementById("ante").addEventListener("click", function () {
    if (q_showing > 0) {
      q_showing--;
      document.getElementById("questao").innerHTML = q_showing + 1;
      let image_path = "./img/n3q" + (q_showing + 1).toString() + ".png";
      document.getElementById("q_img").src = image_path;
    }
  });

  document.getElementById("prox").addEventListener("click", function () {
    if (q_showing < enunciados.length - 1) {
      q_showing++;
      document.getElementById("questao").innerHTML = q_showing + 1;
      let image_path = "./img/n3q" + (q_showing + 1).toString() + ".png";
      document.getElementById("q_img").src = image_path;
    }
  });
});
