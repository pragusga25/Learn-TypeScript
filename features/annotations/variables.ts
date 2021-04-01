// type inference
let banana = 5; // Typescript will guess the type of this variable
banana = 10;
// banana = 'taufik' => will get an error
// banana = true; => will get an error

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

logName('Taufik Pragusga');
