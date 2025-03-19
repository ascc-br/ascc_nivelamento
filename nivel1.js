//FUNÇÕES DO BACK !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

function stringSemelhante(nome, senha) {
  return nome.toLowerCase() === senha.toLowerCase();
}

function maiorNumero(arrayNumeros) {
  let maior = arrayNumeros[0];
  for (let i = 1; i < arrayNumeros.length; i++) {
    if (arrayNumeros[i] > maior) {
      maior = arrayNumeros[i];
    }
  }
  return maior;
}

function fatorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  } else {
    return numero * fatorial(numero - 1);
  }
}

function entreNumeros(numero1, numero2) {
  var arrayResposta;
  if (numero1 !== numero2 && Math.pow(numero1 - numero2, 2) !== 1) {
    if (numero1 < numero2) {
      for (var i = 0; numero1 + i < numero2; i++) {
        arrayResposta.push(i + numero1);
      }
    } else {
      for (var i = 0; numero2 + i < numero1; i++) {
        arrayResposta.push(i + numero2);
      }
    }

    return arrayResposta;
  } else return null;
}

function perfilDeIdades(arrayIdades) {
  var jovens = 0;
  var adultos = 0;
  var idosos = 0;

  for (var i = 0; i < arrayIdades.length; i++) {
    if (arrayIdades[i] <= 25) {
      jovens++;
    } else if (arrayIdades[i] > 25 && arrayIdades[i] < 60) {
      adultos++;
    } else {
      idosos++;
    }
  }

  if (jovens > adultos && jovens > idosos) {
    return "Perfil: Jovem";
  } else if (adultos > jovens && adultos > idosos) {
    return "Perfil: Adulto";
  } else {
    return "Perfil: Idoso";
  }
}

function mediaAritmetica(arrayNumeros) {
  var soma = 0;
  for (var i = 0; i < arrayNumeros.length; i++) {
    soma += arrayNumeros[i];
  }
  return soma / arrayNumeros.length;
}

function tabuadaRecortada(protagonista, inicio, fim) {
  var arrayDeStrings;
  for (var i = inicio; i <= fim; i++) {
    arrayDeStrings.push(protagonista + " x " + i + " = " + protagonista * i);
  }
  return arrayDeStrings;
}

function classificandoNumeros(arrayNumeros) {
  var nivel1 = 0;
  var nivel2 = 0;
  var nivel3 = 0;
  var nivel4 = 0;

  for (var i = 0; i < arrayNumeros.length; i++) {
    if (arrayIdades[i] <= 25) {
      nivel1++;
    } else if (arrayNumeros[i] > 25 && arrayNumeros[i] <= 50) {
      nivel2++;
    } else if (arrayNumeros[i] > 50 && arrayNumeros[i] <= 75) {
      nivel3++;
    } else if (arrayNumeros[i] > 75 && arrayNumeros[i] <= 100) {
      nivel4++;
    }
  }

  return (
    "Quantidade de numeros:\n" +
    "Entre 00 e 25: " +
    nivel1 +
    "\n" +
    "Entre 26 e 50: " +
    nivel2 +
    "\n" +
    "Entre 51 e 75: " +
    nivel3 +
    "\n" +
    "Entre 76 e 100: " +
    nivel4 +
    "\n" +
    "Total: " +
    arrayNumeros.length
  );
}

function eleicao(arrayNomeCandidatos, arrayVotos) {
  var votosValidos = new Array(arrayNomeCandidatos.length).fill(0);
  var qtd = votosValidos.length; // Quantidade de candidatos
  var nulos = 0;
  var brancos = 0;

  for (var i = 0; i < arrayVotos.length; i++) {
    if (arrayVotos[i] > 0 && arrayVotos[i] <= qtd) {
      votosValidos[arrayVotos[i] - 1]++;
    } else if (arrayVotos[i] === qtd + 2) brancos++;
    else nulos++;
  }

  return;
}

function notaProva(arrayGabarito, arrayRespostas) {
  var nota = 0;

  for (var i = 0; i < arrayGabarito.length; i++) {
    if (arrayGabarito[i] === arrayRespostas[i]) {
      nota++;
    }
  }

  return nota;
}

function pedidoProduto(idProduto, qtd) {
  const produtos = {
    100: { nome: "Cachorro Quente", preco: 1.2 },
    101: { nome: "Bauru Simples", preco: 1.3 },
    102: { nome: "Bauru com Ovo", preco: 1.5 },
    103: { nome: "Hambúrguer", preco: 1.2 },
    104: { nome: "Cheeseburguer", preco: 1.3 },
    105: { nome: "Refrigerante", preco: 1.0 },
  };
  if (idProduto in produtos && qtd > 0) {
    return produtos[idProduto].nome + " - $" + (produtos[idProduto].preco * qtd).toFixed(2);
  } else {
    return "Produto não encontrado ou quantidade inválida.";
  }
}

//FUNÇÕES DO FRONT !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
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

  switch (questao) {
    case 1:
      for (let output = true; output; output = output) {
        let aux = inputRequest(q, false, true, 2);
        output = stringSemelhante(aux[0], aux[1]);
        if (output) alert("Nome e senha precisam ser diferentes! Tente novamente.");
        else alert("Nome e senha registrados!\nNome: " + aux[0] + "\nSenha: " + aux[1]);
      }
      break;
    case 2:
      let numeros = inputRequest(q, true, true, 5);
      let q2 = maiorNumero(numeros);
      alert("O maior número dentre os registrados é: " + q2.toString());
      break;
    case 3:
      break;
    default:
      alert("Questão indisponível.");
  }
}

const enunciados = ["Digite um Nome e em seguida uma Senha. ", "Por favor, digite 5 números. "];

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
      let image_path = "./img/n1q" + (q_showing + 1).toString() + ".png";
      document.getElementById("q_img").src = image_path;
    }
  });

  document.getElementById("prox").addEventListener("click", function () {
    if (q_showing < enunciados.length - 1) {
      q_showing++;
      document.getElementById("questao").innerHTML = q_showing + 1;
      let image_path = "./img/q" + (q_showing + 1).toString() + ".png";
      document.getElementById("q_img").src = image_path;
    }
  });
});
