// console.log("Hello World");

// const marks = [60, 90, 75, 80];

// console.log(Math.max(...marks));

// console.log(global);

const inputValues = process.argv;
console.log(inputValues, inputValues[0]);

const sum = (a, b) => a + b;
console.log(sum(parseInt(inputValues[2]), parseInt(inputValues[3])));