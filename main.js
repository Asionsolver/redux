const numbers = [1, 2, 3, 4, 5];

const calculateSum = () => {
    console.log("Calculating sum...");
    return numbers.reduce((total, num) => total + num, 0);
  };

console.log(calculateSum());

const modifiedNumbers = calculateSum() *5;
console.log(modifiedNumbers);

console.log(calculateSum());