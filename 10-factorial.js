function factorial(n) { return n <= 1 ? 1 : n * factorial(n - 1); } const input = Number(process.argv[2]); console.log(factorial(isNaN(input) ? 1 : input));
