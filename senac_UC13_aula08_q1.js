// Função que verifica se a pessoa é menor ou maior de idade.
function verificarIdade(idade) {
    // Verifica se a idade é menor que 18.
    return idade < 18 ? "Menor de idade" : "Maior de idade";
  }
  
  // Chamando a função e exibindo o resultado no console
  console.log(verificarIdade(15)); // Esperado: "Menor de idade".
  console.log(verificarIdade(18)); // Esperado: "Maior de idade".
  console.log(verificarIdade(21)); // Esperado: "Maior de idade".
  