function mutiplicador(numero1: number, numero2: number): number {
    return numero1 * numero2;
};

const saudacao = (nome: string): string => {
    return `Olá ${nome}`;
};

const resultadoMultiplicacao: number = mutiplicador(5, 20);

const resultadoSaudacao: string = saudacao("wellington");

console.log(resultadoMultiplicacao);
console.log(resultadoSaudacao);