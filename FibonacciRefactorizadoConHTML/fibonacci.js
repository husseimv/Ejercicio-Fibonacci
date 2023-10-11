const buttonGenerateFibonacci = document.getElementById("generateFibonacci");
const inputNumber = document.getElementById("inputNumber");
const resultNumbers = document.getElementById("resultNumbers");

buttonGenerateFibonacci.addEventListener("click", () => {
  const n = parseInt(inputNumber.value);
  const newFibonacciNumber = displayFibonacci(n);
  resultNumbers.innerHTML = "";                                 
  newFibonacciNumber.forEach((num) => {
    const itemsList = document.createElement("li");              
    itemsList.textContent = num;
    resultNumbers.appendChild(itemsList);
  });
});

const displayFibonacci = (n, numFibonacci = [0, 1]) => {
  if (n <= numFibonacci.length) {
    return numFibonacci;
  }

  const nextValue =
    numFibonacci[numFibonacci.length - 1] +
    numFibonacci[numFibonacci.length - 2];
  numFibonacci.push(nextValue);
  return displayFibonacci(n, numFibonacci); 
};