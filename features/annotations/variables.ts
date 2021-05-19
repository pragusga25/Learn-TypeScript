// type inference
let banana = 5; // Typescript will guess the type of this variable
banana = 10;

let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'blue', 'orange', 'pink'];
let myNumbers: number[] = [1, 2, 3, 4, 5];
let truths: boolean[] = [true, true, false, false];

// Classes
class Car {}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logName: (name: string) => void = (name: string) => {
  console.log(name);
};

// Will be same

// const logName = (name: string): void => {
//   console.log(name);
// };

logName('Taufik Pragusga');

// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"yourName": "Taufik Pragusga", "age": 19}';
const yourData: { yourName: string; age: number } = JSON.parse(json);
console.log(yourData);

// 2) When we declare a variable on one line
// and initializate it later
let words = ['red', 'green', 'white'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') foundWord = true;
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -2, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  numberAboveZero = numbers[i];
}
