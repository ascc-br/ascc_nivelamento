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

module.exports = {
  ledsNecessarios,
  letrasEQuantidades,
  indicesLetras,
};
