"use strict";
function mutiplicador(numero1, numero2) {
    return numero1 * numero2;
}
;
const saudacao = (nome) => {
    return `Olá ${nome}!`;
};
const resultadoMultiplicacao = mutiplicador(5, 20);
const resultadoSaudacao = saudacao("wellington");
console.log(resultadoMultiplicacao);
console.log(resultadoSaudacao);
