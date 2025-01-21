// app.js

// Importando o objeto inteiro
const calculadora = require('./Modulus/calculadora.js');

// Chamando as funções
console.log(calculadora.trajeto());
console.log(calculadora.sinal("Vermelho"));           // Exibe o sinal baseado no limite de velocidade
console.log(calculadora.velocidade(40));  // Exibe a mensagem sobre a velocidade
