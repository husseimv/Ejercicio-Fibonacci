const fib = (n, numFibInicio = [0, 1]) => {
  if (n <= numFibInicio.length) {
    return numFibInicio;
  }

  const nextValue =
    numFibInicio[numFibInicio.length - 1] +
    numFibInicio[numFibInicio.length - 2];
  numFibInicio.push(nextValue);
  return fib(n, numFibInicio);
};

const newFibonacci = fib(10);
console.log(newFibonacci);
