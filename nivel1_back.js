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
    //verifica se há numeros entre eles
    if (numero1 < numero2) {
      //caso numero2 seja maior
      for (var i = 0; numero1 + i < numero2; i++) {
        arrayResposta.push(i + numero1);
      }
    } else {
      //caso numero1 seja maior
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

  // jogar o output pra uma função de front
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

  // jogar o output pra uma função de front
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
