// Função que verifica se o usuário pode acessar o sistema.
function podeAcessar(usuario) {
    // Verifica se a pessoa é maior de 18 ou é admin, e se a conta não está bloqueada.
    if ((usuario.idade > 18 || usuario.isAdmin) && !usuario.isBlocked) {
      return true;
    }
    // Se não atender a todos os critérios, retorna false.
    return false;
  }
  
  // Chamando a função e exibindo o resultado no console.
  console.log(podeAcessar({ idade: 20, isAdmin: false, isBlocked: false })); // Esperado: true.
  console.log(podeAcessar({ idade: 16, isAdmin: true, isBlocked: true }));  // Esperado: false.