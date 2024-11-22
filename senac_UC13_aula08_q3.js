// Função que verifica se o número é par ou ímpar.
function parOuImpar(numero) {
    // Verifica se o número é par usando o operador ternário.
    return (numero % 2 === 0) && numero !== 0 ? "Par" : "Ímpar";
  }
  
  // Chamando a função e exibindo o resultado no console.
  console.log(parOuImpar(10)); // Esperado: "Par".
  console.log(parOuImpar(15)); // Esperado: "Ímpar".
  console.log(parOuImpar(22)); // Esperado: "Par".
  