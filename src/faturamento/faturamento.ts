export function calcularFaturamento(): number {
    const faturamento = [1000, 2000, 3000, -100, 500];
    const faturamentoValidos = faturamento.filter(valor => valor > 0);
    return faturamentoValidos.reduce((acc, valor) => acc + valor, 0);
  }
  