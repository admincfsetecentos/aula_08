// Função que retorna o nome do dia da semana com base no número.
function definirDiaDaSemana(dia) {
    // Cria um array com os nomes dos dias da semana.
    const diasDaSemana = [
      "Domingo",      // 1
      "Segunda-feira",// 2
      "Terça-feira",  // 3
      "Quarta-feira", // 4
      "Quinta-feira", // 5
      "Sexta-feira",  // 6
      "Sábado"        // 7
    ];
  
    // Se o número for válido (entre 1 e 7), retorna o dia correspondente; caso contrário retorna "Número inválido".
    return (dia >= 1 && dia <= 7) ? diasDaSemana[dia - 1] : "Número inválido";
  }
  
  // Chamando a função e exibindo o resultado no console.
  console.log(definirDiaDaSemana(3)); // Esperado: "Terça-feira".
  console.log(definirDiaDaSemana(7)); // Esperado: "Sábado".
  console.log(definirDiaDaSemana(8)); // Esperado: "Número inválido".
  