import { calcularSoma } from './soma/soma';
import { pertenceFibonacci } from './fibonacci/fibonacci';
import { calcularFaturamento } from './faturamento/faturamento';
import { calcularPercentual } from './faturamento_estado/faturamento_estado';
import { inverterString } from './inverterString/inverterString';

console.log("Soma dos primeiros 13 números:", calcularSoma());
const numeroFibonacci = 8;
console.log(pertenceFibonacci(numeroFibonacci));
console.log(calcularFaturamento());
console.log(calcularPercentual());
const texto = "Hello, targetsistemas";
console.log("Texto invertido: ", inverterString(texto));
