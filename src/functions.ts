export function fibonacci(n: number): number {
  switch (n) {
    case 0:
      return 0;
    case 1:
      return 1;
    default:
      return fibonacci(n - 2) + fibonacci(n - 1);
  }
}
