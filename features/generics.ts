// Example of generics with functions
class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

// class with generics
class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

const arrayOfNumbers = new ArrayOfAnything<number>([1, 2, 3, 4, 5]);
const arrayOfStrings = new ArrayOfAnything<string>(['a', 'b', 'c']);

// Example of generics with functions
function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// Generics function
function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything<number>([1, 2, 3, 4, 5]);
printAnything<string>(['a', 'b', 'c', 'd']);

// Generic constraints
class Car {
  print(): void {
    console.log("It's a car");
  }
}

class Bike {
  print(): void {
    console.log("It's a bike");
  }
}

interface Printable {
  print(): void;
}

function printCarOrBike<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

printCarOrBike<Car>([new Car(), new Car(), new Car()]);
printCarOrBike<Bike>([new Bike(), new Bike(), new Bike()]);
