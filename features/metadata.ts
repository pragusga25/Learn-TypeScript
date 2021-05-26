import 'reflect-metadata';

const plane = {
  color: 'red',
};

Reflect.defineMetadata('note', 'Hi, there', plane, 'color');

const note = Reflect.getMetadata('note', plane, 'color');

console.log(note);

// Reflect.defineMetadata('note', 'Hello there', plane);
// Reflect.defineMetadata('height', 10, plane);

// const note = Reflect.getMetadata('note', plane);
// const height = Reflect.getMetadata('height', plane);

// console.log(note);
// console.log(height);
