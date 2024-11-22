// Arrow function que calcula o preço com o desconto aplicado.
const calcularDesconto = (precoOriginal, desconto) => {
    // Calcula o valor do desconto e subtrai do preço original.
    const valorDesconto = precoOriginal * (desconto / 100);
    return precoOriginal - valorDesconto;
  };
  
  // Chamando a função e exibindo o resultado no console.
  console.log(calcularDesconto(100, 10));  // Esperado: 90.
  console.log(calcularDesconto(250, 20));  // Esperado: 200.
  