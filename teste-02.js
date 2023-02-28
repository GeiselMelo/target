function isFibonacci(num) {
    let prev = 0;
    let current = 1;
    while (current < num) {
      const next = prev + current;
      prev = current;
      current = next;
    }
    return current === num;
  }
  
  const num = parseInt(prompt("Digite um número:"));
  if (isFibonacci(num)) {
    console.log(`${num} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`${num} não pertence à sequência de Fibonacci.`);
  }