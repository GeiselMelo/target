const faturamento = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
  };
  
  // Calcula o valor total mensal
  const valorTotal = Object.values(faturamento).reduce((total, valor) => total + valor, 0);
  
  // Calcula o percentual de representação de cada estado
  const percentuais = {};
  for (let estado in faturamento) {
    percentuais[estado] = (faturamento[estado] / valorTotal) * 100;
  }
  
  // Imprime os resultados
  console.log("Valor total: R$" + valorTotal.toFixed(2));
  for (let estado in percentuais) {
    console.log(estado + ": " + percentuais[estado].toFixed(2) + "%");
  }
  