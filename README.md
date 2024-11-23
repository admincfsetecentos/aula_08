# Funções em JavaScript - Documentação das Atividades

## Atividade 1: Verificar Idade

```javascript
/**
 * Função que verifica se a pessoa é menor ou maior de idade.
 *
 * @example
 *   verificarIdade(15); // "Menor de idade"
 *   verificarIdade(18); // "Maior de idade"
 *   verificarIdade(21); // "Maior de idade"
 * @param   {Number} idade A idade da pessoa.
 * @returns {String} "Menor de idade" ou "Maior de idade" dependendo da idade.
 */
function verificarIdade(idade) {
  return idade < 18 ? "Menor de idade" : "Maior de idade";
}

console.log(verificarIdade(15)); // Esperado: "Menor de idade"
console.log(verificarIdade(18)); // Esperado: "Maior de idade"
console.log(verificarIdade(21)); // Esperado: "Maior de idade"


Atividade 2: Definir Dia da Semana
Descrição da função:

/**
 * Função que retorna o nome do dia da semana com base no número.
 *
 * @example
 *   definirDiaDaSemana(3); // "Terça-feira"
 *   definirDiaDaSemana(7); // "Sábado"
 *   definirDiaDaSemana(8); // "Número inválido"
 * @param   {Number} dia Número do dia da semana (1 a 7).
 * @returns {String} O nome do dia da semana ou "Número inválido" se o número não for válido.
 */
function definirDiaDaSemana(dia) {
  const diasDaSemana = [
    "Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"
  ];
  return (dia >= 1 && dia <= 7) ? diasDaSemana[dia - 1] : "Número inválido";
}

console.log(definirDiaDaSemana(3)); // Esperado: "Terça-feira"
console.log(definirDiaDaSemana(7)); // Esperado: "Sábado"
console.log(definirDiaDaSemana(8)); // Esperado: "Número inválido"


Atividade 3: Verificar Par ou Ímpar
Descrição da função:

/**
 * Função que verifica se o número é par ou ímpar.
 *
 * @example
 *   parOuImpar(10); // "Par"
 *   parOuImpar(15); // "Ímpar"
 *   parOuImpar(22); // "Par"
 * @param   {Number} numero O número a ser verificado.
 * @returns {String} "Par" ou "Ímpar" dependendo do número.
 */
function parOuImpar(numero) {
  return (numero % 2 === 0) && numero !== 0 ? "Par" : "Ímpar";
}

console.log(parOuImpar(10)); // Esperado: "Par"
console.log(parOuImpar(15)); // Esperado: "Ímpar"
console.log(parOuImpar(22)); // Esperado: "Par"


Atividade 4: Verificar Acesso ao Sistema
Descrição da função:

/**
 * Função que verifica se o usuário pode acessar o sistema.
 *
 * @example
 *   podeAcessar({ idade: 20, isAdmin: false, isBlocked: false }); // true
 *   podeAcessar({ idade: 16, isAdmin: true, isBlocked: true });  // false
 * @param   {Object} usuario Um objeto com as propriedades:
 *    - {Number} idade A idade do usuário.
 *    - {Boolean} isAdmin Indica se o usuário é admin.
 *    - {Boolean} isBlocked Indica se o usuário está bloqueado.
 * @returns {Boolean} `true` se o usuário pode acessar, `false` caso contrário.
 */
function podeAcessar(usuario) {
  if ((usuario.idade > 18 || usuario.isAdmin) && !usuario.isBlocked) {
    return true;
  }
  return false;
}

console.log(podeAcessar({ idade: 20, isAdmin: false, isBlocked: false })); // Esperado: true
console.log(podeAcessar({ idade: 16, isAdmin: true, isBlocked: true }));  // Esperado: false


Atividade 5: Calcular Preço com Desconto
Descrição da função:

/**
 * Arrow function que calcula o preço com o desconto aplicado.
 *
 * @example
 *   calcularDesconto(100, 10);  // 90
 *   calcularDesconto(250, 20);  // 200
 * @param   {Number} precoOriginal O preço original do produto.
 * @param   {Number} desconto A porcentagem de desconto a ser aplicada.
 * @returns {Number} O preço final após o desconto.
 */
const calcularDesconto = (precoOriginal, desconto) => {
  const valorDesconto = precoOriginal * (desconto / 100);
  return precoOriginal - valorDesconto;
};

console.log(calcularDesconto(100, 10));  // Esperado: 90
console.log(calcularDesconto(250, 20));  // Esperado: 200