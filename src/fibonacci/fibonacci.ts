export function pertenceFibonacci(num: number): string {
    let a = 0, b = 1, c = 0;
    while (c < num) {
      c = a + b;
      a = b;
      b = c;
    }
    return c === num ? `${num} pertence a sequencia de Fibonacci.` : `${num} não pertence a sequencia de Fibonacci.`;
  }
  