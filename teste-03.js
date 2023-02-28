const faturamentoDiario = [
    {
      "dia": 1,
      "valor": 22174.1664
    },
    {
      "dia": 2,
      "valor": 24537.6698
    },
    {
      "dia": 3,
      "valor": 26139.6134
    },
    {
      "dia": 6,
      "valor": 26742.6612
    },
    {
      "dia": 8,
      "valor": 42889.2258
    },
    {
      "dia": 9,
      "valor": 46251.174
    },
    {
      "dia": 10,
      "valor": 11191.4722
    },
    {
      "dia": 13,
      "valor": 3847.4823
    },
    {
      "dia": 14,
      "valor": 373.7838
    },
    {
      "dia": 15,
      "valor": 2659.7563
    },
    {
      "dia": 16,
      "valor": 48924.2448
    },
    {
      "dia": 17,
      "valor": 18419.2614
    },
    {
      "dia": 20,
      "valor": 35240.1826
    },
    {
      "dia": 21,
      "valor": 43829.1667
    },
    {
      "dia": 22,
      "valor": 18235.6852
    },
    {
      "dia": 23,
      "valor": 4355.0662
    },
    {
      "dia": 24,
      "valor": 13327.1025
    },
    {
      "dia": 27,
      "valor": 25681.8318
    },
    {
      "dia": 28,
      "valor": 1718.1221
    },
    {
      "dia": 29,
      "valor": 13220.495
    },
    {
      "dia": 30,
      "valor": 8414.61
    }
  ];
  
  // cálculo do menor valor de faturamento diário
  let menorValor = faturamentoDiario[0].valor;
  for (let i = 1; i < faturamentoDiario.length; i++) {
    if (faturamentoDiario[i].valor < menorValor) {
      menorValor = faturamentoDiario[i].valor;
    }
  }
  console.log("Menor valor de faturamento diário: " + menorValor);
  
  // cálculo do maior valor de faturamento diário
  let maiorValor = faturamentoDiario[0].valor;
  for (let i = 1; i < faturamentoDiario.length; i++) {
    if (faturamentoDiario[i].valor > maiorValor) {
      maiorValor = faturamentoDiario[i].valor;
    }
  }
  console.log("Maior valor de faturamento diário: " + maiorValor);
  
  // cálculo da média mensal de faturamento diário
  let somaValores = 0;
  let diasComFaturamento = 0;
  for (let i = 0; i < faturamentoDiario.length; i++) {
    if (faturamentoDiario[i].valor > 0) {
      somaValores += faturamentoDiario[i].valor;
      diasComFaturamento++;
    }
}
  